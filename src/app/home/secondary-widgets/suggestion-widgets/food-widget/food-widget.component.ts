import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-widget',
  templateUrl: './food-widget.component.html',
  styleUrls: ['./food-widget.component.scss']
})
export class FoodWidgetComponent implements OnInit {
  foodSubtitle: string;
  foodDescription: string;

  constructor() {
    this.foodSubtitle = "";
    this.foodDescription = "";
  }

  ngOnInit(): void {
  }

}
