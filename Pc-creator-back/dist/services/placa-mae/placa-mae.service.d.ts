import { PlacaMae } from 'src/model/placamae';
import { PlacaMaeProvider } from 'src/provider/placa-mae-provider';
export declare class PlacaMaeService {
    private placaMaeProvider;
    constructor(placaMaeProvider: PlacaMaeProvider);
    save(placaMae: PlacaMae): Promise<PlacaMae>;
    delete(placaMae: PlacaMae): Promise<void>;
}
