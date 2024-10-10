import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  async saveData(value: Object, colletionRef: string) {
    const reference = collection(this.firestore, colletionRef);
    return await addDoc(reference, value);
  }

  async findId(id: string, colletionRef: string) {
    const reference = doc(this.firestore, colletionRef + '/' + id);
    return await getDoc(reference);
  }

  async checkUserByEmail(email: string, colletionRef: string) {
    const reference = query(
      collection(this.firestore, colletionRef),
      where('email', '==', email)
    );
    let result = await getDocs(reference);
    return !result.empty;
  }
}
