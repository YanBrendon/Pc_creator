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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmazenamentoController = void 0;
const common_1 = require("@nestjs/common");
const armazenamento_1 = require("../../model/armazenamento");
const resposta_1 = require("../../model/resposta");
const armazenamento_provider_1 = require("../../provider/armazenamento-provider");
const armazenamento_service_1 = require("../../services/armazenamento/armazenamento.service");
let ArmazenamentoController = class ArmazenamentoController {
    constructor(armazenamentoProvider, armazenamentoServices) {
        this.armazenamentoProvider = armazenamentoProvider;
        this.armazenamentoServices = armazenamentoServices;
    }
    async getAll() {
        try {
            const armazenamentos = await this.armazenamentoProvider.getAll();
            return {
                success: true,
                data: armazenamentos,
                message: 'Lista de Armazenamentos carregada com sucesso'
            };
        }
        catch (error) {
            return {
                success: false,
                data: null,
                message: error.message
            };
        }
    }
    async getById(idParam) {
        const id = parseInt(idParam);
        try {
            const armazenamento = await this.armazenamentoProvider.getById(id);
            return {
                success: true,
                data: armazenamento,
                message: `Armazenamento ${id} carregado com sucesso`
            };
        }
        catch (error) {
            return {
                success: false,
                data: null,
                message: error.message
            };
        }
    }
    async insert(armazenamentos) {
        try {
            armazenamentos.id = 0;
            const armazenamento = await this.armazenamentoServices.save(armazenamentos);
            return {
                success: true,
                data: armazenamento,
                message: `Armazenamento ${armazenamento.modelo} inserido com sucesso`
            };
        }
        catch (error) {
            return {
                success: false,
                data: null,
                message: error.message
            };
        }
    }
    async delete(idParam) {
        const id = parseInt(idParam);
        try {
            const armazenamento = await this.armazenamentoProvider.getById(id);
            if (armazenamento == null)
                throw new Error(`Armazenamento com id ${id} n??o encontrado`);
            await this.armazenamentoProvider.delete(armazenamento);
            return {
                data: armazenamento,
                message: 'Armazenamento deletado com sucesso',
                success: true
            };
        }
        catch (error) {
            return {
                data: null,
                message: error.message,
                success: false
            };
        }
    }
    async update(armazenamento) {
        try {
            const processadorExiste = await this.armazenamentoProvider.getById(armazenamento.id);
            if (processadorExiste == null)
                throw new Error(`armazenamento com id ${armazenamento.id} n??o encontrado`);
            const armazenamentoSalvo = await this.armazenamentoServices.save(armazenamento);
            return {
                data: armazenamentoSalvo,
                message: 'Armazenamento alterado com sucesso',
                success: true
            };
        }
        catch (error) {
            return {
                data: null,
                message: error.message,
                success: false
            };
        }
    }
};
__decorate([
    common_1.Get('getall'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArmazenamentoController.prototype, "getAll", null);
__decorate([
    common_1.Get('getbyid/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArmazenamentoController.prototype, "getById", null);
__decorate([
    common_1.Post('insert'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [armazenamento_1.Armazenamento]),
    __metadata("design:returntype", Promise)
], ArmazenamentoController.prototype, "insert", null);
__decorate([
    common_1.Put('delete/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArmazenamentoController.prototype, "delete", null);
__decorate([
    common_1.Put('update'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [armazenamento_1.Armazenamento]),
    __metadata("design:returntype", Promise)
], ArmazenamentoController.prototype, "update", null);
ArmazenamentoController = __decorate([
    common_1.Controller('armazenamento'),
    __metadata("design:paramtypes", [armazenamento_provider_1.ArmazenamentoProvider,
        armazenamento_service_1.ArmazenamentoService])
], ArmazenamentoController);
exports.ArmazenamentoController = ArmazenamentoController;
//# sourceMappingURL=armazenamento.controller.js.map