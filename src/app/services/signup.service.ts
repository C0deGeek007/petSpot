import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http'
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor( private router:Router,
    private http:HttpClient
    ) { }

  signup(signupValue:any) {
    const email=signupValue['email'];
    const password=signupValue['password'];
    const signupCredentials={email:email,password:password}
    return this.http.post<any>('http://localhost:4200/signup',signupCredentials);
  }

  createuser(signupValue:any) {
    //delete signupValue['password'];
    const userdeatils=signupValue;
    return this.http.post<any>('http://localhost:4200/createUser',userdeatils);
  }

}
