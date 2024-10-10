import { NavController } from '@ionic/angular';

import { Component, OnInit } from '@angular/core';
import "@codetrix-studio/capacitor-google-auth";
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {  UserInterface } from '../../interfaces/user.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authenticationService: AuthenticationService, private navController: NavController) { }

  ngOnInit() {
  }

  async signInUser() {
   let userResult = await this.authenticationService.signIn()

   if (userResult != null ) {
    this.navController.navigateForward("post")  
   }
  }


}
