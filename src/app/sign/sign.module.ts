import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    SignInComponent,
    SignUpComponent
  ]
})
export class SignModule { }
