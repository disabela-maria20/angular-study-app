import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponteComponent } from './componte/componte.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    ComponteComponent,
    InputComponent
  ],
  exports: [
    ComponteComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
