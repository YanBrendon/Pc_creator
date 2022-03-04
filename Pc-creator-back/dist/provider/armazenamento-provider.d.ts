import { Armazenamento } from 'src/model/armazenamento';
import { DataBase } from './database';
import { FabricanteProvider } from './fabricante-provider';
import { NivelProvider } from './nivel-provider';
export declare class ArmazenamentoProvider {
    private dataBase;
    private nivelProvider;
    private fabricanteProvider;
    constructor(dataBase: DataBase, nivelProvider: NivelProvider, fabricanteProvider: FabricanteProvider);
    getAll(): Promise<Armazenamento[]>;
    getById(id: number): Promise<Armazenamento | null>;
    insert(armazenamento: Armazenamento): Promise<void>;
    update(armazenamento: Armazenamento): Promise<void>;
    delete(armazenamento: Armazenamento): Promise<void>;
}
