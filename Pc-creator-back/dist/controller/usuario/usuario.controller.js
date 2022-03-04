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
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const login_1 = require("../../model/login");
const resposta_1 = require("../../model/resposta");
const usuario_1 = require("../../model/usuario");
const usuario_provider_1 = require("../../provider/usuario-provider");
const usuario_service_1 = require("../../services/usuario/usuario.service");
let UsuarioController = class UsuarioController {
    constructor(usuarioProvider, usuarioServices) {
        this.usuarioProvider = usuarioProvider;
        this.usuarioServices = usuarioServices;
    }
    async getById(idParam) {
        const id = parseInt(idParam);
        try {
            const processadores = await this.usuarioProvider.getById(id);
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
    async validarLogin(login) {
        try {
            const usuario = await this.usuarioServices.validarLogin(login);
            return {
                data: usuario,
                message: 'Login efetuado com sucesso',
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
    async insert(usuario) {
        try {
            usuario.id = 0;
            const usuarios = await this.usuarioServices.save(usuario);
            return {
                success: true,
                data: usuarios,
                message: 'Usuario criado com sucesso!'
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
};
__decorate([
    common_1.Get('getbyid/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "getById", null);
__decorate([
    common_1.Post('validarlogin'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_1.Login]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "validarLogin", null);
__decorate([
    common_1.Post('insert'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_1.Usuario]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "insert", null);
UsuarioController = __decorate([
    common_1.Controller('usuario'),
    __metadata("design:paramtypes", [usuario_provider_1.UsuarioProvider,
        usuario_service_1.UsuarioService])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map