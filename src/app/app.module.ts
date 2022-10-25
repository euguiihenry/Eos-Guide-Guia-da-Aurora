import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Drivers, Storage} from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SignModule} from './sign/sign.module'
import { ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    SignModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot({
      name: '_usersDB',
      driverOrder: [ Drivers.IndexedDB, Drivers.LocalStorage]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
