import { Injectable } from '@nestjs/common';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { MemoriaRam } from 'src/model/memoriaram';
import { DataBase } from './database';
import { FabricanteProvider } from './fabricante-provider';
import { NivelProvider } from './nivel-provider';

@Injectable()
export class MemoriaRamProvider {
    constructor(
        private dataBase: DataBase,
        private nivelProvider: NivelProvider,
        private fabricanteProvider: FabricanteProvider
    ) { }

    async getAll(): Promise<MemoriaRam[]> {
        const sql = `
                        select
                        id,
                        modelo,
                        formato,
                        capacidade,
                        valorestimado,
                        fabricanteid,
                        nivelid as nivelId ,
                        descricao
                    
                        from
                            memoriaran                        
                        `

        const valores: any[] = []

        const conexao = this.dataBase.getConexao()

        const retorno = await conexao.query(sql, valores)

        conexao.end()

        var rows = retorno[0] as RowDataPacket[]

        return rows as MemoriaRam[]
    }
    async getById(id: number): Promise<MemoriaRam | null> {

        const sql = `
                select
                    *
                from
                memoriaran
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

            const memoriaRam = row as MemoriaRam

            memoriaRam.nivelId = await this.nivelProvider.getById(row.nivelid)
            memoriaRam.fabricanteId = await this.fabricanteProvider.getById(row.fabricanteid)

            return memoriaRam
        }
    }
    async insert(memoriaran: MemoriaRam): Promise<void> {
        
        const sql = `
            insert into memoriaran
            (
                modelo,
                formato,
                capacidade,
                valorestimado,
                fabricanteid,
                nivelid ,
                descricao
            )
            values
            (
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?
            )`

        const valores: any[] = [
            memoriaran.modelo,
            memoriaran.formato,
            memoriaran.valorestimado,
            memoriaran.fabricanteId,
            memoriaran.nivelId,
            memoriaran.descricao
        ]

        const conexao = this.dataBase.getConexao()

        const retorno = await conexao.execute(sql, valores)

        const result = retorno[0] as ResultSetHeader

        memoriaran.id = result.insertId

        conexao.end()
    }
    async update(memoriaran: MemoriaRam): Promise<void> {
        const sql = `
         update memoriaran set
            
         modelo=?,
         formato=?,
         capacidade=?,
         valorestimado=?,
         fabricanteid=?,
         nivelid=?,
         descricao=?
            
            where
            
                id = ?
            
            `

        const valores: any[] =
            [
                memoriaran.modelo,
                memoriaran.formato,
                memoriaran.capacidade,
                memoriaran.valorestimado,
                memoriaran.fabricanteId,
                memoriaran.nivelId,
                memoriaran.descricao,
                memoriaran.id
            ]

        const conexao = this.dataBase.getConexao()

        await conexao.execute(sql, valores)

        conexao.end()
    }
    async delete(memoriaran: MemoriaRam): Promise<void> {
        const sql = `
        delete from memoriaran
        where
            id = ?`

        const valores: any[] =
            [
                memoriaran.id
            ]

        const conexao = this.dataBase.getConexao()

        await conexao.execute(sql, valores)

        conexao.end()
    }
}
