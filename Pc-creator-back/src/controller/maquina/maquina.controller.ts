import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { GlobalVariables } from 'src/GlobalVariabels';
import { Maquina } from 'src/model/maquina';
import { Resposta } from 'src/model/resposta';
import { MaquinaProvider } from 'src/provider/maquina-provider';
import { MaquinaService } from 'src/services/maquina/maquina.service';

@Controller('maquina')
export class MaquinaController {
    constructor(
        private maquinaProvider: MaquinaProvider,
        private maquinaService: MaquinaService
    ) { }

    @Get('getall')
    async getAll(): Promise<Resposta> {
        try {
            const maquinas = await this.maquinaProvider.getAll()

            return {
                success: true,
                data: maquinas,
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
    @Get('getbyid/:id')
    async getById(@Param('id') idParam: string): Promise<Resposta> {
        const id = parseInt(idParam)
        try {
            const maquinas = await this.maquinaProvider.getById(id)

            return {
                success: true,
                data: maquinas,
                message: 'Maquina encontrada com sucesso!!!'
            }
        } catch (error) {
            return {
                success: false,
                data: null,
                message: error.message
            }
        }
    }

    @Get('getallmaquinas/:id')
    async getAllMaquinas(@Param('id') idParam: string): Promise<Resposta> {
        const id = parseInt(idParam)

        if (id == GlobalVariables.usuarioLogado.id) {
            try {
                const maquinas = await this.maquinaProvider.getAllMaquinas(GlobalVariables.usuarioLogado.id)

                return {
                    success: true,
                    data: maquinas,
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
    }

    @Post('insert')
    async insert(@Body() maquina: Maquina): Promise<Resposta> {
        try {
            maquina.id = 0
            const maquinas = await this.maquinaService.save(maquina)
            return {
                success: true,
                data: maquinas,
                message: 'Maquina criada com sucesso!!'
            }
        } catch (error) {
            return {
                success: false,
                data: null,
                message: error.message
            }
        }
    }

    @Put('delete/:id')
    async delete(@Param('id') idParam: string): Promise<Resposta> {
        const id = parseInt(idParam)

        try {

            const maquinaExistente = await this.maquinaProvider.getById(id)

            if (maquinaExistente == null)
                throw new Error(`maquina com id ${id} não encontrado`);

            await this.maquinaProvider.delete(maquinaExistente)

            return {
                data: maquinaExistente,
                message: 'Maquina deletado com sucesso',
                success: true
            }

        } catch (error) {
            return {
                data: null,
                message: error.message,
                success: false
            }
        }
    }
    @Put('update')
    async update(@Body() maquina: Maquina) : Promise<Resposta> {
        try {
            const maquinaExistente = await this.maquinaProvider.getById(maquina.id)
            if (maquinaExistente == null)
                throw new Error(`maquina com id ${maquina.id} não encontrado`);


            const maquinaSalvo = await this.maquinaService.save(maquina)

            return {
                data: maquinaSalvo,
                message: 'Maquina alterado com sucesso',
                success: true
            }

        } catch (error) {
            return {
                data: null,
                message: error.message,
                success: false
            }
        }

    }
}
