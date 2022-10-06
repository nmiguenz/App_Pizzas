import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './../../components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresoRoutingModule } from './ingreso-routing.module';
import { IngresoComponent } from './ingreso.component';

@NgModule({
  declarations: [
    IngresoComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    IngresoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class IngresoModule { }
