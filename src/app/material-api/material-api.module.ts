import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

const uiComponent=[
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule
]

@NgModule({
  imports: [
    ...uiComponent,
    CommonModule
  ],
  exports:[...uiComponent]
})
export class MaterialApiModule { }