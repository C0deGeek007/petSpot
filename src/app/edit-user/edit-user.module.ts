import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditUserRoutingModule } from './edit-user-routing.module';
import { EditUserViewComponent } from './edit-user-view/edit-user-view.component';
import { VesselModule } from '../vessel/vessel.module';
import { MaterialApiModule } from '../material-api/material-api.module';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditUserViewComponent
  ],
  imports: [
    CommonModule,
    EditUserRoutingModule,
    VesselModule,
    MaterialApiModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditUserModule { }
