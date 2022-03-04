import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, PopoverController } from '@ionic/angular';
import { ProcessadorService } from '../api/processador.service';
import { GlobalVariables } from '../GlobalVariabels';
import { Processador } from '../models/processador';
import { ViewProcessadorPage } from '../view-processador/view-processador.page';


@Component({
  selector: 'app-processador',
  templateUrl: './processador.page.html',
  styleUrls: ['./processador.page.scss'],
})
export class ProcessadorPage implements OnInit {
  public static callBack: (processador: Processador) => void

  id: number = 0
  process: Processador[] = []
processFiltro:Processador[] = []
  constructor(
    private processadorServices: ProcessadorService,
    private popoverController: PopoverController,
    private navController: NavController,
    private actvateRouter: ActivatedRoute,

  ) {


  }

  async ngOnInit() {

    let idParam: string = this.actvateRouter.snapshot.paramMap.get('id')
    this.id = parseInt(idParam)

    const resposta = await this.processadorServices.getAll()
    this.process = resposta.data
    this.processFiltro = this.process


  }

  buscar(event) {
    const query = event.target.value;
    console.log(query)
    if (query && query.trim() != '') {
      this.processFiltro = this.process.filter((item)=>{
        return (item.modelo.toLowerCase().indexOf(query.toLowerCase())>-1)
      })
    }else{
      this.processFiltro = this.process
    }
  }

  async presentPopover(id: number) {

    const ret = await this.processadorServices.getById(id)
    const popover = await this.popoverController.create({
      component: ViewProcessadorPage,
      componentProps: {
        processador_lista: ret.data
      },
    });
    return await popover.present();
  }

  selecionar(processador: Processador) {
    this.navController.navigateBack(`montagem/${this.id}`)
    ProcessadorPage.callBack(processador)
  }

}