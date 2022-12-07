import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { NewsInterface } from './models/proto-news-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class NoticiasService {

  //private readonly connection = "https://gnews.io/api/v4/top-headlines?token=67cf13a832ba3a73fce52db137b964ff&topic=breaking-news&lang=pt&country=br&max=4";
  //private readonly connection = 'http://localhost:3000/news'; 
  private readonly newsAPI = environment.newsAPI;
  private topic = 'breaking-news';
  private lang = 'pt';
  private country = 'br';
  private max = 4;
  private connection = `https://gnews.io/api/v4/top-headlines?token=${this.newsAPI}&topic=${this.topic}&${this.lang}&${this.country}&max=${this.max}`;

  constructor(private http: HttpClient) {}

  public getAllNews = () => this.http.get<NewsInterface>(this.connection);

  public getOneNews = (id: number) => this.http.get<NewsInterface>(this.connection+'/'+id);
}