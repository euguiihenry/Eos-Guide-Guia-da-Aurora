import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { NewsInterface } from './noticias';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private readonly connection = "https://gnews.io/api/v4/top-headlines?token=67cf13a832ba3a73fce52db137b964ff&topic=breaking-news&lang=pt&country=br&max=4";

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<NewsInterface[]>(this.connection);
  }
}
