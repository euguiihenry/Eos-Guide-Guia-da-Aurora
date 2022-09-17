import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


import { MainWidgetsModule } from './main-widgets/main-widgets.module';
import { SecondaryWidgetsModule } from './secondary-widgets/secondary-widgets.module';


@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MainWidgetsModule,
    SecondaryWidgetsModule,
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
