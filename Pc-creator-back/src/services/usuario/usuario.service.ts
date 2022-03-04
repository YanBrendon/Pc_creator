import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/model/usuario';
import { UsuarioProvider } from 'src/provider/usuario-provider';
import { Md5 } from "md5-typescript";
import { Login } from 'src/model/login';
import { GlobalVariables } from 'src/GlobalVariabels';


@Injectable()
export class UsuarioService {

    constructor(private usuarioProvider: UsuarioProvider) {

    }

    async save(usuario: Usuario): Promise<Usuario> {


        if (usuario.id == 0) {
            usuario.email = usuario.email.trim()
            usuario.senha = Md5.init(usuario.senha)
            let emailRetorno = this.usuarioProvider.getByEmail(usuario.email)
            
        }
        else {
            //await this.usuarioProvider.update(usuario)
        }

        return usuario
    }

    async validarLogin(login: Login): Promise<Usuario> {



        login.email = login.email.trim()
        login.senha = Md5.init(login.senha)

        const usuario = await this.usuarioProvider.getByEmail(login.email)
        if (usuario != null && usuario.senha == login.senha) {
            GlobalVariables.usuarioLogado = usuario
            return usuario
        }
        else
            throw new Error("Usuário e/ou senha incorretos")
    }
}
