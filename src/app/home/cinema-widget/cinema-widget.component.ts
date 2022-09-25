import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinema-widget',
  templateUrl: './cinema-widget.component.html',
  styleUrls: ['./cinema-widget.component.scss']
})
export class CinemaWidgetComponent implements OnInit {
  entertainmentSubtitle: string;
  entertainmentDescription: string;

  constructor() {
    this.entertainmentSubtitle = "";
    this.entertainmentDescription = "";
  }

  ngOnInit(): void {
  }

}
