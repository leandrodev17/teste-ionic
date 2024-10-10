import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import {
  Auth,
  GoogleAuthProvider,
  getAuth,
  signInWithCredential,
} from '@angular/fire/auth';
import { GoogleAuth, User } from '@codetrix-studio/capacitor-google-auth';
import { IUser } from '../../interfaces/user.interface';
import { FirestoreService } from '../firestore/firestore.service';
import { IUserFirestore } from 'src/app/interfaces/userFirestore.interface';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private firestoreService: FirestoreService,
    private auth: Auth,
    private firebaseApp: FirebaseApp
  ) { }

  user?: IUser;

  async saveSessionFirebase(googleUser: User) {
    try {
      let resultToken = await signInWithCredential(
        this.auth,
        GoogleAuthProvider.credential(googleUser.authentication.idToken)
      );
      console.log(resultToken.user.getIdToken);
      return resultToken.user.getIdToken;
    } catch (error) {
      console.log(error);

      return null;
    }
  }

  async signIn(): Promise<IUser | null> {
    try {


      let googleUser = await GoogleAuth.signIn();

      console.log(googleUser);

      if (googleUser) {
        let userResult: IUser = {
          id: '',
          email: googleUser.name,
          nome: googleUser.email,
          foto: googleUser.imageUrl,
        };


        let resultSaveFirebase = this.saveSessionFirebase(googleUser);

        let resultCheck = await this.firestoreService.checkUserByEmail(
          googleUser.email,
          'usuarios'
        );


        const dataAtual = new Date();
        const dataString = dataAtual.toString();

        const dataUserFirestore: IUserFirestore = {
          id_google: googleUser.id,
          nome: googleUser.name,
          email: googleUser.email,
          dataLogin: dataString
        };

        if (resultCheck == false) {
          await this.firestoreService.saveData(dataUserFirestore, 'usuarios');
          console.log('Usuário adicionado com sucesso!');
        }

        this.user = userResult;
        return userResult;
      }

      return null;
    } catch (error) {
      console.log('Erro ao salvar usuario!');
      return null;
    }
  }

  async signOut() {
    await getAuth(this.firebaseApp).signOut();
    GoogleAuth.signOut();
    this.user = undefined;
  }
}
