import { Fabricante } from "./fabricante"
import { Nivel } from "./nivel"

export class MemoriaRam {
    id: number = 0
    modelo: string = ""
    formato: string = ""
    capacidade: string = ""
    fabricanteId: Fabricante
    nivelId: Nivel
    valorestimado:number = 0
    descricao:string = ""
}