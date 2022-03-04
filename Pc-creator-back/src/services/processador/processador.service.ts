import { Injectable } from '@nestjs/common';
import { Processador } from 'src/model/processador';
import { ProcessadorProvider } from 'src/provider/processador-provider';

@Injectable()
export class ProcessadorService {

    constructor(
        private processadorProvider:ProcessadorProvider

    ){}
    async save(processador:Processador):Promise<Processador>
    {
        
        if(processador.id == 0)
        {
            await this.processadorProvider.insert(processador)
        }
        else
        {
            await this.processadorProvider.update(processador)
        }

        return processador
    }

    async delete(processador:Processador):Promise<void>
    {
        await this.processadorProvider.delete(processador)
    }

}
