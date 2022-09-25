import { Component, OnInit } from '@angular/core';
import { NoticiasService } from './noticias.service';
import { NewsInterface } from './noticias';

@Component({
  selector: 'app-noticia-widget',
  templateUrl: './noticia-widget.component.html',
  styleUrls: ['./noticia-widget.component.scss']
})
export class NoticiaWidgetComponent implements OnInit {

  newsArray: NewsInterface[] = [];

  constructor(private news: NoticiasService) { }

  ngOnInit(): void {
    this.news.list()

    .subscribe( (response) => {
      return this.newsArray = response;
    });
  }

}
