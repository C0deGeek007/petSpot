import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsRoutingModule } from './pets-routing.module';
import { PetsViewComponent } from './pets-view/pets-view.component';
import { AddPetsComponent } from './add-pets/add-pets.component';
import { VesselModule } from '../vessel/vessel.module';
import { MaterialApiModule } from '../material-api/material-api.module';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PetsViewComponent,
    AddPetsComponent
  ],
  imports: [
    CommonModule,
    PetsRoutingModule,
    VesselModule,
    MaterialApiModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PetsModule { }
