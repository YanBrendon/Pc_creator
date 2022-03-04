import { Processador } from 'src/model/processador';
import { ProcessadorProvider } from 'src/provider/processador-provider';
export declare class ProcessadorService {
    private processadorProvider;
    constructor(processadorProvider: ProcessadorProvider);
    save(processador: Processador): Promise<Processador>;
    delete(processador: Processador): Promise<void>;
}
