import { Injectable } from '@nestjs/common';
import { PlacaMae } from 'src/model/placamae';
import { PlacaMaeProvider } from 'src/provider/placa-mae-provider';

@Injectable()
export class PlacaMaeService {

    constructor(
        private placaMaeProvider:PlacaMaeProvider

    ){}
    async save(placaMae:PlacaMae):Promise<PlacaMae>
    {
        
        if(placaMae.id == 0)
        {
            await this.placaMaeProvider.insert(placaMae)
        }
        else
        {
            await this.placaMaeProvider.update(placaMae)
        }

        return placaMae
    }

    async delete(placaMae:PlacaMae):Promise<void>
    {
        await this.placaMaeProvider.delete(placaMae)
    }
}
