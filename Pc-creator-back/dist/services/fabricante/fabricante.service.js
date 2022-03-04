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
exports.FabricanteService = void 0;
const common_1 = require("@nestjs/common");
const fabricante_1 = require("../../model/fabricante");
const fabricante_provider_1 = require("../../provider/fabricante-provider");
let FabricanteService = class FabricanteService {
    constructor(fabricanteProvider) {
        this.fabricanteProvider = fabricanteProvider;
    }
    async save(fabricante) {
        if (fabricante.id == 0) {
            await this.fabricanteProvider.insert(fabricante);
        }
        else {
            await this.fabricanteProvider.update(fabricante);
        }
        return fabricante;
    }
    async delete(fabricante) {
        await this.fabricanteProvider.delete(fabricante);
    }
};
FabricanteService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [fabricante_provider_1.FabricanteProvider])
], FabricanteService);
exports.FabricanteService = FabricanteService;
//# sourceMappingURL=fabricante.service.js.map