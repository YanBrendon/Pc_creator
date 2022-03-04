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
exports.PlacaMaeController = void 0;
const common_1 = require("@nestjs/common");
const placamae_1 = require("../../model/placamae");
const resposta_1 = require("../../model/resposta");
const placa_mae_provider_1 = require("../../provider/placa-mae-provider");
const placa_mae_service_1 = require("../../services/placa-mae/placa-mae.service");
let PlacaMaeController = class PlacaMaeController {
    constructor(placaMaeProvider, placaMaeService) {
        this.placaMaeProvider = placaMaeProvider;
        this.placaMaeService = placaMaeService;
    }
    async getAll() {
        try {
            const placaMaes = await this.placaMaeProvider.getAll();
            return {
                success: true,
                data: placaMaes,
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
            const placaMaes = await this.placaMaeProvider.getById(id);
            return {
                success: true,
                data: placaMaes,
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
            const placaMaes = await this.placaMaeService.save(processador);
            return {
                success: true,
                data: placaMaes,
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
            const placaMaes = await this.placaMaeProvider.getById(id);
            if (placaMaes == null)
                throw new Error(`Placa Mae com id ${id} não encontrado`);
            await this.placaMaeProvider.delete(placaMaes);
            return {
                data: placaMaes,
                message: 'Placa Mae deletado com sucesso',
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
            const processadorExiste = await this.placaMaeProvider.getById(processador.id);
            if (processadorExiste == null)
                throw new Error(`Placa Mae com id ${processador.id} não encontrado`);
            const placaMaes = await this.placaMaeService.save(processador);
            return {
                data: placaMaes,
                message: 'Placa Mae alterado com sucesso',
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
], PlacaMaeController.prototype, "getAll", null);
__decorate([
    common_1.Get('getbyid/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PlacaMaeController.prototype, "getById", null);
__decorate([
    common_1.Post('insert'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [placamae_1.PlacaMae]),
    __metadata("design:returntype", Promise)
], PlacaMaeController.prototype, "insert", null);
__decorate([
    common_1.Put('delete/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PlacaMaeController.prototype, "delete", null);
__decorate([
    common_1.Put('update'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [placamae_1.PlacaMae]),
    __metadata("design:returntype", Promise)
], PlacaMaeController.prototype, "update", null);
PlacaMaeController = __decorate([
    common_1.Controller('placa-mae'),
    __metadata("design:paramtypes", [placa_mae_provider_1.PlacaMaeProvider,
        placa_mae_service_1.PlacaMaeService])
], PlacaMaeController);
exports.PlacaMaeController = PlacaMaeController;
//# sourceMappingURL=placa-mae.controller.js.map