import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { SignModule } from '../sign/sign.module';
import { SettingsModule } from '../settings/settings.module';


import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ClimaWidgetComponent } from './clima-widget/clima-widget.component';
import { FraseWidgetComponent } from './frase-widget/frase-widget.component';
import { MusicaWidgetComponent } from './musica-widget/musica-widget.component';
import { NoticiaWidgetComponent } from './noticia-widget/noticia-widget.component';
import { CinemaWidgetComponent } from './cinema-widget/cinema-widget.component';
import { ComidaWidgetComponent } from './comida-widget/comida-widget.component';
import { LazerWidgetComponent } from './lazer-widget/lazer-widget.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MainComponent,
    ClimaWidgetComponent,
    FraseWidgetComponent,
    MusicaWidgetComponent,
    NoticiaWidgetComponent,
    CinemaWidgetComponent,
    ComidaWidgetComponent,
    LazerWidgetComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SignModule,
    SettingsModule
  ]
})
export class HomeModule { }
