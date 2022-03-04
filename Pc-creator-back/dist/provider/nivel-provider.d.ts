import { Nivel } from 'src/model/nivel';
import { DataBase } from './database';
export declare class NivelProvider {
    private dataBase;
    constructor(dataBase: DataBase);
    getAll(): Promise<Nivel[]>;
    getById(id: number): Promise<Nivel | null>;
    insert(nivel: Nivel): Promise<void>;
    update(nivel: Nivel): Promise<void>;
    delete(nivel: Nivel): Promise<void>;
}
