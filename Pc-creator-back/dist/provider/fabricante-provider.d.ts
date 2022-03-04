import { Fabricante } from 'src/model/fabricante';
import { DataBase } from './database';
export declare class FabricanteProvider {
    private dataBase;
    constructor(dataBase: DataBase);
    getAll(): Promise<Fabricante[]>;
    getById(id: number): Promise<Fabricante | null>;
    insert(fabricante: Fabricante): Promise<void>;
    update(fabricante: Fabricante): Promise<void>;
    delete(fabricante: Fabricante): Promise<void>;
}
