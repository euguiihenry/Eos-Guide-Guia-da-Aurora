import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-widget',
  templateUrl: './quote-widget.component.html',
  styleUrls: ['./quote-widget.component.scss']
})
export class QuoteWidgetComponent implements OnInit {
  quoteTitle: string;
  quoteParagraph: string;
  quoteAuthor: string;

  constructor() {
    this.quoteTitle = "Quote do Dia";
    this.quoteParagraph = "Eu faço da minha dificuldade a minha motivação. A volta por cima vem na continuação.";
    this.quoteAuthor = "Desconhecido";
  }

  ngOnInit(): void {
  }

}
