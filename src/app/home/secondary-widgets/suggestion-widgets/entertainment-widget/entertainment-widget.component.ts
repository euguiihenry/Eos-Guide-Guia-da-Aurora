import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entertainment-widget',
  templateUrl: './entertainment-widget.component.html',
  styleUrls: ['./entertainment-widget.component.scss']
})
export class EntertainmentWidgetComponent implements OnInit {
  entertainmentSubtitle: string;
  entertainmentDescription: string;

  constructor() {
    this.entertainmentSubtitle = "";
    this.entertainmentDescription = "";
  }

  ngOnInit(): void {
  }

}
