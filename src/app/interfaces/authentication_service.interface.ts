import { User } from "@codetrix-studio/capacitor-google-auth";
import { IUser } from "./user.interface";

export interface IAuthenticationService {
  saveSessionFirebase(googleUser: User): Promise<string> | null;
  signIn(): Promise<IUser | null>;
  signOut(): Promise<void>;
}
