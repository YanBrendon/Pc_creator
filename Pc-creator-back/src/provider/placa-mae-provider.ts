import { Injectable } from '@nestjs/common';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { PlacaMae } from 'src/model/placamae';
import { DataBase } from './database';
import { FabricanteProvider } from './fabricante-provider';
import { NivelProvider } from './nivel-provider';

@Injectable()
export class PlacaMaeProvider {
    constructor(
        private dataBase: DataBase,
        private nivelProvider: NivelProvider,
        private fabricanteProvider: FabricanteProvider
    ) { }

    async getAll(): Promise<PlacaMae[]> {
        const sql = `
                        select
                            id,
                            modelo,
                            chipset,
                            soquete,
                            valorestimado,
                            fabricanteid,
                            nivelid as nivelId ,
                            descricao
                    
                        from
                            placamae                        
                        `

        const valores: any[] = []

        const conexao = this.dataBase.getConexao()

        const retorno = await conexao.query(sql, valores)

        conexao.end()

        var rows = retorno[0] as RowDataPacket[]

        return rows as PlacaMae[]
    }
    async getById(id: number): Promise<PlacaMae | null> {

        const sql = `
                select
                    *
                from
                    placamae
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

            const placaMae = row as PlacaMae

            placaMae.nivelId = await this.nivelProvider.getById(row.nivelid)
            placaMae.fabricanteId = await this.fabricanteProvider.getById(row.fabricanteid)

            return placaMae
        }
    }
    async insert(placaMae: PlacaMae): Promise<void> {
        
        const sql = `
            insert into placamae
            (
                modelo,
                chipset,
                soquete
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
                ?,
                ?
            )`

        const valores: any[] = [
            placaMae.modelo,
            placaMae.chipset,
            placaMae.soquete,
            placaMae.valorestimado,
            placaMae.fabricanteId,
            placaMae.nivelId,
            placaMae.descricao
        ]

        const conexao = this.dataBase.getConexao()

        const retorno = await conexao.execute(sql, valores)

        const result = retorno[0] as ResultSetHeader

        placaMae.id = result.insertId

        conexao.end()
    }
    async update(placaMae: PlacaMae): Promise<void> {
        const sql = `
         update placamae set
            
                modelo=?,
                chipset=?,
                soquete=?,
                valorestimado=?,
                fabricanteid=?,
                nivelid=?
                descricao=?
            
            where
            
                id = ?
            
            `

        const valores: any[] =
            [
                placaMae.modelo,
                placaMae.chipset,
                placaMae.soquete,
                placaMae.valorestimado,
                placaMae.fabricanteId,
                placaMae.nivelId,
                placaMae.descricao,
                placaMae.id
            ]

        const conexao = this.dataBase.getConexao()

        await conexao.execute(sql, valores)

        conexao.end()
    }
    async delete(placaMae: PlacaMae): Promise<void> {
        const sql = `
        delete from placamae
        where
            id = ?`

        const valores: any[] =
            [
                placaMae.id
            ]

        const conexao = this.dataBase.getConexao()

        await conexao.execute(sql, valores)

        conexao.end()
    }
}
