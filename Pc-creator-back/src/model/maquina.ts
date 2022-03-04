import { Armazenamento } from "./armazenamento"
import { MemoriaRam } from "./memoriaram"
import { Nivel } from "./nivel"
import { PlacaMae } from "./placamae"
import { Processador } from "./processador"

export class Maquina {
    id: number = 0
    placaMaeId: PlacaMae | null
    memoriaRamId: MemoriaRam | null
    processadorId: Processador | null
    armazenamentoId: Armazenamento | null
    usuarioId: number = 0
    descricao: string = ""
    nivelMaquina: number = 0
    precoMaquina: number = 0

}