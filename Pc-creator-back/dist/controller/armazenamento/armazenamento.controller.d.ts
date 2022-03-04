import { Armazenamento } from 'src/model/armazenamento';
import { Resposta } from 'src/model/resposta';
import { ArmazenamentoProvider } from 'src/provider/armazenamento-provider';
import { ArmazenamentoService } from 'src/services/armazenamento/armazenamento.service';
export declare class ArmazenamentoController {
    private armazenamentoProvider;
    private armazenamentoServices;
    constructor(armazenamentoProvider: ArmazenamentoProvider, armazenamentoServices: ArmazenamentoService);
    getAll(): Promise<Resposta>;
    getById(idParam: string): Promise<Resposta>;
    insert(armazenamentos: Armazenamento): Promise<Resposta>;
    delete(idParam: string): Promise<Resposta>;
    update(armazenamento: Armazenamento): Promise<Resposta>;
}
