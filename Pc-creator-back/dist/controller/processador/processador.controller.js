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
exports.ProcessadorController = void 0;
const common_1 = require("@nestjs/common");
const processador_1 = require("../../model/processador");
const resposta_1 = require("../../model/resposta");
const processador_provider_1 = require("../../provider/processador-provider");
const processador_service_1 = require("../../services/processador/processador.service");
let ProcessadorController = class ProcessadorController {
    constructor(processadorProvider, processadorServices) {
        this.processadorProvider = processadorProvider;
        this.processadorServices = processadorServices;
    }
    async getAll() {
        try {
            const processadores = await this.processadorProvider.getAll();
            return {
                success: true,
                data: processadores,
                message: ''
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
            const processadores = await this.processadorProvider.getById(id);
            return {
                success: true,
                data: processadores,
                message: ''
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
    async insert(processador) {
        try {
            processador.id = 0;
            const processadores = await this.processadorServices.save(processador);
            return {
                success: true,
                data: processadores,
                message: ''
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
            const processadorExiste = await this.processadorProvider.getById(id);
            if (processadorExiste == null)
                throw new Error(`Processador com id ${id} não encontrado`);
            await this.processadorProvider.delete(processadorExiste);
            return {
                data: processadorExiste,
                message: 'Processador deletado com sucesso',
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
    async update(processador) {
        try {
            const processadorExiste = await this.processadorProvider.getById(processador.id);
            if (processadorExiste == null)
                throw new Error(`Processador com id ${processador.id} não encontrado`);
            const processadorSalvo = await this.processadorServices.save(processador);
            return {
                data: processadorSalvo,
                message: 'Processador alterado com sucesso',
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
], ProcessadorController.prototype, "getAll", null);
__decorate([
    common_1.Get('getbyid/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProcessadorController.prototype, "getById", null);
__decorate([
    common_1.Post('insert'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [processador_1.Processador]),
    __metadata("design:returntype", Promise)
], ProcessadorController.prototype, "insert", null);
__decorate([
    common_1.Put('delete/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProcessadorController.prototype, "delete", null);
__decorate([
    common_1.Put('update'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [processador_1.Processador]),
    __metadata("design:returntype", Promise)
], ProcessadorController.prototype, "update", null);
ProcessadorController = __decorate([
    common_1.Controller('processador'),
    __metadata("design:paramtypes", [processador_provider_1.ProcessadorProvider,
        processador_service_1.ProcessadorService])
], ProcessadorController);
exports.ProcessadorController = ProcessadorController;
//# sourceMappingURL=processador.controller.js.map