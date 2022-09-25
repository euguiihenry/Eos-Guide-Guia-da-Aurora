import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinema-widget',
  templateUrl: './cinema-widget.component.html',
  styleUrls: ['./cinema-widget.component.scss']
})
export class CinemaWidgetComponent implements OnInit {
  entertainmentSubtitle: string;
  cinemaImg: string;
  entertainmentDescription: string;
  refLink: string;

  constructor() {
    this.entertainmentSubtitle = "A Família Addams 2";
    this.cinemaImg = "https://cinevisao.pt/wp-content/uploads/2020/10/Data-de-estreia-do-filme-A-Familia-Addams-2.jpg";
    this.entertainmentDescription = "Pertubados que seus filhos estão crescendo rápido, Morticia (Charlize Theron) e Gomez (Oscar Isaac), e fazendo coisas que não faziam, eles descidem...";
    this.refLink = '';
  }

  ngOnInit(): void {
  }

}
