import { Usuario } from 'src/model/usuario';
import { UsuarioProvider } from 'src/provider/usuario-provider';
import { Login } from 'src/model/login';
export declare class UsuarioService {
    private usuarioProvider;
    constructor(usuarioProvider: UsuarioProvider);
    save(usuario: Usuario): Promise<Usuario>;
    validarLogin(login: Login): Promise<Usuario>;
}
