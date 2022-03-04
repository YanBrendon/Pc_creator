import { Injectable } from '@nestjs/common';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Fabricante } from 'src/model/fabricante';
import { DataBase } from './database';

@Injectable()
export class FabricanteProvider {
    constructor(
        private dataBase: DataBase,
    ) { }

    async getAll(): Promise<Fabricante[]> {
        const sql = `
                        select
                        id,
                        nome
                    
                        from
                            fabricante                        
                        `

        const valores: any[] = []

        const conexao = this.dataBase.getConexao()

        const retorno = await conexao.query(sql, valores)

        conexao.end()

        var rows = retorno[0] as RowDataPacket[]

        return rows as Fabricante[]
    }
    async getById(id: number): Promise<Fabricante | null> {

        const sql = `
                select
                    *
                from
                    fabricante
                where
                    id = ?
                `

        const valores: any[] = [id]

        const conexao = this.dataBase.getConexao()

        const retorno = await conexao.query(sql, valores)

        conexao.end()

        var rows = retorno[0] as RowDataPacket[]

        if (rows.length > 0)
            return rows[0] as Fabricante
        else
            return null
    }
    async insert(fabricante: Fabricante): Promise<void> {

        const sql = `
            insert into fabricante
            (
                nome
            )
            values
            (
                ?
               
            )`

        const valores: any[] = [
            fabricante.nome
        ]


        const conexao = this.dataBase.getConexao()

        const retorno = await conexao.execute(sql, valores)

        const result = retorno[0] as ResultSetHeader

        fabricante.id = result.insertId

        conexao.end()
    }
    async update(fabricante: Fabricante): Promise<void> {
        const sql = `
         update fabricante set
            
             nome = ?
            
            where
            (          
                id = ?
            )
            `

        const valores: any[] =
            [
                fabricante.nome,
                fabricante.id
            ]

        const conexao = this.dataBase.getConexao()

        await conexao.execute(sql, valores)

        conexao.end()
    }
    async delete(fabricante: Fabricante): Promise<void> {
        const sql = `
        delete from fabricante
        where
            id = ?`

        const valores: any[] =
            [
                fabricante.id
            ]

        const conexao = this.dataBase.getConexao()

        await conexao.execute(sql, valores)

        conexao.end()
    }
}
