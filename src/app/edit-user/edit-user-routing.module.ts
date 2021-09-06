import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService }  from '../services/authguard.service';
import { EditUserViewComponent } from './edit-user-view/edit-user-view.component';

const routes: Routes = [ 
  {
    path:'',
    component:EditUserViewComponent,
    canActivate:[AuthguardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditUserRoutingModule { }
