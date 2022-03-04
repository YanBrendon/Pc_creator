import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UsuarioService } from '../api/usuario.service';
import { Resposta } from '../models/resposta';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-usuario-registro',
  templateUrl: './usuario-registro.page.html',
  styleUrls: ['./usuario-registro.page.scss'],
})
export class UsuarioRegistroPage implements OnInit {

  usuario: Usuario 

  constructor(
    private toastController: ToastController,
    private usuarioService: UsuarioService,
    private navController: NavController
  ) {
    this.usuario = {
      email: "",
      id: 0,
      nome: "",
      senha: ""
    }
  }

  ngOnInit() {
  }

  async showToast(message: string) {
    const toast = await this.toastController.create(
      {
        message,
        duration: 3000,
        position: 'middle'
      }
    )

    toast.present();
  }

  async salvar() {
    let resposta: Resposta<Usuario>

    if (this.usuario.id == 0)
      resposta = await this.usuarioService.insert(this.usuario)
      this.showToast(resposta.message)

    if (resposta.success)
      this.navController.navigateBack('logon')
    else
      this.showToast(resposta.message)
  }
}
