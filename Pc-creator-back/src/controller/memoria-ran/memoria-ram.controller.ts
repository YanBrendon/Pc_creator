import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { MemoriaRam } from 'src/model/memoriaram';
import { Resposta } from 'src/model/resposta';
import { MemoriaRamProvider } from 'src/provider/memoria-ram-provider';
import {  MemoriaRamService } from 'src/services/memoria-ram/memoria-ram.service';

@Controller('memoria-ram')
export class MemoriaRamController {
    constructor(
        private memoriaRamProvider: MemoriaRamProvider,
        private memoriaRamService: MemoriaRamService
    ) { }

    @Get('getall')
    async getAll(): Promise<Resposta> {
        try {
            const memoriasRam = await this.memoriaRamProvider.getAll()

            return {
                success: true,
                data: memoriasRam,
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
            const memoriasRam = await this.memoriaRamProvider.getById(id)

            return {
                success: true,
                data: memoriasRam,
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
    async insert(@Body() memoriaRam: MemoriaRam): Promise<Resposta> {
        
        try {
            memoriaRam.id = 0
            const memoriasRam = await this.memoriaRamService.save(memoriaRam)

            return {
                success: true,
                data: memoriasRam,
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

            const memoriasRamExistente = await this.memoriaRamProvider.getById(id)

            if (memoriasRamExistente == null)
                throw new Error(`Memoria Ran com id ${id} não encontrado`);

            await this.memoriaRamProvider.delete(memoriasRamExistente)

            return {
                data: memoriasRamExistente,
                message: 'Memoria Ran deletado com sucesso',
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
    async update(@Body() memoriaRam: MemoriaRam): Promise<Resposta> {
        try {
            const memoriasRamExistente = await this.memoriaRamProvider.getById(memoriaRam.id)
            if (memoriasRamExistente == null)
                throw new Error(`Memoria Ran com id ${memoriaRam.id} não encontrado`);


            const memoriasRanSalvo = await this.memoriaRamService.save(memoriaRam)

            return {
                data: memoriasRanSalvo,
                message: 'Memoria Ran alterado com sucesso',
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
