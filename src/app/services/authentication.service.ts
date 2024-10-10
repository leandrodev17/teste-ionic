import { Injectable } from '@angular/core';
import { GoogleAuth, User } from '@codetrix-studio/capacitor-google-auth';
import { FirestoreService } from './firestore.service';
import { UserInterface } from '../interfaces/user.interface';
import { Auth, signInWithCredential, GoogleAuthProvider, getAuth } from '@angular/fire/auth';
import { FirebaseApp, initializeApp } from '@angular/fire/app';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private firestoreService: FirestoreService, private auth: Auth, private firebaseApp: FirebaseApp) { }

  async saveSessionFirebase(googleUser: User) {
    try {
      let resultToken = await signInWithCredential(this.auth, GoogleAuthProvider.credential(googleUser.authentication.idToken))
      console.log(resultToken.user.getIdToken);
      return resultToken.user.getIdToken
    } catch (error) {
      console.log(error);
      
      return null
    }
  }

  async signIn(): Promise<UserInterface | null> {
    try {
      let userResult: UserInterface = {
        id: '',
        email: '',
        nome: '',
        foto: ''
      }

      let googleUser = await GoogleAuth.signIn();

      console.log(googleUser);

      if (googleUser) {
        let resultSaveFirebase = this.saveSessionFirebase(googleUser)

        let resultCheck = await this.firestoreService.checkUserByEmail(googleUser.email, 'usuarios')

        if (resultCheck == false) {

          await this.firestoreService.saveData(googleUser, 'usuarios')
          console.log('Usuário adicionado com sucesso!');
        }

        userResult.nome = googleUser.name
        userResult.email = googleUser.name
        userResult.foto = googleUser.name

        return userResult;
      }

      return null;

    } catch (error) {
      console.log('Erro ao salvar usuario!');
      return null;
    }
  }




  async signOut() {
    await getAuth(this.firebaseApp).signOut()
    GoogleAuth.signOut();
  }
}
