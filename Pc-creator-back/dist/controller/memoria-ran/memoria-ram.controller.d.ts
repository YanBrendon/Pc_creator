import { MemoriaRam } from 'src/model/memoriaram';
import { Resposta } from 'src/model/resposta';
import { MemoriaRamProvider } from 'src/provider/memoria-ram-provider';
import { MemoriaRamService } from 'src/services/memoria-ram/memoria-ram.service';
export declare class MemoriaRamController {
    private memoriaRamProvider;
    private memoriaRamService;
    constructor(memoriaRamProvider: MemoriaRamProvider, memoriaRamService: MemoriaRamService);
    getAll(): Promise<Resposta>;
    getById(idParam: string): Promise<Resposta>;
    insert(memoriaRam: MemoriaRam): Promise<Resposta>;
    delete(idParam: string): Promise<Resposta>;
    update(memoriaRam: MemoriaRam): Promise<Resposta>;
}
