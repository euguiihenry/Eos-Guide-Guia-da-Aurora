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
    noticiasTeste: any = {
      totalArticles: 4,
      articles: [
        {
          tittle: 'Profissionalização e investimento até em redes sociais: como o Corinthians virou potência no futebol feminino',
          description: 'Timão amplia hegemonia ao conquistar o quarto título (terceiro seguido) do Brasileirão',
          content: 'É a 12ª conquista de relevância (estadual, nacional ou continental) das Brabas do Timão — elas também levantaram o troféu da competição nacional em 2018, 2020 e 2021.\nMas o que explica tamanha imponência do Corinthians no futebol feminino?\n1 de 5 Jog... [3505 chars]',
          url: 'https://ge.globo.com/futebol/times/corinthians/noticia/2022/09/25/profissionalizacao-e-investimento-ate-em-redes-sociais-como-o-corinthians-virou-potencia-no-futebol-feminino.ghtml',
          image: 'https://s2.glbimg.com/M2fcnim2R2UImHmBCqWgyUMgBrA=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/s/x/P2rPHURQGsYoWhBbB1FA/rib1071-3.jpg',
          publishedAt: '2022-09-25T10:36:01Z',
          source: {
              name: 'Globo',
              url: 'https://ge.globo.com'
          }
        },
        {
          tittle: 'Profissionalização e investimento até em redes sociais: como o Corinthians virou potência no futebol feminino',
          description: 'Timão amplia hegemonia ao conquistar o quarto título (terceiro seguido) do Brasileirão',
          content: 'É a 12ª conquista de relevância (estadual, nacional ou continental) das Brabas do Timão — elas também levantaram o troféu da competição nacional em 2018, 2020 e 2021.\nMas o que explica tamanha imponência do Corinthians no futebol feminino?\n1 de 5 Jog... [3505 chars]',
          url: 'https://ge.globo.com/futebol/times/corinthians/noticia/2022/09/25/profissionalizacao-e-investimento-ate-em-redes-sociais-como-o-corinthians-virou-potencia-no-futebol-feminino.ghtml',
          image: 'https://s2.glbimg.com/M2fcnim2R2UImHmBCqWgyUMgBrA=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/s/x/P2rPHURQGsYoWhBbB1FA/rib1071-3.jpg',
          publishedAt: '2022-09-25T10:36:01Z',
          source: {
              name: 'Globo',
              url: 'https://ge.globo.com'
          }
        },
        {
          tittle: 'Profissionalização e investimento até em redes sociais: como o Corinthians virou potência no futebol feminino',
          description: 'Timão amplia hegemonia ao conquistar o quarto título (terceiro seguido) do Brasileirão',
          content: 'É a 12ª conquista de relevância (estadual, nacional ou continental) das Brabas do Timão — elas também levantaram o troféu da competição nacional em 2018, 2020 e 2021.\nMas o que explica tamanha imponência do Corinthians no futebol feminino?\n1 de 5 Jog... [3505 chars]',
          url: 'https://ge.globo.com/futebol/times/corinthians/noticia/2022/09/25/profissionalizacao-e-investimento-ate-em-redes-sociais-como-o-corinthians-virou-potencia-no-futebol-feminino.ghtml',
          image: 'https://s2.glbimg.com/M2fcnim2R2UImHmBCqWgyUMgBrA=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/s/x/P2rPHURQGsYoWhBbB1FA/rib1071-3.jpg',
          publishedAt: '2022-09-25T10:36:01Z',
          source: {
              name: 'Globo',
              url: 'https://ge.globo.com'
          }
        },
        {
          tittle: 'Profissionalização e investimento até em redes sociais: como o Corinthians virou potência no futebol feminino',
          description: 'Timão amplia hegemonia ao conquistar o quarto título (terceiro seguido) do Brasileirão',
          content: 'É a 12ª conquista de relevância (estadual, nacional ou continental) das Brabas do Timão — elas também levantaram o troféu da competição nacional em 2018, 2020 e 2021.\nMas o que explica tamanha imponência do Corinthians no futebol feminino?\n1 de 5 Jog... [3505 chars]',
          url: 'https://ge.globo.com/futebol/times/corinthians/noticia/2022/09/25/profissionalizacao-e-investimento-ate-em-redes-sociais-como-o-corinthians-virou-potencia-no-futebol-feminino.ghtml',
          image: 'https://s2.glbimg.com/M2fcnim2R2UImHmBCqWgyUMgBrA=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/s/x/P2rPHURQGsYoWhBbB1FA/rib1071-3.jpg',
          publishedAt: '2022-09-25T10:36:01Z',
          source: {
              name: 'Globo',
              url: 'https://ge.globo.com'
          }
        }
      ]
    }

  newsArray: NewsInterface[] = [];

  constructor(private news: NoticiasService) { }

  ngOnInit(): void {
    this.news.list()

    .subscribe( (response) => {
      return this.newsArray = response;
    });
  }

  

}