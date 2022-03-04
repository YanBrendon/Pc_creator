import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ProcessadorService } from '../api/processador.service';
import { Processador } from '../models/processador';

@Component({
  selector: 'app-view-processador',
  templateUrl: './view-processador.page.html',
  styleUrls: ['./view-processador.page.scss'],
})
export class ViewProcessadorPage implements OnInit {

  processadores: Processador
  stars: string[] = []
  constructor(
    private navParam: NavParams,
  ) {


  }
  ngOnInit() {
    let lista1 = this.navParam.get('processador_lista')
    this.processadores = lista1
    this.numberStars()
  }



  
  numberStars() {
    let tmp = this.processadores.nivelId.id
    for (let index = 0; index < 5; index++, tmp--) {
      if (tmp >= 1) { 
        this.stars.push("star")
      } else if (tmp > 0 && tmp < 1) {
        this.stars.push("star-half")
      } else this.stars.push("star-outline")
    }
  }
}
