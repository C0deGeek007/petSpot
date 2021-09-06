import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp } from "firebase/app";
//import { AngularFireModule } from '@angular/fire/compat';
//import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { httpInterceptProviders } from './httpinterceptor/interceptorProvider';
import {HttpClientModule } from '@angular/common/http'

const app=initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //AngularFireModule.initializeApp(environment.firebase),
    //AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [httpInterceptProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
