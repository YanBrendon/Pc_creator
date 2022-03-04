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
exports.MaquinaService = void 0;
const common_1 = require("@nestjs/common");
const GlobalVariabels_1 = require("../../GlobalVariabels");
const maquina_1 = require("../../model/maquina");
const maquina_provider_1 = require("../../provider/maquina-provider");
let MaquinaService = class MaquinaService {
    constructor(maquinaProvider) {
        this.maquinaProvider = maquinaProvider;
    }
    async save(maquina) {
        if (maquina.armazenamentoId == undefined || maquina.memoriaRamId == undefined || maquina.memoriaRamId == undefined || maquina.placaMaeId == undefined) {
            throw new Error("Complete todos o campos para o pc funcionar !!");
        }
        else {
            if (maquina.processadorId.soquete == maquina.placaMaeId.soquete) {
                if (maquina.id == 0) {
                    maquina.usuarioId = GlobalVariabels_1.GlobalVariables.usuarioLogado.id;
                    maquina.precoMaquina = maquina.armazenamentoId.valorestimado + maquina.memoriaRamId.valorestimado + maquina.placaMaeId.valorestimado + maquina.processadorId.valorestimado;
                    maquina.nivelMaquina = (Number(maquina.armazenamentoId.nivelId) + Number(maquina.processadorId.nivelId) + Number(maquina.memoriaRamId.nivelId) + Number(maquina.placaMaeId.nivelId)) / 4;
                    await this.maquinaProvider.insert(maquina);
                }
                else {
                    await this.maquinaProvider.update(maquina);
                }
            }
            else {
                throw new Error("Este processador nao serve para esta placa mae");
            }
            return maquina;
        }
    }
    async delete(maquina) {
        await this.maquinaProvider.delete(maquina);
    }
};
MaquinaService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [maquina_provider_1.MaquinaProvider])
], MaquinaService);
exports.MaquinaService = MaquinaService;
//# sourceMappingURL=maquina.service.js.map