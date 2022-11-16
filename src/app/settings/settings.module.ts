import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MenuComponent } from './menu/menu.component';
import { CinemaComponent } from './cinema/cinema.component';
import { ComidaComponent } from './comida/comida.component';
import { LazerComponent } from './lazer/lazer.component';



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
