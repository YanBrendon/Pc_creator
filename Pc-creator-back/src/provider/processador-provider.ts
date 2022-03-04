import { Injectable } from '@nestjs/common';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Processador } from 'src/model/processador';
import { DataBase } from './database';
import { FabricanteProvider } from './fabricante-provider';
import { NivelProvider } from './nivel-provider';

@Injectable()
export class ProcessadorProvider {

    constructor(
        private dataBase: DataBase,
        private nivelProvider: NivelProvider,
        private fabricanteProvider: FabricanteProvider
    ) { }

    async getAll(): Promise<Processador[]> {
        const sql = `
                        select
                        id,
                        modelo,
                    mcache ,
                    frequencia ,
                    soquete ,
                    arquitetura ,
                    nucleos ,
                    valorestimado ,
                    fabricanteid ,
                    nivelid as nivelId,
                    descricao
                    
                        from
                            processador

                        
                        `

        const valores: any[] = []

        const conexao = this.dataBase.getConexao()

        const retorno = await conexao.query(sql, valores)

        conexao.end()

        var rows = retorno[0] as RowDataPacket[]
        return rows as Processador[]
    }
    async getById(id: number): Promise<Processador | null> {

        const sql = `
                select
                modelo,
                mcache ,
                frequencia ,
                soquete ,
                arquitetura ,
                nucleos ,
                valorestimado ,
                fabricanteid ,
                nivelid ,
                descricao
                from
                    processador
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

            const processador = row as Processador

            processador.nivelId = await this.nivelProvider.getById(row.nivelid)
            processador.fabricanteId = await this.fabricanteProvider.getById(row.fabricanteid)

            return processador
        }


    }
    async insert(processador: Processador): Promise<void> {
        console.log(processador)

        const sql = `
            insert into processador
            (
                  
                    modelo,
                    mcache ,
                    frequencia ,
                    soquete ,
                    arquitetura ,
                    nucleos ,
                    valorestimado ,
                    fabricanteid ,
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
                ?,
                ?,
                ?,
                ?
            )`

        const valores: any[] = [
            processador.modelo,
            processador.mcache,
            processador.frequencia,
            processador.soquete,
            processador.arquitetura,
            processador.nucleos,
            processador.valorestimado,
            processador.fabricanteId,
            processador.nivelId,
            processador.descricao
        ]

        const conexao = this.dataBase.getConexao()

        const retorno = await conexao.execute(sql, valores)

        const result = retorno[0] as ResultSetHeader

        processador.id = result.insertId

        conexao.end()
    }
    async update(processador: Processador): Promise<void> {
        const sql = `
         update processador set
            
                modelo = ?,
                mcache=?,
                frequencia=?,
                soquete=?,
                arquitetura=?,
                nucleos=?,
                valorestimado=?,
                fabricanteid=?,
                nivelid=?
                descricao = ?
            
            where
            
                id = ?
            
            `

        const valores: any[] =
            [
                processador.modelo,
                processador.mcache,
                processador.frequencia,
                processador.soquete,
                processador.arquitetura,
                processador.nucleos,
                processador.valorestimado,
                processador.fabricanteId,
                processador.nivelId,
                processador.descricao,
                processador.id
            ]

        const conexao = this.dataBase.getConexao()

        await conexao.execute(sql, valores)

        conexao.end()
    }
    async delete(processador: Processador): Promise<void> {
        const sql = `
        delete from processador
        where
            id = ?`

        const valores: any[] =
            [
                processador.id
            ]

        const conexao = this.dataBase.getConexao()

        await conexao.execute(sql, valores)

        conexao.end()
    }
}