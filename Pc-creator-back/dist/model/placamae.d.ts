import { Fabricante } from "./fabricante";
import { Nivel } from "./nivel";
export declare class PlacaMae {
    id: number;
    modelo: string;
    chipset: string;
    soquete: string;
    fabricanteId: Fabricante;
    nivelId: Nivel;
    valorestimado: number;
    descricao: string;
}
