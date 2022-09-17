import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FoodWidgetComponent } from './food-widget/food-widget.component';
import { EntertainmentWidgetComponent } from './entertainment-widget/entertainment-widget.component';
import { LeisureWidgetComponent } from './leisure-widget/leisure-widget.component';



@NgModule({
  declarations: [
    FoodWidgetComponent,
    EntertainmentWidgetComponent,
    LeisureWidgetComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FoodWidgetComponent,
    EntertainmentWidgetComponent,
    LeisureWidgetComponent
  ]
})
export class SuggestionWidgetsModule { }
