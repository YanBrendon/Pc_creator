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
exports.MaquinaProvider = void 0;
const common_1 = require("@nestjs/common");
const maquina_1 = require("../model/maquina");
const armazenamento_provider_1 = require("./armazenamento-provider");
const database_1 = require("./database");
const memoria_ram_provider_1 = require("./memoria-ram-provider");
const placa_mae_provider_1 = require("./placa-mae-provider");
const processador_provider_1 = require("./processador-provider");
let MaquinaProvider = class MaquinaProvider {
    constructor(dataBase, processadorProvider, placaMaeProvider, memoriaRamProvider, armazenamentoProvider) {
        this.dataBase = dataBase;
        this.processadorProvider = processadorProvider;
        this.placaMaeProvider = placaMaeProvider;
        this.memoriaRamProvider = memoriaRamProvider;
        this.armazenamentoProvider = armazenamentoProvider;
    }
    async getAll() {
        const sql = `
                        select
                        *
                    
                        from
                            maquina                       
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
                id,
                placamaeid,
                memoriaramid,
                processadorid,
                armazenamentoid,
                usuarioid,
                descricao,
                nivelmaquina ,
                precomaquina
                from
                    maquina
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
            const maquina = row;
            maquina.processadorId = await this.processadorProvider.getById(row.processadorid);
            maquina.placaMaeId = await this.placaMaeProvider.getById(row.placamaeid);
            maquina.memoriaRamId = await this.memoriaRamProvider.getById(row.memoriaramid);
            maquina.armazenamentoId = await this.armazenamentoProvider.getById(row.armazenamentoid);
            return maquina;
        }
    }
    async getAllMaquinas(id) {
        const sql = `
                select
                * 
                
                from
                    maquina
                where
                    usuarioid = ?
                `;
        const valores = [id];
        const conexao = this.dataBase.getConexao();
        const retorno = await conexao.query(sql, valores);
        conexao.end();
        var rows = retorno[0];
        return rows;
    }
    async insert(maquina) {
        const sql = `
            insert into maquina
            (
                placamaeid,
                memoriaramid,
                processadorid,
                armazenamentoid,
                usuarioid,
                descricao,
                nivelmaquina,
                precomaquina
            
            )
            values
            (
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?
               
            )`;
        const valores = [
            maquina.placaMaeId.id,
            maquina.memoriaRamId.id,
            maquina.processadorId.id,
            maquina.armazenamentoId.id,
            maquina.usuarioId,
            maquina.descricao,
            maquina.nivelMaquina,
            maquina.precoMaquina
        ];
        const conexao = this.dataBase.getConexao();
        const retorno = await conexao.execute(sql, valores);
        const result = retorno[0];
        maquina.id = result.insertId;
        conexao.end();
    }
    async update(maquina) {
        const sql = `
         update maquina set
        
                placamaeid= ?, 
                memoriaramid= ?, 
                processadorid= ?,
                armazenamentoid= ?,
                usuarioid = ?,
                descricao= ?,
                
                precomaquina = ?
            
            where
            
                id = ?
            
            `;
        const valores = [
            maquina.placaMaeId.id,
            maquina.memoriaRamId.id,
            maquina.processadorId.id,
            maquina.armazenamentoId.id,
            maquina.usuarioId,
            maquina.descricao,
            maquina.precoMaquina,
            maquina.id
        ];
        const conexao = this.dataBase.getConexao();
        await conexao.execute(sql, valores);
        conexao.end();
    }
    async delete(maquina) {
        const sql = `
        delete from maquina
        where
            id = ?`;
        const valores = [
            maquina.id
        ];
        const conexao = this.dataBase.getConexao();
        await conexao.execute(sql, valores);
        conexao.end();
    }
};
MaquinaProvider = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [database_1.DataBase,
        processador_provider_1.ProcessadorProvider,
        placa_mae_provider_1.PlacaMaeProvider,
        memoria_ram_provider_1.MemoriaRamProvider,
        armazenamento_provider_1.ArmazenamentoProvider])
], MaquinaProvider);
exports.MaquinaProvider = MaquinaProvider;
//# sourceMappingURL=maquina-provider.js.map