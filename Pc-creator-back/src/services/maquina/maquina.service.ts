import { Injectable } from '@nestjs/common';
import { GlobalVariables } from 'src/GlobalVariabels';
import { Maquina } from 'src/model/maquina';
import { MaquinaProvider } from 'src/provider/maquina-provider';

@Injectable()
export class MaquinaService {

    constructor(
        private maquinaProvider: MaquinaProvider

    ) { }


    async save(maquina: Maquina): Promise<Maquina> {


        if (maquina.armazenamentoId == undefined || maquina.memoriaRamId == undefined || maquina.memoriaRamId == undefined || maquina.placaMaeId == undefined) {
            throw new Error("Complete todos o campos para o pc funcionar !!");

        } else {
            if (maquina.processadorId.soquete == maquina.placaMaeId.soquete) {

                if (maquina.id == 0) {
                    maquina.usuarioId = GlobalVariables.usuarioLogado.id
                    maquina.precoMaquina = maquina.armazenamentoId.valorestimado + maquina.memoriaRamId.valorestimado + maquina.placaMaeId.valorestimado + maquina.processadorId.valorestimado
                    maquina.nivelMaquina = (Number(maquina.armazenamentoId.nivelId) + Number(maquina.processadorId.nivelId) + Number(maquina.memoriaRamId.nivelId) + Number(maquina.placaMaeId.nivelId)) / 4

                    await this.maquinaProvider.insert(maquina)
                }
                else {
                    await this.maquinaProvider.update(maquina)
                }
            }
            else {
                throw new Error("Este processador nao serve para esta placa mae");

            }
            return maquina
        }
    }

    async delete(maquina: Maquina): Promise<void> {
        await this.maquinaProvider.delete(maquina)
    }
}
