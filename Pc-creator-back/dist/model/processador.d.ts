import { Fabricante } from "./fabricante";
import { Nivel } from "./nivel";
export declare class Processador {
    id: number;
    modelo: string;
    mcache: string;
    frequencia: string;
    soquete: string;
    arquitetura: string;
    nucleos: string;
    valorestimado: number;
    fabricanteId: Fabricante;
    nivelId: Nivel;
    descricao: string;
}
