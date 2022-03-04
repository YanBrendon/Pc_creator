import { Module } from '@nestjs/common';
import { ProcessadorController } from './controller/processador/processador.controller';
import { ProcessadorProvider } from './provider/processador-provider';
import { DataBase } from './provider/database';
import { ProcessadorService } from './services/processador/processador.service';
import { ArmazenamentoService } from './services/armazenamento/armazenamento.service';
import { MemoriaRamService } from './services/memoria-ram/memoria-ram.service';
import { PlacaMaeService } from './services/placa-mae/placa-mae.service';
import { MaquinaService } from './services/maquina/maquina.service';
import { ArmazenamentoProvider } from './provider/armazenamento-provider';
import { MaquinaProvider } from './provider/maquina-provider';
import { PlacaMaeProvider } from './provider/placa-mae-provider';
import { ArmazenamentoController } from './controller/armazenamento/armazenamento.controller';
import { MaquinaController } from './controller/maquina/maquina.controller';
import { MemoriaRamController } from './controller/memoria-ran/memoria-ram.controller';
import { PlacaMaeController } from './controller/placa-mae/placa-mae.controller';
import { FabricanteController } from './controller/fabricante/fabricante.controller';
import { FabricanteService } from './services/fabricante/fabricante.service';
import { FabricanteProvider } from './provider/fabricante-provider';
import { NivelProvider } from './provider/nivel-provider';
import { MemoriaRamProvider } from './provider/memoria-ram-provider';
import { UsuarioProvider } from './provider/usuario-provider';
import { UsuarioService } from './services/usuario/usuario.service';
import { UsuarioController } from './controller/usuario/usuario.controller';

@Module({
  imports: [],
  controllers: [ProcessadorController, ArmazenamentoController, MaquinaController, MemoriaRamController, PlacaMaeController, FabricanteController, UsuarioController],
  providers: [DataBase, ProcessadorService, ProcessadorProvider, ArmazenamentoService, MemoriaRamService, PlacaMaeService, MaquinaService, ArmazenamentoProvider, MaquinaProvider, MemoriaRamProvider, PlacaMaeProvider, FabricanteService, FabricanteProvider, NivelProvider, UsuarioService, UsuarioProvider],
})
export class AppModule { }
