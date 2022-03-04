import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { MemoriaRam } from '../models/memoria-ram';

@Component({
  selector: 'app-view-memoria-ram',
  templateUrl: './view-memoria-ram.page.html',
  styleUrls: ['./view-memoria-ram.page.scss'],
})
export class ViewMemoriaRamPage implements OnInit {

  memoriaRam: MemoriaRam
  stars:string[] = []


  constructor(
    private navParam: NavParams
  ) {


  }
  ngOnInit() {
    let lista = this.navParam.get('memoriaRam_lista')
    this.memoriaRam = lista
    this.numberStars()
  }
  numberStars() {
    let tmp = this.memoriaRam.nivelId.id
    for (let index = 0; index < 5; index++, tmp--) {
      if (tmp >= 1) {
        this.stars.push("star")
      } else if (tmp > 0 && tmp < 1) {
        this.stars.push("star-half")
      } else this.stars.push("star-outline")
    }
  }
}
