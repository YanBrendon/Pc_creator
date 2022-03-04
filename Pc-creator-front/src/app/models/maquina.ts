import { Armazenamento } from './armazenamentos'
import { MemoriaRam } from './memoria-ram'
import { PlacaMae } from './placa-mae'
import { Processador } from './processador'

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

