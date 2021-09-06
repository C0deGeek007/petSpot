import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from '../services/authguard.service';
import { AddPetsComponent } from './add-pets/add-pets.component';
import { PetsViewComponent } from './pets-view/pets-view.component';

const routes: Routes = [
  {
    path:'petsview',
    component:PetsViewComponent,
    canActivate:[AuthguardService]
  },
  {
    path:'addpets',
    component:AddPetsComponent,
    canActivate:[AuthguardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetsRoutingModule { }
