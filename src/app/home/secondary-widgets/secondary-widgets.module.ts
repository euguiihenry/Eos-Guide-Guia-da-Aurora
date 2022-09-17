import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NewsWidgetComponent } from '../secondary-widgets/news-widget/news-widget.component';
import { SuggestionWidgetsModule } from './suggestion-widgets/suggestion-widgets.module';


@NgModule({
  declarations: [
    NewsWidgetComponent
  ],
  imports: [
    CommonModule,
    SuggestionWidgetsModule
  ],
  exports: [
    NewsWidgetComponent,
    SuggestionWidgetsModule
  ]
})
export class SecondaryWidgetsModule { }
