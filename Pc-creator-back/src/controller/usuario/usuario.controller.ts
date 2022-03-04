import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Login } from 'src/model/login';
import { Resposta } from 'src/model/resposta';
import { Usuario } from 'src/model/usuario';
import { UsuarioProvider } from 'src/provider/usuario-provider';
import { UsuarioService } from 'src/services/usuario/usuario.service';

@Controller('usuario')
export class UsuarioController {
    constructor(
        private usuarioProvider: UsuarioProvider,
        private usuarioServices: UsuarioService
    ) { }

    @Get('getbyid/:id')
    async getById(@Param('id') idParam: string): Promise<Resposta> {
        const id = parseInt(idParam)
        try {
            const processadores = await this.usuarioProvider.getById(id)

            return {
                success: true,
                data: processadores,
                message: ''
            }
        } catch (error) {
            return {
                success: false,
                data: null,
                message: error.message
            }
        }
    } 
    
    @Post('validarlogin')
    async validarLogin(@Body() login:Login):Promise<Resposta>
    {

        try {

            const usuario = await this.usuarioServices.validarLogin(login)
            return {
                data:usuario,
                message:'Login efetuado com sucesso',
                success:true
            }

        } catch (error) {
            return {
                data:null,
                message:error.message,
                success:false
            }
        }
    }

    @Post('insert')
    async insert(@Body() usuario: Usuario): Promise<Resposta> {

        try {
            usuario.id = 0
            const usuarios = await this.usuarioServices.save(usuario)

            return {
                success: true,
                data: usuarios,
                message: 'Usuario criado com sucesso!'
            }
        } catch (error) {
            return {
                success: false,
                data: null,
                message: error.message
            }
        }
    }
   
}
