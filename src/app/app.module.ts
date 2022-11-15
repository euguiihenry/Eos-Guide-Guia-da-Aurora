import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { Drivers, Storage} from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SignModule} from './sign/sign.module'
import { SettingsModule } from './settings/settings.module';

import { IonicStorageModule } from '@ionic/storage-angular';
import { UserRegistration } from './global-services/userRegistration.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    SignModule,
    SettingsModule,
    ReactiveFormsModule,
    FormsModule,
    IonicStorageModule.forRoot({
      name: '_usersDB',
      driverOrder: [ Drivers.IndexedDB, Drivers.LocalStorage]
    })
  ],
  providers: [UserRegistration, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
