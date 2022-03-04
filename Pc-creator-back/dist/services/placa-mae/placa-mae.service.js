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
exports.PlacaMaeService = void 0;
const common_1 = require("@nestjs/common");
const placamae_1 = require("../../model/placamae");
const placa_mae_provider_1 = require("../../provider/placa-mae-provider");
let PlacaMaeService = class PlacaMaeService {
    constructor(placaMaeProvider) {
        this.placaMaeProvider = placaMaeProvider;
    }
    async save(placaMae) {
        if (placaMae.id == 0) {
            await this.placaMaeProvider.insert(placaMae);
        }
        else {
            await this.placaMaeProvider.update(placaMae);
        }
        return placaMae;
    }
    async delete(placaMae) {
        await this.placaMaeProvider.delete(placaMae);
    }
};
PlacaMaeService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [placa_mae_provider_1.PlacaMaeProvider])
], PlacaMaeService);
exports.PlacaMaeService = PlacaMaeService;
//# sourceMappingURL=placa-mae.service.js.map