import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';


import { MenuComponent } from './menu/menu.component';
import { CinemaComponent } from './cinema/cinema.component';
import { ComidaComponent } from './comida/comida.component';
import { LazerComponent } from './lazer/lazer.component';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';



@NgModule({
  declarations: [
    MenuComponent,
    CinemaComponent,
    ComidaComponent,
    LazerComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SettingsModule { }
