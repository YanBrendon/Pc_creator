import { Fabricante } from './fabricante'
import { Nivel } from './nivel'

export class MemoriaRam {
    id: number = 0
    modelo: string = ""
    formato: string = ""
    capacidade: string = ""
    valorestimado:number = 0
    fabricanteId:Fabricante
    nivelId:Nivel
    descricao:string = ""

}