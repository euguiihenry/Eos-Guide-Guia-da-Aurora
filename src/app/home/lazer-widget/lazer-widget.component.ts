import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazer-widget',
  templateUrl: './lazer-widget.component.html',
  styleUrls: ['./lazer-widget.component.scss']
})
export class LazerWidgetComponent implements OnInit {
  leisureSubtitle: string;
  leisureDescription: string;

  constructor() {
    this.leisureSubtitle = "";
    this.leisureDescription = "";
  }

  ngOnInit(): void {
  }

}
