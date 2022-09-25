import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comida-widget',
  templateUrl: './comida-widget.component.html',
  styleUrls: ['./comida-widget.component.scss']
})
export class ComidaWidgetComponent implements OnInit {
  foodSubtitle: string;
  foodDescription: string;

  constructor() {
    this.foodSubtitle = "";
    this.foodDescription = "";
  }

  ngOnInit(): void {
  }

}
