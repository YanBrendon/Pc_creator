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
exports.MemoriaRamController = void 0;
const common_1 = require("@nestjs/common");
const memoriaram_1 = require("../../model/memoriaram");
const resposta_1 = require("../../model/resposta");
const memoria_ram_provider_1 = require("../../provider/memoria-ram-provider");
const memoria_ram_service_1 = require("../../services/memoria-ram/memoria-ram.service");
let MemoriaRamController = class MemoriaRamController {
    constructor(memoriaRamProvider, memoriaRamService) {
        this.memoriaRamProvider = memoriaRamProvider;
        this.memoriaRamService = memoriaRamService;
    }
    async getAll() {
        try {
            const memoriasRam = await this.memoriaRamProvider.getAll();
            return {
                success: true,
                data: memoriasRam,
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
            const memoriasRam = await this.memoriaRamProvider.getById(id);
            return {
                success: true,
                data: memoriasRam,
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
    async insert(memoriaRam) {
        try {
            memoriaRam.id = 0;
            const memoriasRam = await this.memoriaRamService.save(memoriaRam);
            return {
                success: true,
                data: memoriasRam,
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
            const memoriasRamExistente = await this.memoriaRamProvider.getById(id);
            if (memoriasRamExistente == null)
                throw new Error(`Memoria Ran com id ${id} não encontrado`);
            await this.memoriaRamProvider.delete(memoriasRamExistente);
            return {
                data: memoriasRamExistente,
                message: 'Memoria Ran deletado com sucesso',
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
    async update(memoriaRam) {
        try {
            const memoriasRamExistente = await this.memoriaRamProvider.getById(memoriaRam.id);
            if (memoriasRamExistente == null)
                throw new Error(`Memoria Ran com id ${memoriaRam.id} não encontrado`);
            const memoriasRanSalvo = await this.memoriaRamService.save(memoriaRam);
            return {
                data: memoriasRanSalvo,
                message: 'Memoria Ran alterado com sucesso',
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
], MemoriaRamController.prototype, "getAll", null);
__decorate([
    common_1.Get('getbyid/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MemoriaRamController.prototype, "getById", null);
__decorate([
    common_1.Post('insert'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [memoriaram_1.MemoriaRam]),
    __metadata("design:returntype", Promise)
], MemoriaRamController.prototype, "insert", null);
__decorate([
    common_1.Put('delete/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MemoriaRamController.prototype, "delete", null);
__decorate([
    common_1.Put('update'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [memoriaram_1.MemoriaRam]),
    __metadata("design:returntype", Promise)
], MemoriaRamController.prototype, "update", null);
MemoriaRamController = __decorate([
    common_1.Controller('memoria-ram'),
    __metadata("design:paramtypes", [memoria_ram_provider_1.MemoriaRamProvider,
        memoria_ram_service_1.MemoriaRamService])
], MemoriaRamController);
exports.MemoriaRamController = MemoriaRamController;
//# sourceMappingURL=memoria-ram.controller.js.map