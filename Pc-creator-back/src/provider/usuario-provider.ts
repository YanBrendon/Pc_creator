import { Injectable } from '@nestjs/common';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Usuario } from 'src/model/usuario';
import { DataBase } from './database';

@Injectable()
export class UsuarioProvider {

    constructor(
        private dataBase: DataBase,

    ) { }


    async getById(id: number): Promise<Usuario | null> {

        const sql = `
                select
                    *
                from
                usuario
                where
                    id = ?
                `

        const valores: any[] = [id]

        const conexao = this.dataBase.getConexao()

        const retorno = await conexao.query(sql, valores)

        conexao.end()

        var rows = retorno[0] as RowDataPacket[]

        if (rows.length > 0)
            return rows[0] as Usuario
        else
            return null


    } async getBynome(nome: string): Promise<Usuario | null> {

        const sql = `
                select
                    *
                from
                    usuario
                where
                    nome = ?
                `

        const valores: any[] = [nome]

        const conexao = this.dataBase.getConexao()

        const retorno = await conexao.query(sql, valores)

        conexao.end()

        var rows = retorno[0] as RowDataPacket[]

        if (rows.length > 0)
            return rows[0] as Usuario
        else
            return null


    }
    async insert(usuario: Usuario): Promise<void> {

        const sql = `
            insert into usuario
            (
                email,
                nome,
                senha
                  
            )
            values
            (
                ?,
                ?,
                ?
            )`

        const valores: any[] = [
            usuario.email,
            usuario.nome,
            usuario.senha
        ]

        const conexao = this.dataBase.getConexao()

        const retorno = await conexao.execute(sql, valores)

        const result = retorno[0] as ResultSetHeader

        usuario.id = result.insertId

        conexao.end()
    }
    async getByEmail(email:string): Promise<Usuario | null> {

        const sql = `
                    select
                        id,
                        nome,
                        email,
                        senha
                    from
                        usuario
                    where
                        email = ?
                                `

        const valores: any[] = [email]

        const conexao = this.dataBase.getConexao()

        const retorno = await conexao.query(sql, valores)

        conexao.end()

        var rows = retorno[0] as RowDataPacket[]

        if (rows.length > 0)
            return rows[0] as Usuario
        else
            return null
    }
    async update(usuario: Usuario): Promise<void> {
        const sql = `
         update usuario set
            
                id = ?,
                email = ?
                nome=?,
                senha=?
                
            where
            
                id = ?
            
            `

        const valores: any[] =
            [
                usuario.email,
                usuario.nome,
                usuario.senha,
                usuario.id
            ]

        const conexao = this.dataBase.getConexao()

        await conexao.execute(sql, valores)

        conexao.end()
    }
    async delete(usuario: Usuario): Promise<void> {
        const sql = `
        delete from
         usuario
        where
            id = ?`

        const valores: any[] =
            [
                usuario.id
            ]

        const conexao = this.dataBase.getConexao()

        await conexao.execute(sql, valores)

        conexao.end()
    }
}
