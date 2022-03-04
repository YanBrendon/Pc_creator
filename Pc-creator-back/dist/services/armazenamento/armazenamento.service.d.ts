import { Armazenamento } from 'src/model/armazenamento';
import { ArmazenamentoProvider } from 'src/provider/armazenamento-provider';
export declare class ArmazenamentoService {
    private armazenamentoProvider;
    constructor(armazenamentoProvider: ArmazenamentoProvider);
    save(armazenamento: Armazenamento): Promise<Armazenamento>;
    delete(armazenamento: Armazenamento): Promise<void>;
}
