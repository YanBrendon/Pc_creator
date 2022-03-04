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
exports.PlacaMaeProvider = void 0;
const common_1 = require("@nestjs/common");
const placamae_1 = require("../model/placamae");
const database_1 = require("./database");
const fabricante_provider_1 = require("./fabricante-provider");
const nivel_provider_1 = require("./nivel-provider");
let PlacaMaeProvider = class PlacaMaeProvider {
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
                            chipset,
                            soquete,
                            valorestimado,
                            fabricanteid,
                            nivelid as nivelId ,
                            descricao
                    
                        from
                            placamae                        
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
                    placamae
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
            const placaMae = row;
            placaMae.nivelId = await this.nivelProvider.getById(row.nivelid);
            placaMae.fabricanteId = await this.fabricanteProvider.getById(row.fabricanteid);
            return placaMae;
        }
    }
    async insert(placaMae) {
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
            )`;
        const valores = [
            placaMae.modelo,
            placaMae.chipset,
            placaMae.soquete,
            placaMae.valorestimado,
            placaMae.fabricanteId,
            placaMae.nivelId,
            placaMae.descricao
        ];
        const conexao = this.dataBase.getConexao();
        const retorno = await conexao.execute(sql, valores);
        const result = retorno[0];
        placaMae.id = result.insertId;
        conexao.end();
    }
    async update(placaMae) {
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
            
            `;
        const valores = [
            placaMae.modelo,
            placaMae.chipset,
            placaMae.soquete,
            placaMae.valorestimado,
            placaMae.fabricanteId,
            placaMae.nivelId,
            placaMae.descricao,
            placaMae.id
        ];
        const conexao = this.dataBase.getConexao();
        await conexao.execute(sql, valores);
        conexao.end();
    }
    async delete(placaMae) {
        const sql = `
        delete from placamae
        where
            id = ?`;
        const valores = [
            placaMae.id
        ];
        const conexao = this.dataBase.getConexao();
        await conexao.execute(sql, valores);
        conexao.end();
    }
};
PlacaMaeProvider = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [database_1.DataBase,
        nivel_provider_1.NivelProvider,
        fabricante_provider_1.FabricanteProvider])
], PlacaMaeProvider);
exports.PlacaMaeProvider = PlacaMaeProvider;
//# sourceMappingURL=placa-mae-provider.js.map