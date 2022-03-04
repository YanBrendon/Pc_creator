import { Fabricante } from 'src/model/fabricante';
import { Resposta } from 'src/model/resposta';
import { FabricanteProvider } from 'src/provider/fabricante-provider';
import { FabricanteService } from 'src/services/fabricante/fabricante.service';
export declare class FabricanteController {
    private fabricanteService;
    private fabricanteProvider;
    constructor(fabricanteService: FabricanteService, fabricanteProvider: FabricanteProvider);
    getall(): Promise<Resposta>;
    getById(idParam: string): Promise<Resposta>;
    insert(fabricante: Fabricante): Promise<Resposta>;
    update(fabricante: Fabricante): Promise<Resposta>;
    delete(idParam: string): Promise<Resposta>;
}
