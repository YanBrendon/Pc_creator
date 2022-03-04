"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioProvider = void 0;
const common_1 = require("@nestjs/common");
const usuario_1 = require("../model/usuario");
const database_1 = require("./database");
let UsuarioProvider = class UsuarioProvider {
    constructor(dataBase) {
        this.dataBase = dataBase;
    }
    async getById(id) {
        const sql = `
                select
                    *
                from
                usuario
                where
                    id = ?
                `;
        const valores = [id];
        const conexao = this.dataBase.getConexao();
        const retorno = await conexao.query(sql, valores);
        conexao.end();
        var rows = retorno[0];
        if (rows.length > 0)
            return rows[0];
        else
            return null;
    }
    async getBynome(nome) {
        const sql = `
                select
                    *
                from
                    usuario
                where
                    nome = ?
                `;
        const valores = [nome];
        const conexao = this.dataBase.getConexao();
        const retorno = await conexao.query(sql, valores);
        conexao.end();
        var rows = retorno[0];
        if (rows.length > 0)
            return rows[0];
        else
            return null;
    }
    async insert(usuario) {
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
            )`;
        const valores = [
            usuario.email,
            usuario.nome,
            usuario.senha
        ];
        const conexao = this.dataBase.getConexao();
        const retorno = await conexao.execute(sql, valores);
        const result = retorno[0];
        usuario.id = result.insertId;
        conexao.end();
    }
    async getByEmail(email) {
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
                                `;
        const valores = [email];
        const conexao = this.dataBase.getConexao();
        const retorno = await conexao.query(sql, valores);
        conexao.end();
        var rows = retorno[0];
        if (rows.length > 0)
            return rows[0];
        else
            return null;
    }
    async update(usuario) {
        const sql = `
         update usuario set
            
                id = ?,
                email = ?
                nome=?,
                senha=?
                
            where
            
                id = ?
            
            `;
        const valores = [
            usuario.email,
            usuario.nome,
            usuario.senha,
            usuario.id
        ];
        const conexao = this.dataBase.getConexao();
        await conexao.execute(sql, valores);
        conexao.end();
    }
    async delete(usuario) {
        const sql = `
        delete from
         usuario
        where
            id = ?`;
        const valores = [
            usuario.id
        ];
        const conexao = this.dataBase.getConexao();
        await conexao.execute(sql, valores);
        conexao.end();
    }
};
UsuarioProvider = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [database_1.DataBase])
], UsuarioProvider);
exports.UsuarioProvider = UsuarioProvider;
//# sourceMappingURL=usuario-provider.js.map