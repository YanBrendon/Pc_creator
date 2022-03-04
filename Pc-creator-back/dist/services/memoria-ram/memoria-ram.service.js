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
exports.MemoriaRamService = void 0;
const common_1 = require("@nestjs/common");
const memoriaram_1 = require("../../model/memoriaram");
const memoria_ram_provider_1 = require("../../provider/memoria-ram-provider");
let MemoriaRamService = class MemoriaRamService {
    constructor(memoriaRamProvider) {
        this.memoriaRamProvider = memoriaRamProvider;
    }
    async save(memoriaRam) {
        if (memoriaRam.id == 0) {
            await this.memoriaRamProvider.insert(memoriaRam);
        }
        else {
            await this.memoriaRamProvider.update(memoriaRam);
        }
        return memoriaRam;
    }
    async delete(memoriaRam) {
        await this.memoriaRamProvider.delete(memoriaRam);
    }
};
MemoriaRamService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [memoria_ram_provider_1.MemoriaRamProvider])
], MemoriaRamService);
exports.MemoriaRamService = MemoriaRamService;
//# sourceMappingURL=memoria-ram.service.js.map