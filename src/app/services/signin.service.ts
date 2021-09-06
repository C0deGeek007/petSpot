import { Injectable } from '@angular/core';
//import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
//import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor( private router:Router ,
    private http:HttpClient
    ) { }

  signIn(email:string, password:string) {
    const body={email:email,password:password};
    return this.http.post<any>('http://localhost:4200/login',body);
  }

  loggedIn(): boolean {
    return (localStorage.getItem('currentUser') !== null);
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
