import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileViewComponent } from './user-profile-view/user-profile-view.component';
import { VesselModule } from '../vessel/vessel.module';
import { MaterialApiModule } from '../material-api/material-api.module';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserProfileViewComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    VesselModule,
    MaterialApiModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class UserProfileModule { }
