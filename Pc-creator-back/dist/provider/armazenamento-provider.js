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
exports.ArmazenamentoProvider = void 0;
const common_1 = require("@nestjs/common");
const armazenamento_1 = require("../model/armazenamento");
const database_1 = require("./database");
const fabricante_provider_1 = require("./fabricante-provider");
const nivel_provider_1 = require("./nivel-provider");
let ArmazenamentoProvider = class ArmazenamentoProvider {
    constructor(dataBase, nivelProvider, fabricanteProvider) {
        this.dataBase = dataBase;
        this.nivelProvider = nivelProvider;
        this.fabricanteProvider = fabricanteProvider;
    }
    async getAll() {
        const sql = `
                        select
                        id,
                        modelo,
                        capacidade,
                        valorestimado,
                        fabricanteid,
                        nivelid as nivelId ,
                        descricao
                    
                        from
                            armazenamento                        
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
                    armazenamento
                where
                    id = ?
                `;
        const valores = [id];
        const conexao = this.dataBase.getConexao();
        const retorno = await conexao.query(sql, valores);
        conexao.end();
        var rows = retorno[0];
        if (rows.length > 0) {
            const row = rows[0];
            const armazenamento = row;
            armazenamento.nivelId = await this.nivelProvider.getById(row.nivelid);
            armazenamento.fabricanteId = await this.fabricanteProvider.getById(row.fabricanteid);
            return armazenamento;
        }
    }
    async insert(armazenamento) {
        const sql = `
            insert into armazenamento
            (
                modelo,
                capacidade,
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
                ?
            )`;
        const valores = [
            armazenamento.modelo,
            armazenamento.capacidade,
            armazenamento.valorestimado,
            armazenamento.fabricanteId,
            armazenamento.nivelId,
            armazenamento.descricao
        ];
        const conexao = this.dataBase.getConexao();
        const retorno = await conexao.execute(sql, valores);
        const result = retorno[0];
        armazenamento.id = result.insertId;
        conexao.end();
    }
    async update(armazenamento) {
        const sql = `
         update armazenamento set
            
         modelo=?,
         capacidade=?,
         valorestimado=?,
         fabricanteid=?,
         nivelid=?,
         descricao = ?
            
            where
            
                id = ?
            
            `;
        const valores = [
            armazenamento.modelo,
            armazenamento.capacidade,
            armazenamento.valorestimado,
            armazenamento.fabricanteId,
            armazenamento.nivelId,
            armazenamento.descricao,
            armazenamento.id
        ];
        const conexao = this.dataBase.getConexao();
        await conexao.execute(sql, valores);
        conexao.end();
    }
    async delete(armazenamento) {
        const sql = `
        delete from armazenamento
        where
            id = ?`;
        const valores = [
            armazenamento.id
        ];
        const conexao = this.dataBase.getConexao();
        await conexao.execute(sql, valores);
        conexao.end();
    }
};
ArmazenamentoProvider = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [database_1.DataBase,
        nivel_provider_1.NivelProvider,
        fabricante_provider_1.FabricanteProvider])
], ArmazenamentoProvider);
exports.ArmazenamentoProvider = ArmazenamentoProvider;
//# sourceMappingURL=armazenamento-provider.js.map