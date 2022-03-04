import { Injectable } from '@nestjs/common';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Armazenamento } from 'src/model/armazenamento';
import { DataBase } from './database';
import { FabricanteProvider } from './fabricante-provider';
import { NivelProvider } from './nivel-provider';

@Injectable()
export class ArmazenamentoProvider {

    constructor(
        private dataBase: DataBase,
        private nivelProvider: NivelProvider,
        private fabricanteProvider: FabricanteProvider
    ) { }

    async getAll(): Promise<Armazenamento[]> {
        const sql = `
                        select
                        id,
                        modelo,
                        capacidade,
                        valorestimado,
                        fabricanteid,
                        nivelid as nivelId ,
                        descricao
                    
                        from
                            armazenamento                        
                        `

        const valores: any[] = []

        const conexao = this.dataBase.getConexao()

        const retorno = await conexao.query(sql, valores)

        conexao.end()

        var rows = retorno[0] as RowDataPacket[]

        return rows as Armazenamento[]
    }
    async getById(id: number): Promise<Armazenamento | null> {

        const sql = `
                select
                    *
                from
                    armazenamento
                where
                    id = ?
                `

        const valores: any[] = [id]

        const conexao = this.dataBase.getConexao()

        const retorno = await conexao.query(sql, valores)

        conexao.end()

        var rows = retorno[0] as RowDataPacket[]
        if (rows.length > 0) {
            const row = rows[0]

            const armazenamento = row as Armazenamento

            armazenamento.nivelId = await this.nivelProvider.getById(row.nivelid)
            armazenamento.fabricanteId = await this.fabricanteProvider.getById(row.fabricanteid)

            return armazenamento
        }
    }
    async insert(armazenamento: Armazenamento): Promise<void> {

        const sql = `
            insert into armazenamento
            (
                modelo,
                capacidade,
                valorestimado,
                fabricanteid,
                nivelid,
                descricao
            )
            values
            (
                ?,
                ?,
                ?,
                ?,
                ?,
                ?
            )`

        const valores: any[] = [
            armazenamento.modelo,
            armazenamento.capacidade,
            armazenamento.valorestimado,
            armazenamento.fabricanteId,
            armazenamento.nivelId,
            armazenamento.descricao
        ]


        const conexao = this.dataBase.getConexao()

        const retorno = await conexao.execute(sql, valores)

        const result = retorno[0] as ResultSetHeader

        armazenamento.id = result.insertId

        conexao.end()
    }
    async update(armazenamento: Armazenamento): Promise<void> {
        const sql = `
         update armazenamento set
            
         modelo=?,
         capacidade=?,
         valorestimado=?,
         fabricanteid=?,
         nivelid=?,
         descricao = ?
            
            where
            
                id = ?
            
            `

        const valores: any[] =
            [
                armazenamento.modelo,
                armazenamento.capacidade,
                armazenamento.valorestimado,
                armazenamento.fabricanteId,
                armazenamento.nivelId,
                armazenamento.descricao,
                armazenamento.id
            ]

        const conexao = this.dataBase.getConexao()

        await conexao.execute(sql, valores)

        conexao.end()
    }
    async delete(armazenamento: Armazenamento): Promise<void> {
        const sql = `
        delete from armazenamento
        where
            id = ?`

        const valores: any[] =
            [
                armazenamento.id
            ]

        const conexao = this.dataBase.getConexao()

        await conexao.execute(sql, valores)

        conexao.end()
    }
}
