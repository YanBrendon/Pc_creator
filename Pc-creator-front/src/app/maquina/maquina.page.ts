import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Maquina } from '../models/maquina';


@Component({
  selector: 'app-maquina',
  templateUrl: './maquina.page.html',
  styleUrls: ['./maquina.page.scss'],
})
export class MaquinaPage implements OnInit {
  maquina: Maquina
  stars:string[] = []

  constructor(
    private navParam: NavParams
  ) {


  }
  ngOnInit() {
    let lista = this.navParam.get('maquina_lista')
    this.maquina = lista
    this.numberStars()
  }

  
  numberStars() {

    let tmp = this.maquina.nivelMaquina
    for (let index = 0; index < 5; index++, tmp--) {
      if (tmp >= 1) {
        this.stars.push("star")
      } else if (tmp > 0 && tmp < 1) {
        this.stars.push("star-half")
      } else this.stars.push("star-outline")
    }
  }

}
