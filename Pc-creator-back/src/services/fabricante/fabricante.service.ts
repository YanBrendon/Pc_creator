import { Injectable } from '@nestjs/common';
import { Fabricante } from 'src/model/fabricante';
import { FabricanteProvider } from 'src/provider/fabricante-provider';

@Injectable()
export class FabricanteService {
    constructor(
        private fabricanteProvider:FabricanteProvider

    ){}
    async save(fabricante:Fabricante):Promise<Fabricante>
    {
        
        if(fabricante.id == 0)
        {
            await this.fabricanteProvider.insert(fabricante)
        }
        else
        {
            await this.fabricanteProvider.update(fabricante)
        }

        return fabricante
    }

    async delete(fabricante:Fabricante):Promise<void>
    {
        await this.fabricanteProvider.delete(fabricante)
    }
}
