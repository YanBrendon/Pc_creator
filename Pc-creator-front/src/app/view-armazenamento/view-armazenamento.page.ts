import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Armazenamento } from '../models/armazenamentos';

@Component({
  selector: 'app-view-armazenamento',
  templateUrl: './view-armazenamento.page.html',
  styleUrls: ['./view-armazenamento.page.scss'],
})
export class ViewArmazenamentoPage implements OnInit {


  armazenamento: Armazenamento
  stars:string[] = []



  constructor(
    private navParam: NavParams
  ) {


  }
  ngOnInit() {
    let lista = this.navParam.get('armazenamento_lista')  
      this.armazenamento = lista

      this.numberStars()
    }
    numberStars() {
      let tmp = this.armazenamento.nivelId.id
      for (let index = 0; index < 5; index++, tmp--) {
        if (tmp >= 1) {
          this.stars.push("star")
        } else if (tmp > 0 && tmp < 1) {
          this.stars.push("star-half")
        } else this.stars.push("star-outline")
      }
    }
}
