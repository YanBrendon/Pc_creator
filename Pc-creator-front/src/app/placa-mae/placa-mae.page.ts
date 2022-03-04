import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, PopoverController } from '@ionic/angular';
import { PlacaMaeService } from '../api/placa-mae.service';
import { PlacaMae } from '../models/placa-mae';
import { ViewPlacaMaePage } from '../view-placa-mae/view-placa-mae.page';

@Component({
  selector: 'app-placa-mae',
  templateUrl: './placa-mae.page.html',
  styleUrls: ['./placa-mae.page.scss'],
})
export class PlacaMaePage implements OnInit {
  public static callBack: (placaMae: PlacaMae) => void


  id: number = 0
  placaMaes: PlacaMae[] = []
  placasFiltro:PlacaMae[] = []
  constructor(
    private actvateRouter: ActivatedRoute,
    private placaMaeServices: PlacaMaeService,
    private popoverController: PopoverController,
    private navController: NavController

  ) { }

  async ngOnInit() {

    let idParam: string = this.actvateRouter.snapshot.paramMap.get('id')
    this.id = parseInt(idParam)

    const resposta = await this.placaMaeServices.getAll()
    this.placaMaes = resposta.data
    this.placasFiltro = this.placaMaes

  }

  async presentPopover(id: number) {
    const ret = await this.placaMaeServices.getById(id)

    const popover = await this.popoverController.create({
      component: ViewPlacaMaePage,
      componentProps: {
        placaMae_lista: ret.data
      },
    });
    return await popover.present();
  }


  selecionar(placaMae: PlacaMae) {

    this.navController.navigateBack(`montagem/${this.id}`)
    PlacaMaePage.callBack(placaMae)
  }

  buscar(event) {
    const query = event.target.value;
    console.log(query)
    if (query && query.trim() != '') {
      this.placasFiltro = this.placaMaes.filter((item)=>{
        return (item.modelo.toLowerCase().indexOf(query.toLowerCase())>-1)
      })
    }else{
      this.placasFiltro = this.placaMaes
    }
  }



}
