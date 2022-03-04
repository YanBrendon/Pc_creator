import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { exception } from 'console';
import { Fabricante } from 'src/model/fabricante';
import { Resposta } from 'src/model/resposta';
import { FabricanteProvider } from 'src/provider/fabricante-provider';
import { FabricanteService } from 'src/services/fabricante/fabricante.service';
import { runInThisContext } from 'vm';

@Controller('fabricante')
export class FabricanteController {


    constructor(
        private fabricanteService: FabricanteService,
        private fabricanteProvider: FabricanteProvider
    ) { }


    @Get('getall')
    async getall(): Promise<Resposta> {
        try {

            const fabricantes = await this.fabricanteProvider.getAll()
            return {
                success: true,
                data: fabricantes,
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

            const fabricante = await this.fabricanteProvider.getById(id)
            return {
                message: '',
                data: fabricante,
                success: true
            }
        } catch (error) {
            return {
                message: error.message,
                data: null,
                success: false
            }
        }
    }
    @Post('insert')
    async insert(@Body() fabricante: Fabricante): Promise<Resposta> {
        try {
            fabricante.id = 0
            const fabricanteExiste = await this.fabricanteService.save(fabricante)

            return {
                message: '',
                data: fabricanteExiste,
                success: true
            }
        } catch (error) {
            return {
                message: error.message,
                data: null,
                success: false
            }

        }
    }
    @Put('update')
    async update(@Body() fabricante: Fabricante): Promise<Resposta> {
        try {
            const fabricanteExiste = await this.fabricanteProvider.getById(fabricante.id)
            if (fabricanteExiste == null) {
                throw new Error(`${fabricante.id} nao encontrado`)
            }
            const fabricanteSalvo = await this.fabricanteService.save(fabricante)

            return {
                message: '',
                data: fabricanteSalvo,
                success: true
            }
        } catch (error) {
            return {
                message: error.message,
                data: null,
                success: false
            }

        }
    }
    @Put('delete/:id')
    async delete(@Param('id') idParam: string): Promise<Resposta> {
        const id = parseInt(idParam)
        try {
            const fabricanteExiste = await this.fabricanteProvider.getById(id)
            if (fabricanteExiste == null) {
                throw new Error(`${id} nao encontrado`)
            }
            await this.fabricanteService.delete(fabricanteExiste)
            return {
                message: `fabricante deletado com sucesso`,
                data: fabricanteExiste,
                success: true
            }
        } catch (error) {
            return {
                message: error.message,
                data: null,
                success: false
            }
        }
    }
}
