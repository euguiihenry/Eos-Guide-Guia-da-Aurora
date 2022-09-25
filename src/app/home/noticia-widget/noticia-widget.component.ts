import { Component, OnInit } from '@angular/core';
import { NoticiasService } from './noticias.service';
import { NewsInterface } from './noticias';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-noticia-widget',
  templateUrl: './noticia-widget.component.html',
  styleUrls: ['./noticia-widget.component.scss']
})
export class NoticiaWidgetComponent implements OnInit {

  // Simulação de um dados trazido até a variável pela API:

  newsArray: NewsInterface[] = [];

  constructor(private news: NoticiasService) { }

  ngOnInit(): void {
    this.news.list()

    .subscribe( (response) => {
      return this.newsArray = response;
    });
  }

  

}


/* title: '',
description: '',
content: '',
url: '',
image: '',
publishedAt: '',
source: {
    name: '',
    url: ''
} */