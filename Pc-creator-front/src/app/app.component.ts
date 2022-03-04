import { Component } from '@angular/core';

import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GlobalVariables } from './GlobalVariabels';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  private executeLogoff: boolean = false


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navController: NavController

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async navMontagem() {
    this.navController.navigateForward('montagem/0')
  }
  async navHome() {
    this.navController.navigateForward('home')
  }

  async logoff() {
    /* GlobalVariables.usuarioLogado = null
     this.navController.navigateRoot('logon')*/
    this.executeLogoff = true
  }

  menuClose() {
    if (this.executeLogoff) {
      this.executeLogoff = false
      GlobalVariables.usuarioLogado = null
      this.navController.navigateRoot('logon')
    }
  }



  isLogged(): boolean {
    if (GlobalVariables.usuarioLogado != null)
      return true
    else
      return false
  }

}
