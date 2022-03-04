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
exports.MaquinaController = void 0;
const common_1 = require("@nestjs/common");
const GlobalVariabels_1 = require("../../GlobalVariabels");
const maquina_1 = require("../../model/maquina");
const resposta_1 = require("../../model/resposta");
const maquina_provider_1 = require("../../provider/maquina-provider");
const maquina_service_1 = require("../../services/maquina/maquina.service");
let MaquinaController = class MaquinaController {
    constructor(maquinaProvider, maquinaService) {
        this.maquinaProvider = maquinaProvider;
        this.maquinaService = maquinaService;
    }
    async getAll() {
        try {
            const maquinas = await this.maquinaProvider.getAll();
            return {
                success: true,
                data: maquinas,
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
            const maquinas = await this.maquinaProvider.getById(id);
            return {
                success: true,
                data: maquinas,
                message: 'Maquina encontrada com sucesso!!!'
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
    async getAllMaquinas(idParam) {
        const id = parseInt(idParam);
        if (id == GlobalVariabels_1.GlobalVariables.usuarioLogado.id) {
            try {
                const maquinas = await this.maquinaProvider.getAllMaquinas(GlobalVariabels_1.GlobalVariables.usuarioLogado.id);
                return {
                    success: true,
                    data: maquinas,
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
    }
    async insert(maquina) {
        try {
            maquina.id = 0;
            const maquinas = await this.maquinaService.save(maquina);
            return {
                success: true,
                data: maquinas,
                message: 'Maquina criada com sucesso!!'
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
            const maquinaExistente = await this.maquinaProvider.getById(id);
            if (maquinaExistente == null)
                throw new Error(`maquina com id ${id} não encontrado`);
            await this.maquinaProvider.delete(maquinaExistente);
            return {
                data: maquinaExistente,
                message: 'Maquina deletado com sucesso',
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
    async update(maquina) {
        try {
            const maquinaExistente = await this.maquinaProvider.getById(maquina.id);
            if (maquinaExistente == null)
                throw new Error(`maquina com id ${maquina.id} não encontrado`);
            const maquinaSalvo = await this.maquinaService.save(maquina);
            return {
                data: maquinaSalvo,
                message: 'Maquina alterado com sucesso',
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
], MaquinaController.prototype, "getAll", null);
__decorate([
    common_1.Get('getbyid/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MaquinaController.prototype, "getById", null);
__decorate([
    common_1.Get('getallmaquinas/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MaquinaController.prototype, "getAllMaquinas", null);
__decorate([
    common_1.Post('insert'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [maquina_1.Maquina]),
    __metadata("design:returntype", Promise)
], MaquinaController.prototype, "insert", null);
__decorate([
    common_1.Put('delete/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MaquinaController.prototype, "delete", null);
__decorate([
    common_1.Put('update'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [maquina_1.Maquina]),
    __metadata("design:returntype", Promise)
], MaquinaController.prototype, "update", null);
MaquinaController = __decorate([
    common_1.Controller('maquina'),
    __metadata("design:paramtypes", [maquina_provider_1.MaquinaProvider,
        maquina_service_1.MaquinaService])
], MaquinaController);
exports.MaquinaController = MaquinaController;
//# sourceMappingURL=maquina.controller.js.map