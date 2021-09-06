import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [
  {
    path:'',
    redirectTo:'profile',
    pathMatch:'full'
  },
  {
    path:'login',
    loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule),
  },
  {
    path:'signup',
    loadChildren:()=>import('./signup/signup.module').then(m=>m.SignupModule)
  },
  {
    path:'profile',
    loadChildren:()=>import('./user-profile/user-profile.module').then(m=>m.UserProfileModule),
    canActivate:[AuthguardService]
  },
  {
    path:'edituser',
    loadChildren:()=>import('./edit-user/edit-user.module').then(m=>m.EditUserModule),
    canActivate:[AuthguardService]
  },
  {
    path:'pets',
    loadChildren:()=>import('./pets/pets.module').then(m=>m.PetsModule),
    canActivate:[AuthguardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
