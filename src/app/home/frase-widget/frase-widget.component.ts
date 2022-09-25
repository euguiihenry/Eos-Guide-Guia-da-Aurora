import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frase-widget',
  templateUrl: './frase-widget.component.html',
  styleUrls: ['./frase-widget.component.scss']
})
export class FraseWidgetComponent implements OnInit {
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
