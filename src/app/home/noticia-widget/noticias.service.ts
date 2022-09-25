import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsInterface } from './noticias';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private readonly connection = "https://gnews.io/api/v4/{endpoint}?token=67cf13a832ba3a73fce52db137b964ff";

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<NewsInterface[]>(this.connection, {
      params: {
        topic: "breaking-news",
        lang: "pt",
        country: "br",
        max: "4"
      }
    });
  }
}
