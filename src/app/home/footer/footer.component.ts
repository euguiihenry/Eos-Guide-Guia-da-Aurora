import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss',
              '../../../scss/abstracts/_mixins.scss',
              '../../../scss/components/_typography.scss',
              '../../../scss/abstracts/_variables.scss'
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
