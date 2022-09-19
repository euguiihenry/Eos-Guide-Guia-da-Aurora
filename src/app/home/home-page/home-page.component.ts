import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: [
    './home-page.component.scss',
    '../../../scss/abstracts/_mixins.scss',
    '../../../scss/components/_typography.scss',
    '../../../scss/abstracts/_variables.scss'
  ]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
