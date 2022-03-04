import { MemoriaRam } from 'src/model/memoriaram';
import { MemoriaRamProvider } from 'src/provider/memoria-ram-provider';
export declare class MemoriaRamService {
    private memoriaRamProvider;
    constructor(memoriaRamProvider: MemoriaRamProvider);
    save(memoriaRam: MemoriaRam): Promise<MemoriaRam>;
    delete(memoriaRam: MemoriaRam): Promise<void>;
}
