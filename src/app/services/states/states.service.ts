import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';



@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor() { }

  private currentUserSubject = new BehaviorSubject<IUser | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private loadingPostSubject = new BehaviorSubject<boolean>(false);
  public loadingPost$ = this.loadingPostSubject.asObservable();

  getUser(): IUser | null {
    return this.currentUserSubject.getValue();
  }

  getLoadingPost(): boolean {
    return this.loadingPostSubject.getValue();
  }

  updateCurrentUser(user: IUser) {
    this.currentUserSubject.next(user);
  }

  updateLoadingPost(status: boolean) {
    this.loadingPostSubject.next(status);
  }

}
