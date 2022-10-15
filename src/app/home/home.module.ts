import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { SignModule } from '../sign/sign.module';
import { SettingsModule } from '../settings/settings.module';


import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SignModule,
    SettingsModule
  ]
})
export class HomeModule { }
