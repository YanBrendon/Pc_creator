import { Fabricante } from "./fabricante";
import { Nivel } from "./nivel";
export declare class MemoriaRam {
    id: number;
    modelo: string;
    formato: string;
    capacidade: string;
    fabricanteId: Fabricante;
    nivelId: Nivel;
    valorestimado: number;
    descricao: string;
}
