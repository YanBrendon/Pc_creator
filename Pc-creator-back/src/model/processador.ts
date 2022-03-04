import { Fabricante } from "./fabricante"
import { Nivel } from "./nivel"

export class Processador {
    id: number = 0
    modelo: string = ""
    mcache: string = ""
    frequencia: string = ""
    soquete: string = ""
    arquitetura: string = ""
    nucleos: string = ""
    valorestimado:number = 0
    fabricanteId: Fabricante
    nivelId: Nivel
    descricao: string = ""
    
}