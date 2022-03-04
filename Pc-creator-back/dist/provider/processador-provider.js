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
exports.ProcessadorProvider = void 0;
const common_1 = require("@nestjs/common");
const processador_1 = require("../model/processador");
const database_1 = require("./database");
const fabricante_provider_1 = require("./fabricante-provider");
const nivel_provider_1 = require("./nivel-provider");
let ProcessadorProvider = class ProcessadorProvider {
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
                    mcache ,
                    frequencia ,
                    soquete ,
                    arquitetura ,
                    nucleos ,
                    valorestimado ,
                    fabricanteid ,
                    nivelid as nivelId,
                    descricao
                    
                        from
                            processador

                        
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
                modelo,
                mcache ,
                frequencia ,
                soquete ,
                arquitetura ,
                nucleos ,
                valorestimado ,
                fabricanteid ,
                nivelid ,
                descricao
                from
                    processador
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
            const processador = row;
            processador.nivelId = await this.nivelProvider.getById(row.nivelid);
            processador.fabricanteId = await this.fabricanteProvider.getById(row.fabricanteid);
            return processador;
        }
    }
    async insert(processador) {
        console.log(processador);
        const sql = `
            insert into processador
            (
                  
                    modelo,
                    mcache ,
                    frequencia ,
                    soquete ,
                    arquitetura ,
                    nucleos ,
                    valorestimado ,
                    fabricanteid ,
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
                ?,
                ?,
                ?,
                ?
            )`;
        const valores = [
            processador.modelo,
            processador.mcache,
            processador.frequencia,
            processador.soquete,
            processador.arquitetura,
            processador.nucleos,
            processador.valorestimado,
            processador.fabricanteId,
            processador.nivelId,
            processador.descricao
        ];
        const conexao = this.dataBase.getConexao();
        const retorno = await conexao.execute(sql, valores);
        const result = retorno[0];
        processador.id = result.insertId;
        conexao.end();
    }
    async update(processador) {
        const sql = `
         update processador set
            
                modelo = ?,
                mcache=?,
                frequencia=?,
                soquete=?,
                arquitetura=?,
                nucleos=?,
                valorestimado=?,
                fabricanteid=?,
                nivelid=?
                descricao = ?
            
            where
            
                id = ?
            
            `;
        const valores = [
            processador.modelo,
            processador.mcache,
            processador.frequencia,
            processador.soquete,
            processador.arquitetura,
            processador.nucleos,
            processador.valorestimado,
            processador.fabricanteId,
            processador.nivelId,
            processador.descricao,
            processador.id
        ];
        const conexao = this.dataBase.getConexao();
        await conexao.execute(sql, valores);
        conexao.end();
    }
    async delete(processador) {
        const sql = `
        delete from processador
        where
            id = ?`;
        const valores = [
            processador.id
        ];
        const conexao = this.dataBase.getConexao();
        await conexao.execute(sql, valores);
        conexao.end();
    }
};
ProcessadorProvider = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [database_1.DataBase,
        nivel_provider_1.NivelProvider,
        fabricante_provider_1.FabricanteProvider])
], ProcessadorProvider);
exports.ProcessadorProvider = ProcessadorProvider;
//# sourceMappingURL=processador-provider.js.map