import { Injectable } from '@nestjs/common';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Maquina } from 'src/model/maquina';

import { ArmazenamentoProvider } from './armazenamento-provider';
import { DataBase } from './database';
import { MemoriaRamProvider } from './memoria-ram-provider';
import { PlacaMaeProvider } from './placa-mae-provider';
import { ProcessadorProvider } from './processador-provider';

@Injectable()
export class MaquinaProvider {
    constructor(
        private dataBase: DataBase,
        private processadorProvider: ProcessadorProvider,
        private placaMaeProvider: PlacaMaeProvider,
        private memoriaRamProvider: MemoriaRamProvider,
        private armazenamentoProvider: ArmazenamentoProvider





    ) { }

    async getAll(): Promise<Maquina[]> {
        const sql = `
                        select
                        *
                    
                        from
                            maquina                       
                        `

        const valores: any[] = []

        const conexao = this.dataBase.getConexao()

        const retorno = await conexao.query(sql, valores)

        conexao.end()

        var rows = retorno[0] as RowDataPacket[]

        return rows as Maquina[]
    }
    async getById(id: number): Promise<Maquina | null> {

        const sql = `
                select
                id,
                placamaeid,
                memoriaramid,
                processadorid,
                armazenamentoid,
                usuarioid,
                descricao,
                nivelmaquina ,
                precomaquina
                from
                    maquina
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

            const maquina = row as Maquina

            maquina.processadorId = await this.processadorProvider.getById(row.processadorid)
            maquina.placaMaeId = await this.placaMaeProvider.getById(row.placamaeid)
            maquina.memoriaRamId = await this.memoriaRamProvider.getById(row.memoriaramid)
            maquina.armazenamentoId = await this.armazenamentoProvider.getById(row.armazenamentoid)

            return maquina
        }
    }
    async getAllMaquinas(id: number): Promise<Maquina[] | null> {

        const sql = `
                select
                * 
                
                from
                    maquina
                where
                    usuarioid = ?
                `

        const valores: any[] = [id]

        const conexao = this.dataBase.getConexao()

        const retorno = await conexao.query(sql, valores)

        conexao.end()

        var rows = retorno[0] as RowDataPacket[]

        return rows as Maquina[]

    }
    async insert(maquina: Maquina): Promise<void> {

        const sql = `
            insert into maquina
            (
                placamaeid,
                memoriaramid,
                processadorid,
                armazenamentoid,
                usuarioid,
                descricao,
                nivelmaquina,
                precomaquina
            
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
                ?
               
            )`

        const valores: any[] = [
            maquina.placaMaeId.id,
            maquina.memoriaRamId.id,
            maquina.processadorId.id,
            maquina.armazenamentoId.id,
            maquina.usuarioId,
            maquina.descricao,
            maquina.nivelMaquina,
            maquina.precoMaquina
        ]


        const conexao = this.dataBase.getConexao()

        const retorno = await conexao.execute(sql, valores)

        const result = retorno[0] as ResultSetHeader

        maquina.id = result.insertId

        conexao.end()
    }
    async update(maquina: Maquina): Promise<void> {
        const sql = `
         update maquina set
        
                placamaeid= ?, 
                memoriaramid= ?, 
                processadorid= ?,
                armazenamentoid= ?,
                usuarioid = ?,
                descricao= ?,
                
                precomaquina = ?
            
            where
            
                id = ?
            
            `

        const valores: any[] =
            [
                maquina.placaMaeId.id,
                maquina.memoriaRamId.id,
                maquina.processadorId.id,
                maquina.armazenamentoId.id,
                maquina.usuarioId,
                maquina.descricao,
               // maquina.nivelMaquina,
                maquina.precoMaquina,
                maquina.id
            ]


            

        const conexao = this.dataBase.getConexao()

        await conexao.execute(sql, valores)

        conexao.end()
    }
    async delete(maquina: Maquina): Promise<void> {
        const sql = `
        delete from maquina
        where
            id = ?`

        const valores: any[] =
            [
                maquina.id
            ]

        const conexao = this.dataBase.getConexao()

        await conexao.execute(sql, valores)

        conexao.end()
    }
}
