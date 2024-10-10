import { Component } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private navCtrl: NavController) {
    this.initializeApp();
  }


  public appPages = [
    { title: 'Post', url: '/post', icon: 'list' },
  ];

  logoutUser() {
    this.navCtrl.navigateRoot('/login')
  }

  initializeApp() {
    GoogleAuth.initialize(
      {
        clientId: environment.clientID,
        scopes: ['profile', 'email'],
        grantOfflineAccess: true,
      }
    )

  }


}
