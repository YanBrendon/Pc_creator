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
exports.MemoriaRamProvider = void 0;
const common_1 = require("@nestjs/common");
const memoriaram_1 = require("../model/memoriaram");
const database_1 = require("./database");
const fabricante_provider_1 = require("./fabricante-provider");
const nivel_provider_1 = require("./nivel-provider");
let MemoriaRamProvider = class MemoriaRamProvider {
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
                        formato,
                        capacidade,
                        valorestimado,
                        fabricanteid,
                        nivelid as nivelId ,
                        descricao
                    
                        from
                            memoriaran                        
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
                memoriaran
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
            const memoriaRam = row;
            memoriaRam.nivelId = await this.nivelProvider.getById(row.nivelid);
            memoriaRam.fabricanteId = await this.fabricanteProvider.getById(row.fabricanteid);
            return memoriaRam;
        }
    }
    async insert(memoriaran) {
        const sql = `
            insert into memoriaran
            (
                modelo,
                formato,
                capacidade,
                valorestimado,
                fabricanteid,
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
                ?
            )`;
        const valores = [
            memoriaran.modelo,
            memoriaran.formato,
            memoriaran.valorestimado,
            memoriaran.fabricanteId,
            memoriaran.nivelId,
            memoriaran.descricao
        ];
        const conexao = this.dataBase.getConexao();
        const retorno = await conexao.execute(sql, valores);
        const result = retorno[0];
        memoriaran.id = result.insertId;
        conexao.end();
    }
    async update(memoriaran) {
        const sql = `
         update memoriaran set
            
         modelo=?,
         formato=?,
         capacidade=?,
         valorestimado=?,
         fabricanteid=?,
         nivelid=?,
         descricao=?
            
            where
            
                id = ?
            
            `;
        const valores = [
            memoriaran.modelo,
            memoriaran.formato,
            memoriaran.capacidade,
            memoriaran.valorestimado,
            memoriaran.fabricanteId,
            memoriaran.nivelId,
            memoriaran.descricao,
            memoriaran.id
        ];
        const conexao = this.dataBase.getConexao();
        await conexao.execute(sql, valores);
        conexao.end();
    }
    async delete(memoriaran) {
        const sql = `
        delete from memoriaran
        where
            id = ?`;
        const valores = [
            memoriaran.id
        ];
        const conexao = this.dataBase.getConexao();
        await conexao.execute(sql, valores);
        conexao.end();
    }
};
MemoriaRamProvider = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [database_1.DataBase,
        nivel_provider_1.NivelProvider,
        fabricante_provider_1.FabricanteProvider])
], MemoriaRamProvider);
exports.MemoriaRamProvider = MemoriaRamProvider;
//# sourceMappingURL=memoria-ram-provider.js.map