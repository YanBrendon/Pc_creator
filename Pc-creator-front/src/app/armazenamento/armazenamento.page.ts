import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, PopoverController } from '@ionic/angular';
import { ArmazenamentoService } from '../api/armazenamento.service';
import { Armazenamento } from '../models/armazenamentos';
import { ViewArmazenamentoPage } from '../view-armazenamento/view-armazenamento.page';

@Component({
  selector: 'app-armazenamento',
  templateUrl: './armazenamento.page.html',
  styleUrls: ['./armazenamento.page.scss'],
})
export class ArmazenamentoPage implements OnInit {

  public static callBack: (armazenamento: Armazenamento) => void
  id: number = 0
  armazenamentos: Armazenamento[] = []
  armazenamentoFiltro: Armazenamento[] = []
  constructor(
    private actvateRouter: ActivatedRoute,
    private armazenamentoServices: ArmazenamentoService,
    private navController: NavController,
    private popoverController: PopoverController
  ) { }

  async ngOnInit() {

    let idParam: string = this.actvateRouter.snapshot.paramMap.get('id')
    this.id = parseInt(idParam)
    const resposta = await this.armazenamentoServices.getAll()

    this.armazenamentos = resposta.data
    this.armazenamentoFiltro=this.armazenamentos
  }



  buscar(event) {
    const query = event.target.value;
    console.log(query)
    if (query && query.trim() != '') {
      this.armazenamentoFiltro = this.armazenamentos.filter((item)=>{
        return (item.modelo.toLowerCase().indexOf(query.toLowerCase())>-1)
      })
    }else{
      this.armazenamentoFiltro = this.armazenamentos
    }
  }

  async presentPopover(id: number) {
    const ret = await this.armazenamentoServices.getById(id)

    const popover = await this.popoverController.create({
      component: ViewArmazenamentoPage,
      componentProps: {
        armazenamento_lista: ret.data
      },
    });
    return await popover.present();
  }



  selecionar(armazenamento: Armazenamento) {
    ArmazenamentoPage.callBack(armazenamento)
    this.navController.navigateBack(`montagem/${this.id}`)

  }

}
