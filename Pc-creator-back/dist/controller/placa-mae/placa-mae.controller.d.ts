import { PlacaMae } from 'src/model/placamae';
import { Resposta } from 'src/model/resposta';
import { PlacaMaeProvider } from 'src/provider/placa-mae-provider';
import { PlacaMaeService } from 'src/services/placa-mae/placa-mae.service';
export declare class PlacaMaeController {
    private placaMaeProvider;
    private placaMaeService;
    constructor(placaMaeProvider: PlacaMaeProvider, placaMaeService: PlacaMaeService);
    getAll(): Promise<Resposta>;
    getById(idParam: string): Promise<Resposta>;
    insert(processador: PlacaMae): Promise<Resposta>;
    delete(idParam: string): Promise<Resposta>;
    update(processador: PlacaMae): Promise<Resposta>;
}
