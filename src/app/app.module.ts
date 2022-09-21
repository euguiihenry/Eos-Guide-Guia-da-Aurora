import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeModule } from './home/home.module';
import { SignModule } from './sign/sign.module';
import { SettingsModule } from './settings/settings.module';
import { TesteComponent } from './teste/teste.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SignModule,
    SettingsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
