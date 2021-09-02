import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private afAuth: AngularFireAuth,
    private router:Router,
    private db: AngularFirestore) { }

  async signup(signupValue:any) {
    const email=signupValue['email'];
    const password=signupValue['password'];
    return await this.afAuth.createUserWithEmailAndPassword(email, password).then((result)=>{
      delete signupValue['password'];
      localStorage.setItem('currentUser', result.user!.uid);
      this.db.collection('Users').doc(result.user!.uid).set(signupValue);
      this.db.collection('userPets').doc(result.user!.uid).set({});
      console.log(result.user!.uid);
      this.router.navigate(['/profile'])
    }).catch((error)=>{
      window.alert(error.message);
    });
  }

}
