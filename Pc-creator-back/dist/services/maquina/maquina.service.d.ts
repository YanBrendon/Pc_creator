import { Maquina } from 'src/model/maquina';
import { MaquinaProvider } from 'src/provider/maquina-provider';
export declare class MaquinaService {
    private maquinaProvider;
    constructor(maquinaProvider: MaquinaProvider);
    save(maquina: Maquina): Promise<Maquina>;
    delete(maquina: Maquina): Promise<void>;
}
