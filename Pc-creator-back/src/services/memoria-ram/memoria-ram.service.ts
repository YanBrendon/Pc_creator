import { Injectable } from '@nestjs/common';
import { MemoriaRam } from 'src/model/memoriaram';
import { MemoriaRamProvider } from 'src/provider/memoria-ram-provider';

@Injectable()
export class MemoriaRamService {

    constructor(
        private memoriaRamProvider:MemoriaRamProvider

    ){}
    async save(memoriaRam:MemoriaRam):Promise<MemoriaRam>
    {
        
        if(memoriaRam.id == 0)
        {
            await this.memoriaRamProvider.insert(memoriaRam)
        }
        else
        {
            await this.memoriaRamProvider.update(memoriaRam)
        }

        return memoriaRam
    }

    async delete(memoriaRam:MemoriaRam):Promise<void>
    {
        await this.memoriaRamProvider.delete(memoriaRam)
    }
}
