import { Processador } from 'src/model/processador';
import { Resposta } from 'src/model/resposta';
import { ProcessadorProvider } from 'src/provider/processador-provider';
import { ProcessadorService } from 'src/services/processador/processador.service';
export declare class ProcessadorController {
    private processadorProvider;
    private processadorServices;
    constructor(processadorProvider: ProcessadorProvider, processadorServices: ProcessadorService);
    getAll(): Promise<Resposta>;
    getById(idParam: string): Promise<Resposta>;
    insert(processador: Processador): Promise<Resposta>;
    delete(idParam: string): Promise<Resposta>;
    update(processador: Processador): Promise<Resposta>;
}
