import { Injectable } from '@nestjs/common';
import { Armazenamento } from 'src/model/armazenamento';
import { ArmazenamentoProvider } from 'src/provider/armazenamento-provider';

@Injectable()
export class ArmazenamentoService {
    constructor(
        private armazenamentoProvider:ArmazenamentoProvider

    ){}
    async save(armazenamento:Armazenamento):Promise<Armazenamento>
    {
        
        if(armazenamento.id == 0)
        {
            await this.armazenamentoProvider.insert(armazenamento)
        }
        else
        {
            await this.armazenamentoProvider.update(armazenamento)
        }

        return armazenamento
    }

    async delete(armazenamento:Armazenamento):Promise<void>
    {
        await this.armazenamentoProvider.delete(armazenamento)
    }
}
