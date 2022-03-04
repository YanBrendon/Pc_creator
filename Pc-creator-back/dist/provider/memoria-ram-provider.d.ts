import { MemoriaRam } from 'src/model/memoriaram';
import { DataBase } from './database';
import { FabricanteProvider } from './fabricante-provider';
import { NivelProvider } from './nivel-provider';
export declare class MemoriaRamProvider {
    private dataBase;
    private nivelProvider;
    private fabricanteProvider;
    constructor(dataBase: DataBase, nivelProvider: NivelProvider, fabricanteProvider: FabricanteProvider);
    getAll(): Promise<MemoriaRam[]>;
    getById(id: number): Promise<MemoriaRam | null>;
    insert(memoriaran: MemoriaRam): Promise<void>;
    update(memoriaran: MemoriaRam): Promise<void>;
    delete(memoriaran: MemoriaRam): Promise<void>;
}
