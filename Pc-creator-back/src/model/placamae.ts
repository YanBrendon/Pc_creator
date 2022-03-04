import { Fabricante } from "./fabricante"
import { Nivel } from "./nivel"

export class PlacaMae {
    id: number = 0
    modelo: string = ""
    chipset: string = ""
    soquete: string = ""
    fabricanteId: Fabricante
    nivelId: Nivel
    valorestimado:number = 0
    descricao:string = ""
}