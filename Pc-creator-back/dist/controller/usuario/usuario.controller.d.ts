import { Login } from 'src/model/login';
import { Resposta } from 'src/model/resposta';
import { Usuario } from 'src/model/usuario';
import { UsuarioProvider } from 'src/provider/usuario-provider';
import { UsuarioService } from 'src/services/usuario/usuario.service';
export declare class UsuarioController {
    private usuarioProvider;
    private usuarioServices;
    constructor(usuarioProvider: UsuarioProvider, usuarioServices: UsuarioService);
    getById(idParam: string): Promise<Resposta>;
    validarLogin(login: Login): Promise<Resposta>;
    insert(usuario: Usuario): Promise<Resposta>;
}
