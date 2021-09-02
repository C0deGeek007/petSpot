import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupViewComponent } from './signup-view/signup-view.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialApiModule } from '../material-api/material-api.module'


@NgModule({
  declarations: [
    SignupViewComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialApiModule
  ]
})
export class SignupModule { }
