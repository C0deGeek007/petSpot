import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutOneComponent } from './layout-one/layout-one.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';


const exportableDeclaration=[
  LayoutOneComponent
]

@NgModule({
  declarations: [
    ...exportableDeclaration
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule
  ],
  exports:[...exportableDeclaration]
})
export class VesselModule { }
