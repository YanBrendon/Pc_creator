import { PlacaMae } from 'src/model/placamae';
import { DataBase } from './database';
import { FabricanteProvider } from './fabricante-provider';
import { NivelProvider } from './nivel-provider';
export declare class PlacaMaeProvider {
    private dataBase;
    private nivelProvider;
    private fabricanteProvider;
    constructor(dataBase: DataBase, nivelProvider: NivelProvider, fabricanteProvider: FabricanteProvider);
    getAll(): Promise<PlacaMae[]>;
    getById(id: number): Promise<PlacaMae | null>;
    insert(placaMae: PlacaMae): Promise<void>;
    update(placaMae: PlacaMae): Promise<void>;
    delete(placaMae: PlacaMae): Promise<void>;
}
