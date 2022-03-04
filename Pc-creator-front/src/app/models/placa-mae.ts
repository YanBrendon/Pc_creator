import { Fabricante } from './fabricante'
import { Nivel } from './nivel'

export class PlacaMae {

    id: number = 0
    modelo: string = ""
    chipset: string = ""
    soquete: string = ""
    valorestimado:number = 0
    fabricanteId:Fabricante
    nivelId:Nivel
    descricao:string = ""
}