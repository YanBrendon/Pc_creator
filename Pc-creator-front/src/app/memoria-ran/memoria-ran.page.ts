import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, PopoverController } from '@ionic/angular';
import { MemoriaRamService } from '../api/memoria-ram.service';
import { MemoriaRam } from '../models/memoria-ram';
import { ViewMemoriaRamPage } from '../view-memoria-ram/view-memoria-ram.page';

@Component({
  selector: 'app-memoria-ran',
  templateUrl: './memoria-ran.page.html',
  styleUrls: ['./memoria-ran.page.scss'],
})
export class MemoriaRanPage implements OnInit {
  public static callBack: (memoriaRam: MemoriaRam) => void
  id: number = 0
  memor: MemoriaRam[] = []
  memoriaFiltro: MemoriaRam[] = []
  constructor(
    private actvateRouter: ActivatedRoute,
    private memoriaRamServices: MemoriaRamService,
    private navController: NavController,
    private popoverController: PopoverController
  ) { }

  async ngOnInit() {

    let idParam: string = this.actvateRouter.snapshot.paramMap.get('id')
    this.id = parseInt(idParam)
    const resposta = await this.memoriaRamServices.getAll()

    this.memor = resposta.data
    this.memoriaFiltro = this.memor
  }


  buscar(event) {
    const query = event.target.value;
    console.log(query)
    if (query && query.trim() != '') {
      this.memoriaFiltro = this.memor.filter((item) => {
        return (item.modelo.toLowerCase().indexOf(query.toLowerCase()) > -1)
      })
    } else {
      this.memoriaFiltro = this.memor
    }
  }



  async presentPopover(id: number) {
    const ret = await this.memoriaRamServices.getById(id)

    const popover = await this.popoverController.create({
      component: ViewMemoriaRamPage,
      componentProps: {
        memoriaRam_lista: ret.data
      },
    });
    return await popover.present();
  }



  selecionar(memoriaRam: MemoriaRam) {

    this.navController.navigateBack(`montagem/${this.id}`)
    MemoriaRanPage.callBack(memoriaRam)
  }

}
