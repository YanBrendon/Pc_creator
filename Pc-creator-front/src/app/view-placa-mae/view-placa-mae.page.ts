import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { PlacaMae } from '../models/placa-mae';

@Component({
  selector: 'app-view-placa-mae',
  templateUrl: './view-placa-mae.page.html',
  styleUrls: ['./view-placa-mae.page.scss'],
})
export class ViewPlacaMaePage implements OnInit {
  placaMae: PlacaMae
 stars:string[] = []

  constructor(
    private navParam: NavParams
  ) {


  }
  ngOnInit() {

    let lista4 = this.navParam.get('placaMae_lista')
    this.placaMae = lista4

    this.numberStars()
  }
  numberStars() {
    let tmp = this.placaMae.nivelId.id
    for (let index = 0; index < 5; index++, tmp--) {
      if (tmp >= 1) {
        this.stars.push("star")
      } else if (tmp > 0 && tmp < 1) {
        this.stars.push("star-half")
      } else this.stars.push("star-outline")
    }
  }
}
