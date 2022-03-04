import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Armazenamento } from 'src/model/armazenamento';
import { Resposta } from 'src/model/resposta';
import { ArmazenamentoProvider } from 'src/provider/armazenamento-provider';
import { ArmazenamentoService } from 'src/services/armazenamento/armazenamento.service';

@Controller('armazenamento')
export class ArmazenamentoController {

    constructor(
        private armazenamentoProvider:ArmazenamentoProvider,
        private armazenamentoServices:ArmazenamentoService
    ) { }

    @Get('getall')
    async getAll(): Promise<Resposta> {
        console.log()

        try {
            const armazenamentos = await this.armazenamentoProvider.getAll()
            return {
                success: true,
                data: armazenamentos,
                message: 'Lista de Armazenamentos carregada com sucesso'
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
            const armazenamento = await this.armazenamentoProvider.getById(id)

            return {
                success: true,
                data: armazenamento,
                message: `Armazenamento ${id} carregado com sucesso`
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
    async insert(@Body() armazenamentos: Armazenamento): Promise<Resposta> {
        
        try {
            armazenamentos.id = 0
            const armazenamento = await this.armazenamentoServices.save(armazenamentos)

            return {
                success: true,
                data: armazenamento,
                message: `Armazenamento ${armazenamento.modelo} inserido com sucesso`
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

            const armazenamento = await this.armazenamentoProvider.getById(id)

            if (armazenamento == null)
                throw new Error(`Armazenamento com id ${id} não encontrado`);

            await this.armazenamentoProvider.delete(armazenamento)

            return {
                data: armazenamento,
                message: 'Armazenamento deletado com sucesso',
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
    async update(@Body() armazenamento: Armazenamento): Promise<Resposta> {
        try {
            const processadorExiste = await this.armazenamentoProvider.getById(armazenamento.id)
            if (processadorExiste == null)
                throw new Error(`armazenamento com id ${armazenamento.id} não encontrado`);


            const armazenamentoSalvo = await this.armazenamentoServices.save(armazenamento)

            return {
                data: armazenamentoSalvo,
                message: 'Armazenamento alterado com sucesso',
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
