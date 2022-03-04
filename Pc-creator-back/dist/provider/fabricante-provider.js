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
exports.FabricanteProvider = void 0;
const common_1 = require("@nestjs/common");
const fabricante_1 = require("../model/fabricante");
const database_1 = require("./database");
let FabricanteProvider = class FabricanteProvider {
    constructor(dataBase) {
        this.dataBase = dataBase;
    }
    async getAll() {
        const sql = `
                        select
                        id,
                        nome
                    
                        from
                            fabricante                        
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
                    fabricante
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
    async insert(fabricante) {
        const sql = `
            insert into fabricante
            (
                nome
            )
            values
            (
                ?
               
            )`;
        const valores = [
            fabricante.nome
        ];
        const conexao = this.dataBase.getConexao();
        const retorno = await conexao.execute(sql, valores);
        const result = retorno[0];
        fabricante.id = result.insertId;
        conexao.end();
    }
    async update(fabricante) {
        const sql = `
         update fabricante set
            
             nome = ?
            
            where
            (          
                id = ?
            )
            `;
        const valores = [
            fabricante.nome,
            fabricante.id
        ];
        const conexao = this.dataBase.getConexao();
        await conexao.execute(sql, valores);
        conexao.end();
    }
    async delete(fabricante) {
        const sql = `
        delete from fabricante
        where
            id = ?`;
        const valores = [
            fabricante.id
        ];
        const conexao = this.dataBase.getConexao();
        await conexao.execute(sql, valores);
        conexao.end();
    }
};
FabricanteProvider = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [database_1.DataBase])
], FabricanteProvider);
exports.FabricanteProvider = FabricanteProvider;
//# sourceMappingURL=fabricante-provider.js.map