import { Component, EventEmitter, OnInit } from '@angular/core';
import { NoticiasService } from '../services/news/noticias.service';
import { NewsInterface } from '../services/news/models/proto-news-interface';
import { NewsArticles } from '../services/news/models/final-news-interface';
import { WeatherService } from '../services/weather/weather.service';
import { weatherInterface } from '../services/weather/models/weather-info-interface';
import { weatherFinal } from '../services/weather/models/weather-final-interface';
import { MusicService } from '../services/music/music.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  //@ts-ignore
    local: string; iconLink: string;  windP: number; waterP: number; pressure: number; temperatureStatus: string; degrees: number;

  //@ts-ignore
    musicName: string; singer: string; musicImg: string; musicLink: string;
    statusIcon: string;
    statusOfPlayer: string;
    public status: EventEmitter<boolean> = new EventEmitter<boolean>();

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
    public newsArticles: NewsArticles[];

  constructor(private newsService: NoticiasService, private weatherService: WeatherService, private musicService: MusicService) { 
    // Weather:
      if (Object.keys(JSON.parse(localStorage.getItem('weatherInfo') || '{}')).length === 0) {
        this.local = "Belo Horizonte";
        this.iconLink = "http://openweathermap.org/img/wn/02d.png";

        this.windP = 10;
        this.waterP = 39;
        this.pressure = 0;

        this.temperatureStatus = "Parcialmente nublado";
        this.degrees = 25;
      }

    // Music:
      if(Object.keys(JSON.parse(localStorage.getItem('viralMusic') || '{}')).length === 0) {
        this.musicName = "Physical";
        this.singer = "Dua Lipa";
      }

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
      this.newsArticles = [];

  }

  private getNewsDB = () => {

    this.newsService.getAllNews()
    .subscribe((newsType: NewsInterface) => {
      this.protoNews = newsType;
      this.newsArticles = this.protoNews.articles.map(article => {
        return {
          ...article
        }
      });
    })
  }

  private showWeather(weatherInfo: weatherFinal) {
    if(Object.keys(weatherInfo).length !== 0) {
      this.local = weatherInfo.location;
      this.windP = ((weatherInfo.wind)*3,6);
      this.waterP = weatherInfo.humidity;
      this.pressure = weatherInfo.pressure;
      this.temperatureStatus = weatherInfo.description.charAt(0).toUpperCase() + weatherInfo.description.slice(1);
      this.iconLink = `http://openweathermap.org/img/wn/${weatherInfo.icon}.png`;
      this.degrees = weatherInfo.temp;
    } 
  }

  private getInfo() {
    const weatherInfo: weatherFinal = JSON.parse(localStorage.getItem('weatherInfo') || '{}');
    let now = new Date();
    let sumTime = 3600000;

    if (Object.keys(weatherInfo).length !== 0) {
      if (weatherInfo.time >= (now.getTime()+sumTime)) { 
        localStorage.removeItem('weatherInfo');
        this.getWeather(now);

      } else {
        this.showWeather(weatherInfo);
      }

    } else {
      this.getWeather(now);
    }
  }

  private getWeather = async (now: Date) => {
    let coords = await this.weatherService.getCoords();

    (this.weatherService.getWeatherStatus(coords))
      .subscribe((data:weatherInterface) => {
        let info = {
          location: data.name,
          description: data.weather.at(0)?.description,
          icon: data.weather.at(0)?.icon,
          temp: Math.trunc(data.main.temp),
          wind: data.wind.speed,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          time: now.getTime()
        }

        localStorage.setItem('weatherInfo', JSON.stringify(info));
        this.showWeather(JSON.parse(localStorage.getItem('weatherInfo') || '{}'));
      })
  }

  showMusic() {
    this.musicService.getViralTracks();

    if(Object.keys(JSON.parse(localStorage.getItem('viralMusic') || '{}')).length !== 0) {
      let music = this.musicService.getSavedMusic();

      this.musicName = music.name;
      this.singer = music.artists;
      this.musicImg = music.image;
      this.musicLink = music.link;
    } else {
      alert("Error ao acessar o acervo de música! Provavelmente a API chegou ao seu limite de acessos!");
      this.musicImg = "https://upload.wikimedia.org/wikipedia/en/f/f5/Dua_Lipa_-_Future_Nostalgia_%28Official_Album_Cover%29.png";
      this.musicLink = "https://open.spotify.com/track/3AzjcOeAmA57TIOr9zF1ZW?si=9cf4d7fd9cca42b5";
    }
  }
  
  ngOnInit(): void {
    this.getNewsDB();
    this.getInfo();
    this.showMusic();
  }

}
