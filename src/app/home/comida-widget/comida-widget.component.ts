import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comida-widget',
  templateUrl: './comida-widget.component.html',
  styleUrls: ['./comida-widget.component.scss']
})
export class ComidaWidgetComponent implements OnInit {
  foodSubtitle: string;
  foodImg: string;
  foodDescription: string;
  refLink: string;

  constructor() {
    this.foodSubtitle = "Hamburguer & Fritas";
    this.foodImg = "https://images.unsplash.com/photo-1548077446-8ee8a91f298d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";
    this.foodDescription = "Vamos olhar essa receita maravilhosa que cai bem com o clima ameno que está no ambiente externo.";
    this.refLink = "";
  }

  ngOnInit(): void {
  }

}
