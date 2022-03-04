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
exports.NivelProvider = void 0;
const common_1 = require("@nestjs/common");
const nivel_1 = require("../model/nivel");
const database_1 = require("./database");
let NivelProvider = class NivelProvider {
    constructor(dataBase) {
        this.dataBase = dataBase;
    }
    async getAll() {
        const sql = `
                        select
                        *
                    
                        from
                            nivel                        
                        `;
        const valores = [];
        const conexao = this.dataBase.getConexao();
        const retorno = await conexao.query(sql, valores);
        conexao.end();
        var rows = retorno[0];
        return rows;
    }
    async getById(id) {
        const sql = `
                select
                    *
                from
                    nivel
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
    async insert(nivel) {
        const sql = `
            insert into nivel
            (
                descricao
            )
            values
            (
                ?               
            )`;
        const valores = [
            nivel.descricao
        ];
        const conexao = this.dataBase.getConexao();
        const retorno = await conexao.execute(sql, valores);
        const result = retorno[0];
        nivel.id = result.insertId;
        conexao.end();
    }
    async update(nivel) {
        const sql = `
         update nivel set
            
         descricao = ?
            
            where
            
                id = ?
            
            `;
        const valores = [
            nivel.descricao,
            nivel.id
        ];
        const conexao = this.dataBase.getConexao();
        await conexao.execute(sql, valores);
        conexao.end();
    }
    async delete(nivel) {
        const sql = `
        delete from nivel
        where
            id = ?`;
        const valores = [
            nivel.id
        ];
        const conexao = this.dataBase.getConexao();
        await conexao.execute(sql, valores);
        conexao.end();
    }
};
NivelProvider = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [database_1.DataBase])
], NivelProvider);
exports.NivelProvider = NivelProvider;
//# sourceMappingURL=nivel-provider.js.map