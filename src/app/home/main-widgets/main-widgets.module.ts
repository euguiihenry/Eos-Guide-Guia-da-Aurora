import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { MusicWidgetComponent } from './music-widget/music-widget.component';
import { QuoteWidgetComponent } from './quote-widget/quote-widget.component';



@NgModule({
  declarations: [
    WeatherWidgetComponent,
    MusicWidgetComponent,
    QuoteWidgetComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WeatherWidgetComponent,
    MusicWidgetComponent,
    QuoteWidgetComponent
  ]
})
export class MainWidgetsModule { }
