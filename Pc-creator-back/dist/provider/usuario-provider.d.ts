import { Usuario } from 'src/model/usuario';
import { DataBase } from './database';
export declare class UsuarioProvider {
    private dataBase;
    constructor(dataBase: DataBase);
    getById(id: number): Promise<Usuario | null>;
    getBynome(nome: string): Promise<Usuario | null>;
    insert(usuario: Usuario): Promise<void>;
    getByEmail(email: string): Promise<Usuario | null>;
    update(usuario: Usuario): Promise<void>;
    delete(usuario: Usuario): Promise<void>;
}
