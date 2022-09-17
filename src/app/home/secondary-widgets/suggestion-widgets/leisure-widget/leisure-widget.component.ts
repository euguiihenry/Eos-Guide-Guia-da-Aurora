import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leisure-widget',
  templateUrl: './leisure-widget.component.html',
  styleUrls: ['./leisure-widget.component.scss']
})
export class LeisureWidgetComponent implements OnInit {
  leisureSubtitle: string;
  leisureDescription: string;

  constructor() {
    this.leisureSubtitle = "";
    this.leisureDescription = "";
  }

  ngOnInit(): void {
  }

}
