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
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const usuario_1 = require("../../model/usuario");
const usuario_provider_1 = require("../../provider/usuario-provider");
const md5_typescript_1 = require("md5-typescript");
const login_1 = require("../../model/login");
const GlobalVariabels_1 = require("../../GlobalVariabels");
let UsuarioService = class UsuarioService {
    constructor(usuarioProvider) {
        this.usuarioProvider = usuarioProvider;
    }
    async save(usuario) {
        if (usuario.id == 0) {
            usuario.email = usuario.email.trim();
            usuario.senha = md5_typescript_1.Md5.init(usuario.senha);
            let emailRetorno = this.usuarioProvider.getByEmail(usuario.email);
        }
        else {
        }
        return usuario;
    }
    async validarLogin(login) {
        login.email = login.email.trim();
        login.senha = md5_typescript_1.Md5.init(login.senha);
        const usuario = await this.usuarioProvider.getByEmail(login.email);
        if (usuario != null && usuario.senha == login.senha) {
            GlobalVariabels_1.GlobalVariables.usuarioLogado = usuario;
            return usuario;
        }
        else
            throw new Error("Usuário e/ou senha incorretos");
    }
};
UsuarioService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [usuario_provider_1.UsuarioProvider])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map