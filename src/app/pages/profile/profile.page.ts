import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { StatesService } from 'src/app/services/states/states.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private statesService: StatesService, private router: Router, private authenticationService: AuthenticationService) { }

  user: IUser = {
    email: '',
    nome: '',
    foto: ''
  };

  loadingPost: boolean = false;

  userSubscription: Subscription = new Subscription;

  ngOnInit() {
    this.userSubscription = this.statesService.currentUser$.subscribe((currentUser) => {
      this.user = currentUser ?? {
        email: '',
        nome: '',
        foto: ''
      };;
    });

  }

  onDestroy() {
    this.userSubscription.unsubscribe();
  }

  async logout() {
    await this.authenticationService.signOut();
    this.statesService.updateCurrentUser({
      email: '',
      nome: '',
      foto: ''
    })
    this.router.navigateByUrl('login');
  }

}
