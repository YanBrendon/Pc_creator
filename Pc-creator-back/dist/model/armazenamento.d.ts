import { Fabricante } from "./fabricante";
import { Nivel } from "./nivel";
export declare class Armazenamento {
    id: number;
    modelo: string;
    capacidade: string;
    valorestimado: number;
    fabricanteId: Fabricante;
    nivelId: Nivel;
    descricao: string;
}
