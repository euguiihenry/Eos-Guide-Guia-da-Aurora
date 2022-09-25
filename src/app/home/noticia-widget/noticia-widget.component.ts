import { Component, OnInit } from '@angular/core';
import { NoticiasService } from './noticias.service';
import { Noticias } from './noticias';

@Component({
  selector: 'app-noticia-widget',
  templateUrl: './noticia-widget.component.html',
  styleUrls: ['./noticia-widget.component.scss']
})
export class NoticiaWidgetComponent implements OnInit {

  newsArray: Noticias[];

  constructor(private news: NoticiasService) { }

  ngOnInit(): void {
    this.news.list()
    .subscribe( response => this.newsArray = response );


  }

}
