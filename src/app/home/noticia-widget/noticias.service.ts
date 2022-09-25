import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { NewsInterface } from './noticias';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private readonly connection = "https://gnews.io/api/v4/{endpoint}?token=67cf13a832ba3a73fce52db137b964ff";

  private readonly params = new HttpParams()
  

  constructor(private http: HttpClient) {
    this.params.set('topic', "breaking-news");
    this.params.set('lang', "pt");
    this.params.set('country', "br",);
    this.params.set('max', "4");
  }

  list() {
    return this.http.get<NewsInterface[]>(this.connection, {
      observe: 'body',
      responseType: 'json',
      params: {
        topic: 'breaking-news',
        lang: 'pt',
        country: 'br',
        max: '4'
      }
    });
  }
}
