import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Processador } from 'src/model/processador';
import { Resposta } from 'src/model/resposta';
import { ProcessadorProvider } from 'src/provider/processador-provider';
import { ProcessadorService } from 'src/services/processador/processador.service';

@Controller('processador')
export class ProcessadorController {
    constructor(
        private processadorProvider: ProcessadorProvider,
        private processadorServices: ProcessadorService
    ) { }

    @Get('getall')
    async getAll(): Promise<Resposta> {
        try {
            const processadores = await this.processadorProvider.getAll()

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
    @Get('getbyid/:id')
    async getById(@Param('id') idParam: string): Promise<Resposta> {
        const id = parseInt(idParam)
        try {
            const processadores = await this.processadorProvider.getById(id)

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
    @Post('insert')
    async insert(@Body() processador: Processador): Promise<Resposta> {
        
        try {
            processador.id = 0
            const processadores = await this.processadorServices.save(processador)

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
    @Put('delete/:id')
    async delete(@Param('id') idParam: string): Promise<Resposta> {
        const id = parseInt(idParam)

        try {

            const processadorExiste = await this.processadorProvider.getById(id)

            if (processadorExiste == null)
                throw new Error(`Processador com id ${id} não encontrado`);

            await this.processadorProvider.delete(processadorExiste)

            return {
                data: processadorExiste,
                message: 'Processador deletado com sucesso',
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
    async update(@Body() processador: Processador): Promise<Resposta> {
        try {
            const processadorExiste = await this.processadorProvider.getById(processador.id)
            if (processadorExiste == null)
                throw new Error(`Processador com id ${processador.id} não encontrado`);


            const processadorSalvo = await this.processadorServices.save(processador)

            return {
                data: processadorSalvo,
                message: 'Processador alterado com sucesso',
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
