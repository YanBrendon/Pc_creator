import { Armazenamento } from "./armazenamento";
import { MemoriaRam } from "./memoriaram";
import { PlacaMae } from "./placamae";
import { Processador } from "./processador";
export declare class Maquina {
    id: number;
    placaMaeId: PlacaMae | null;
    memoriaRamId: MemoriaRam | null;
    processadorId: Processador | null;
    armazenamentoId: Armazenamento | null;
    usuarioId: number;
    descricao: string;
    nivelMaquina: number;
    precoMaquina: number;
}
