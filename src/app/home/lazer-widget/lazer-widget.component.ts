import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazer-widget',
  templateUrl: './lazer-widget.component.html',
  styleUrls: ['./lazer-widget.component.scss']
})
export class LazerWidgetComponent implements OnInit {
  leisureSubtitle: string;
  lazerImg: string;
  leisureDescription: string;
  refLink: string;

  constructor() {
    this.leisureSubtitle = "Corrida";
    this.lazerImg = "https://images.unsplash.com/photo-1638886050954-dbd7208412c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cnVubmluZ3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60";
    this.leisureDescription = "O clima propicia uma leve caminhada e até mesmo, caso seja de sua vontade, uma corrida leve.";
    this.refLink = "";
  }

  ngOnInit(): void {
  }

}
