"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const processador_controller_1 = require("./controller/processador/processador.controller");
const processador_provider_1 = require("./provider/processador-provider");
const database_1 = require("./provider/database");
const processador_service_1 = require("./services/processador/processador.service");
const armazenamento_service_1 = require("./services/armazenamento/armazenamento.service");
const memoria_ram_service_1 = require("./services/memoria-ram/memoria-ram.service");
const placa_mae_service_1 = require("./services/placa-mae/placa-mae.service");
const maquina_service_1 = require("./services/maquina/maquina.service");
const armazenamento_provider_1 = require("./provider/armazenamento-provider");
const maquina_provider_1 = require("./provider/maquina-provider");
const placa_mae_provider_1 = require("./provider/placa-mae-provider");
const armazenamento_controller_1 = require("./controller/armazenamento/armazenamento.controller");
const maquina_controller_1 = require("./controller/maquina/maquina.controller");
const memoria_ram_controller_1 = require("./controller/memoria-ran/memoria-ram.controller");
const placa_mae_controller_1 = require("./controller/placa-mae/placa-mae.controller");
const fabricante_controller_1 = require("./controller/fabricante/fabricante.controller");
const fabricante_service_1 = require("./services/fabricante/fabricante.service");
const fabricante_provider_1 = require("./provider/fabricante-provider");
const nivel_provider_1 = require("./provider/nivel-provider");
const memoria_ram_provider_1 = require("./provider/memoria-ram-provider");
const usuario_provider_1 = require("./provider/usuario-provider");
const usuario_service_1 = require("./services/usuario/usuario.service");
const usuario_controller_1 = require("./controller/usuario/usuario.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [processador_controller_1.ProcessadorController, armazenamento_controller_1.ArmazenamentoController, maquina_controller_1.MaquinaController, memoria_ram_controller_1.MemoriaRamController, placa_mae_controller_1.PlacaMaeController, fabricante_controller_1.FabricanteController, usuario_controller_1.UsuarioController],
        providers: [database_1.DataBase, processador_service_1.ProcessadorService, processador_provider_1.ProcessadorProvider, armazenamento_service_1.ArmazenamentoService, memoria_ram_service_1.MemoriaRamService, placa_mae_service_1.PlacaMaeService, maquina_service_1.MaquinaService, armazenamento_provider_1.ArmazenamentoProvider, maquina_provider_1.MaquinaProvider, memoria_ram_provider_1.MemoriaRamProvider, placa_mae_provider_1.PlacaMaeProvider, fabricante_service_1.FabricanteService, fabricante_provider_1.FabricanteProvider, nivel_provider_1.NivelProvider, usuario_service_1.UsuarioService, usuario_provider_1.UsuarioProvider],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map