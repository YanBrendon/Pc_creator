import { Maquina } from 'src/model/maquina';
import { Resposta } from 'src/model/resposta';
import { MaquinaProvider } from 'src/provider/maquina-provider';
import { MaquinaService } from 'src/services/maquina/maquina.service';
export declare class MaquinaController {
    private maquinaProvider;
    private maquinaService;
    constructor(maquinaProvider: MaquinaProvider, maquinaService: MaquinaService);
    getAll(): Promise<Resposta>;
    getById(idParam: string): Promise<Resposta>;
    getAllMaquinas(idParam: string): Promise<Resposta>;
    insert(maquina: Maquina): Promise<Resposta>;
    delete(idParam: string): Promise<Resposta>;
    update(maquina: Maquina): Promise<Resposta>;
}
