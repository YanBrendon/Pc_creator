import { Component } from '@angular/core';
import { LoadingController, MenuController, NavController, PopoverController } from '@ionic/angular';
import { MaquinaService } from '../api/maquina.service';
import { GlobalVariables } from '../GlobalVariabels';
import { MaquinaPage } from '../maquina/maquina.page';
import { Maquina } from '../models/maquina';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  maquinas: Maquina[] = []

  constructor(
    private menuController: MenuController,
    private maquinaServices: MaquinaService,
    private popoverController: PopoverController,
    private navController: NavController,
  ) { }



  async ngOnInit() {

    const obs = await this.maquinaServices.getAllMaquinas(GlobalVariables.usuarioLogado.id)
    this.maquinas = obs.data
  }

  ionViewDidEnter() {
    this.maquinaServices.getAllMaquinas(GlobalVariables.usuarioLogado.id)
      .then(resposta => this.maquinas = resposta.data)
  }

  doRefresh(event) {
    setTimeout(async () => {
      const obs = await this.maquinaServices.getAllMaquinas(GlobalVariables.usuarioLogado.id)
      this.maquinas = obs.data
      event.target.complete();
    }, 1000);
  }

  async openMenu() {
    await this.menuController.open()
  }

  async editar(maquina: Maquina) {

    await this.navController.navigateForward(`montagem/${maquina.id}`)
  }

  async delete(id: number) {
    let resposta = await this.maquinaServices.delete(id)

    if (resposta.success)
      this.ionViewDidEnter()
  }
  
  async presentPopover(id: number) {
    const ret = await this.maquinaServices.getById(id)
    const popover = await this.popoverController.create({
      component: MaquinaPage,
      componentProps: {
        maquina_lista: ret.data
      },
    });
    return await popover.present();
  }

}

