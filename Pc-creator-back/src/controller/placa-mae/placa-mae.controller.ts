import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PlacaMae } from 'src/model/placamae';
import { Resposta } from 'src/model/resposta';
import { PlacaMaeProvider } from 'src/provider/placa-mae-provider';
import { PlacaMaeService } from 'src/services/placa-mae/placa-mae.service';

@Controller('placa-mae')
export class PlacaMaeController {
    constructor(
        private placaMaeProvider: PlacaMaeProvider,
        private placaMaeService: PlacaMaeService
    ) { }

    @Get('getall')
    async getAll(): Promise<Resposta> {
        try {
            const placaMaes = await this.placaMaeProvider.getAll()

            return {
                success: true,
                data: placaMaes,
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
            const placaMaes = await this.placaMaeProvider.getById(id)

            return {
                success: true,
                data: placaMaes,
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
    async insert(@Body() processador: PlacaMae): Promise<Resposta> {

        try {
            processador.id = 0
            const placaMaes = await this.placaMaeService.save(processador)

            return {
                success: true,
                data: placaMaes,
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

            const placaMaes = await this.placaMaeProvider.getById(id)

            if (placaMaes == null)
                throw new Error(`Placa Mae com id ${id} não encontrado`);

            await this.placaMaeProvider.delete(placaMaes)

            return {
                data: placaMaes,
                message: 'Placa Mae deletado com sucesso',
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
    async update(@Body() processador: PlacaMae): Promise<Resposta> {
        try {
            const processadorExiste = await this.placaMaeProvider.getById(processador.id)
            if (processadorExiste == null)
                throw new Error(`Placa Mae com id ${processador.id} não encontrado`);


            const placaMaes = await this.placaMaeService.save(processador)

            return {
                data: placaMaes,
                message: 'Placa Mae alterado com sucesso',
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
