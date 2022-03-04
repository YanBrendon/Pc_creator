import { Processador } from 'src/model/processador';
import { DataBase } from './database';
import { FabricanteProvider } from './fabricante-provider';
import { NivelProvider } from './nivel-provider';
export declare class ProcessadorProvider {
    private dataBase;
    private nivelProvider;
    private fabricanteProvider;
    constructor(dataBase: DataBase, nivelProvider: NivelProvider, fabricanteProvider: FabricanteProvider);
    getAll(): Promise<Processador[]>;
    getById(id: number): Promise<Processador | null>;
    insert(processador: Processador): Promise<void>;
    update(processador: Processador): Promise<void>;
    delete(processador: Processador): Promise<void>;
}
