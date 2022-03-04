import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UsuarioService } from '../api/usuario.service';
import { GlobalVariables } from '../GlobalVariabels';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.page.html',
  styleUrls: ['./logon.page.scss'],
})
export class LogonPage implements OnInit {

  email: string = ""
  senha: string = ""

  constructor(
    private navController: NavController,
    private usuarioService: UsuarioService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  navRegistro() {
    this.navController.navigateForward('usuario-registro')
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

  async logon() {   
    const resposta = await this.usuarioService.validarLogin(this.email, this.senha)

    this.showToast(resposta.message)

    if (resposta.success) {
      GlobalVariables.usuarioLogado = resposta.data

      this.navController.navigateRoot("home")
    }
  }
}
