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
exports.FabricanteController = void 0;
const common_1 = require("@nestjs/common");
const fabricante_1 = require("../../model/fabricante");
const resposta_1 = require("../../model/resposta");
const fabricante_provider_1 = require("../../provider/fabricante-provider");
const fabricante_service_1 = require("../../services/fabricante/fabricante.service");
let FabricanteController = class FabricanteController {
    constructor(fabricanteService, fabricanteProvider) {
        this.fabricanteService = fabricanteService;
        this.fabricanteProvider = fabricanteProvider;
    }
    async getall() {
        try {
            const fabricantes = await this.fabricanteProvider.getAll();
            return {
                success: true,
                data: fabricantes,
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
            const fabricante = await this.fabricanteProvider.getById(id);
            return {
                message: '',
                data: fabricante,
                success: true
            };
        }
        catch (error) {
            return {
                message: error.message,
                data: null,
                success: false
            };
        }
    }
    async insert(fabricante) {
        try {
            fabricante.id = 0;
            const fabricanteExiste = await this.fabricanteService.save(fabricante);
            return {
                message: '',
                data: fabricanteExiste,
                success: true
            };
        }
        catch (error) {
            return {
                message: error.message,
                data: null,
                success: false
            };
        }
    }
    async update(fabricante) {
        try {
            const fabricanteExiste = await this.fabricanteProvider.getById(fabricante.id);
            if (fabricanteExiste == null) {
                throw new Error(`${fabricante.id} nao encontrado`);
            }
            const fabricanteSalvo = await this.fabricanteService.save(fabricante);
            return {
                message: '',
                data: fabricanteSalvo,
                success: true
            };
        }
        catch (error) {
            return {
                message: error.message,
                data: null,
                success: false
            };
        }
    }
    async delete(idParam) {
        const id = parseInt(idParam);
        try {
            const fabricanteExiste = await this.fabricanteProvider.getById(id);
            if (fabricanteExiste == null) {
                throw new Error(`${id} nao encontrado`);
            }
            await this.fabricanteService.delete(fabricanteExiste);
            return {
                message: `fabricante deletado com sucesso`,
                data: fabricanteExiste,
                success: true
            };
        }
        catch (error) {
            return {
                message: error.message,
                data: null,
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
], FabricanteController.prototype, "getall", null);
__decorate([
    common_1.Get('getbyid/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FabricanteController.prototype, "getById", null);
__decorate([
    common_1.Post('insert'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fabricante_1.Fabricante]),
    __metadata("design:returntype", Promise)
], FabricanteController.prototype, "insert", null);
__decorate([
    common_1.Put('update'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fabricante_1.Fabricante]),
    __metadata("design:returntype", Promise)
], FabricanteController.prototype, "update", null);
__decorate([
    common_1.Put('delete/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FabricanteController.prototype, "delete", null);
FabricanteController = __decorate([
    common_1.Controller('fabricante'),
    __metadata("design:paramtypes", [fabricante_service_1.FabricanteService,
        fabricante_provider_1.FabricanteProvider])
], FabricanteController);
exports.FabricanteController = FabricanteController;
//# sourceMappingURL=fabricante.controller.js.map