import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-widget',
  templateUrl: './news-widget.component.html',
  styleUrls: ['./news-widget.component.scss']
})
export class NewsWidgetComponent implements OnInit {
  newsTitle1: string = 'loren ipsum';
  newsSummary1: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor';

  newsTitle2: string = 'loren ipsum';
  newsSummary2: string = this.newsSummary1;

  newsTitle3: string = 'loren ipsum';
  newsSummary3: string = this.newsSummary1;

  newsTitle4: string = 'loren ipsum';
  newsSummary4: string = this.newsSummary1;

  constructor() { }

  ngOnInit(): void {
  }

}
