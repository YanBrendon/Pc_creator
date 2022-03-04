import { Maquina } from 'src/model/maquina';
import { ArmazenamentoProvider } from './armazenamento-provider';
import { DataBase } from './database';
import { MemoriaRamProvider } from './memoria-ram-provider';
import { PlacaMaeProvider } from './placa-mae-provider';
import { ProcessadorProvider } from './processador-provider';
export declare class MaquinaProvider {
    private dataBase;
    private processadorProvider;
    private placaMaeProvider;
    private memoriaRamProvider;
    private armazenamentoProvider;
    constructor(dataBase: DataBase, processadorProvider: ProcessadorProvider, placaMaeProvider: PlacaMaeProvider, memoriaRamProvider: MemoriaRamProvider, armazenamentoProvider: ArmazenamentoProvider);
    getAll(): Promise<Maquina[]>;
    getById(id: number): Promise<Maquina | null>;
    getAllMaquinas(id: number): Promise<Maquina[] | null>;
    insert(maquina: Maquina): Promise<void>;
    update(maquina: Maquina): Promise<void>;
    delete(maquina: Maquina): Promise<void>;
}
