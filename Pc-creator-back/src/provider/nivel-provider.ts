import { Injectable } from '@nestjs/common';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Nivel } from 'src/model/nivel';
import { DataBase } from './database';

@Injectable()
export class NivelProvider {

    constructor(
        private dataBase: DataBase,
    ) { }

    async getAll(): Promise<Nivel[]> {
        const sql = `
                        select
                        *
                    
                        from
                            nivel                        
                        `

        const valores: any[] = []

        const conexao = this.dataBase.getConexao()

        const retorno = await conexao.query(sql, valores)

        conexao.end()

        var rows = retorno[0] as RowDataPacket[]

        return rows as Nivel[]
    }
    async getById(id: number): Promise<Nivel | null> {

        const sql = `
                select
                    *
                from
                    nivel
                where
                    id = ?
                `

        const valores: any[] = [id]

        const conexao = this.dataBase.getConexao()

        const retorno = await conexao.query(sql, valores)

        conexao.end()

        var rows = retorno[0] as RowDataPacket[]

        if (rows.length > 0)
            return rows[0] as Nivel
        else
            return null
    }
    async insert(nivel: Nivel): Promise<void> {

        const sql = `
            insert into nivel
            (
                descricao
            )
            values
            (
                ?               
            )`

        const valores: any[] = [
            nivel.descricao]


        const conexao = this.dataBase.getConexao()

        const retorno = await conexao.execute(sql, valores)

        const result = retorno[0] as ResultSetHeader

        nivel.id = result.insertId

        conexao.end()
    }
    async update(nivel: Nivel): Promise<void> {
        const sql = `
         update nivel set
            
         descricao = ?
            
            where
            
                id = ?
            
            `

        const valores: any[] =
            [
                nivel.descricao,
                nivel.id
            ]

        const conexao = this.dataBase.getConexao()

        await conexao.execute(sql, valores)

        conexao.end()
    }
    async delete(nivel: Nivel): Promise<void> {
        const sql = `
        delete from nivel
        where
            id = ?`

        const valores: any[] =
            [
                nivel.id
            ]

        const conexao = this.dataBase.getConexao()

        await conexao.execute(sql, valores)

        conexao.end()
    }

}
