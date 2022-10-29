import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/news/noticias.service';
//import { newsDb } from '../services/news/newsDb.json';
import { NewsInterface } from '../services/news/models/proto-news-interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  local: string;
  iconName: string;
  bootstrapWeatherIcon: string;

  windP: number;
  waterP: number;
  rainP: number;

  temperatureStatus: string;
  degrees: number;

  musicName: string;
  singer: string;
  statusIcon: string;
  statusOfPlayer: string;

  quoteTitle: string;
  quoteParagraph: string;
  quoteAuthor: string;

  foodSubtitle: string;
  foodImg: string;
  foodDescription: string;
  foodLink: string;

  entertainmentSubtitle: string;
  cinemaImg: string;
  entertainmentDescription: string;
  cinemaLink: string;

  leisureSubtitle: string;
  lazerImg: string;
  leisureDescription: string;
  leisureLink: string;

  // News variables:
    public protoNews: NewsInterface;
    public newsArticles: any;

  constructor(private newsService: NoticiasService) { 

    // Weather:
      this.local = "Belo Horizonte";
      this.iconName = "cloud-sun";
      this.bootstrapWeatherIcon = "bootstrap-icons.svg#" + this.iconName;

      this.windP = 10;
      this.waterP = 39;
      this.rainP = 0;

      this.temperatureStatus = "Parcialmente nublado";
      this.degrees = 25;

    // Music:
      this.musicName = "Physical";
      this.singer = "Dua Lipa";
      this.statusIcon = "play-circle-fill"
      this.statusOfPlayer = "bootstrap-icons.svg#" + this.statusIcon;

    // Quote:
      this.quoteTitle = "Quote do Dia";
      this.quoteParagraph = "Eu faço da minha dificuldade a minha motivação. A volta por cima vem na continuação.";
      this.quoteAuthor = "Desconhecido";

    // Alimentação:
      this.foodSubtitle = "Hamburguer & Fritas";
      this.foodImg = "https://images.unsplash.com/photo-1548077446-8ee8a91f298d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";
      this.foodDescription = "Vamos olhar essa receita maravilhosa que cai bem com o clima ameno que está no ambiente externo.";
      this.foodLink = "";

    // Cinema:
      this.entertainmentSubtitle = "A Família Addams 2";
      this.cinemaImg = "https://cinevisao.pt/wp-content/uploads/2020/10/Data-de-estreia-do-filme-A-Familia-Addams-2.jpg";
      this.entertainmentDescription = "Pertubados que seus filhos estão crescendo rápido, Morticia (Charlize Theron) e Gomez (Oscar Isaac), e fazendo coisas que não faziam, eles descidem...";
      this.cinemaLink = '';

    // Lazer:
      this.leisureSubtitle = "Corrida";
      this.lazerImg = "https://images.unsplash.com/photo-1638886050954-dbd7208412c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cnVubmluZ3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60";
      this.leisureDescription = "O clima propicia uma leve caminhada e até mesmo, caso seja de sua vontade, uma corrida leve.";
      this.leisureLink = "";

    // News:
      this.protoNews  = {} as NewsInterface;
      this.newsArticles = '';

  }

  private getNewsDB = () => {

    this.newsService.getAllNews()
    .subscribe((newsType: NewsInterface) => {
      this.protoNews = newsType;
      this.newsArticles = this.protoNews.articles.map(article => article);
    })
  }
  
  ngOnInit(): void {
    this.getNewsDB();
  }

}
