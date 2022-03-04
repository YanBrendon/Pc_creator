import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, MenuController, NavController, ToastController } from '@ionic/angular';
import { MaquinaService } from '../api/maquina.service';
import { ProcessadorService } from '../api/processador.service';
import { ArmazenamentoPage } from '../armazenamento/armazenamento.page';
import { GlobalVariables } from '../GlobalVariabels';
import { MemoriaRanPage } from '../memoria-ran/memoria-ran.page';
import { Armazenamento } from '../models/armazenamentos';
import { Maquina } from '../models/maquina';
import { MemoriaRam } from '../models/memoria-ram';
import { PlacaMae } from '../models/placa-mae';
import { Processador } from '../models/processador';
import { Resposta } from '../models/resposta';
import { PlacaMaePage } from '../placa-mae/placa-mae.page';
import { ProcessadorPage } from '../processador/processador.page';


@Component({
  selector: 'app-montagem',
  templateUrl: './montagem.page.html',
  styleUrls: ['./montagem.page.scss'],
})
export class MontagemPage implements OnInit {

  maquina: Maquina = new Maquina
  maquinaPreco: number = 0
  stars: string[] = []

  constructor(
    private menuController: MenuController,
    private maquinaServices: MaquinaService,
    private toastController: ToastController,
    private actvateRouter: ActivatedRoute,
    private navController: NavController

  ) { }


  async ngOnInit() {
    this.numberStars()
    this.somaMaquina()

    let idParam: string = this.actvateRouter.snapshot.paramMap.get('id')
    let id = parseInt(idParam)

    if (id != 0) {
      let retornoParam = await this.maquinaServices.getById(id)
      this.maquina = retornoParam.data
    }

    ProcessadorPage.callBack = (processador: Processador) => {
      this.maquina.processadorId = processador
      this.numberStars()
      this.somaMaquina()
    }

    MemoriaRanPage.callBack = (memoriaRam: MemoriaRam) => {
      this.maquina.memoriaRamId = memoriaRam
      this.numberStars()
      this.somaMaquina()
    }

    PlacaMaePage.callBack = (placaMae: PlacaMae) => {
      this.maquina.placaMaeId = placaMae
      this.numberStars()
      this.somaMaquina()
    }

    ArmazenamentoPage.callBack = (armazenamento: Armazenamento) => {
      this.maquina.armazenamentoId = armazenamento
      this.numberStars()
      this.somaMaquina()
    }
  }

  async opemMenu() {
    this.menuController.open()
  }

  async navProcessador() {
    await this.navController.navigateForward(`processador/${this.maquina.id}`)

  }

  async navPlacaMae() {
    this.navController.navigateForward(`placa-mae/${this.maquina.id}`)

  }

  async navMemoriaRam() {
    this.navController.navigateForward(`memoria-ran/${this.maquina.id}`)

  }

  async navArmazenamento() {
    this.navController.navigateForward(`armazenamento/${this.maquina.id}`)

  }


  async salvar() {

    let resposta: Resposta<Maquina>


    console.log(this.maquina)
    if (this.maquina.id != 0)
      resposta = await this.maquinaServices.update(this.maquina)
    else
      resposta = await this.maquinaServices.insert(this.maquina)


    if (resposta.success) {
      await this.navController.navigateBack('home')
      await this.toastControl(resposta.message)
    } else
      await this.toastControl(resposta.message)
  }


  async toastControl(message: string) {
    const toast = await this.toastController.create(
      {
        message,
        duration: 3000,
        position: 'middle'
      }
    )
    toast.present();
  }

  somaMaquina() {
    let somaProcessador = this.maquina.processadorId ? Number(this.maquina.processadorId.valorestimado) : 0
    let somaPlacaMae = this.maquina.placaMaeId ? Number(this.maquina.placaMaeId.valorestimado) : 0
    let somaMemoriaRan = this.maquina.memoriaRamId ? Number(this.maquina.memoriaRamId.valorestimado) : 0
    let somaArmazenamento = this.maquina.armazenamentoId ? Number(this.maquina.armazenamentoId.valorestimado) : 0

    this.maquina.precoMaquina = (somaProcessador + somaPlacaMae + somaMemoriaRan + somaArmazenamento)
    
  }
  numberStars() {

    let nivelProcessador = this.maquina.processadorId ? Number(this.maquina.processadorId.nivelId) : 0
    let nivelPlacaMae = this.maquina.placaMaeId ? Number(this.maquina.placaMaeId.nivelId) : 0
    let nivelMemoriaRan = this.maquina.memoriaRamId ? Number(this.maquina.memoriaRamId.nivelId) : 0
    let nivelArmazenamento = this.maquina.armazenamentoId ? Number(this.maquina.armazenamentoId.nivelId) : 0

    this.maquina.nivelMaquina = (nivelProcessador + nivelPlacaMae + nivelMemoriaRan + nivelArmazenamento) / 4


    this.stars = []
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
