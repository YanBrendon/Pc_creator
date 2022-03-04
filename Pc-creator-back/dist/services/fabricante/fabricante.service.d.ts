import { Fabricante } from 'src/model/fabricante';
import { FabricanteProvider } from 'src/provider/fabricante-provider';
export declare class FabricanteService {
    private fabricanteProvider;
    constructor(fabricanteProvider: FabricanteProvider);
    save(fabricante: Fabricante): Promise<Fabricante>;
    delete(fabricante: Fabricante): Promise<void>;
}
