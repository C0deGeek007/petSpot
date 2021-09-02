import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private afAuth: AngularFireAuth,
    private router:Router,
    private db: AngularFirestore) { }

  signIn(email:string, password:string) {
    return this.afAuth.signInWithEmailAndPassword(email, password) .then((result) => {
      localStorage.setItem('currentUser', result.user!.uid);
      console.log(result);
      this.router.navigate(['/profile'])
    }).catch((error) => {
      window.alert(error.message);
    })
  }

  loggedIn(): boolean {
    return (localStorage.getItem('currentUser') !== null);
  }

  signOut() {
    return this.afAuth.signOut().then(() => {   
      localStorage.clear();
      this.router.navigate(['login']);
    })
  }

}
