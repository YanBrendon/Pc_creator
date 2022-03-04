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
exports.ProcessadorService = void 0;
const common_1 = require("@nestjs/common");
const processador_1 = require("../../model/processador");
const processador_provider_1 = require("../../provider/processador-provider");
let ProcessadorService = class ProcessadorService {
    constructor(processadorProvider) {
        this.processadorProvider = processadorProvider;
    }
    async save(processador) {
        if (processador.id == 0) {
            await this.processadorProvider.insert(processador);
        }
        else {
            await this.processadorProvider.update(processador);
        }
        return processador;
    }
    async delete(processador) {
        await this.processadorProvider.delete(processador);
    }
};
ProcessadorService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [processador_provider_1.ProcessadorProvider])
], ProcessadorService);
exports.ProcessadorService = ProcessadorService;
//# sourceMappingURL=processador.service.js.map