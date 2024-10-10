import { NavController } from '@ionic/angular';

import { Component, OnInit } from '@angular/core';
import '@codetrix-studio/capacitor-google-auth';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { StatesService } from 'src/app/services/states/states.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private navController: NavController,
    private statesService: StatesService
  ) {}

  ngOnInit() {}

  async signInUser() {
    let userResult = await this.authenticationService.signIn();

    if (userResult != null) {
      console.log(userResult);
      
      this.statesService.updateCurrentUser(userResult)
      this.navController.navigateForward('post');
    }
  }
}
