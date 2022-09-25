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
    public noticiasTeste: any[] = [
        {
          title: "Profissionalização e investimento até em redes sociais: como o Corinthians virou potência no futebol feminino",
          description: 'Timão amplia hegemonia ao conquistar o quarto título (terceiro seguido) do Brasileirão',
          content: 'É a 12ª conquista de relevância (estadual, nacional ou continental) das Brabas do Timão — elas também levantaram o troféu da competição nacional em 2018, 2020 e 2021.\nMas o que explica tamanha imponência do Corinthians no futebol feminino?\n1 de 5 Jog...',
          url: 'https://ge.globo.com/futebol/times/corinthians/noticia/2022/09/25/profissionalizacao-e-investimento-ate-em-redes-sociais-como-o-corinthians-virou-potencia-no-futebol-feminino.ghtml',
          image: 'https://s2.glbimg.com/M2fcnim2R2UImHmBCqWgyUMgBrA=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/s/x/P2rPHURQGsYoWhBbB1FA/rib1071-3.jpg',
          publishedAt: '2022-09-25T10:36:01Z',
          source: {
              name: 'Globo',
              url: 'https://ge.globo.com'
          }
        },
        {
          title: 'O carrinho encolheu: cariocas contam o que mudaram nos hábitos de consumo na hora das compras',
          description: 'Os brasileiros estão consumindo menos e pagando mais nos supermercados do Rio de Janeiro, é cada vez mais raro ver carrinhos de compras cheios, mesmo nos fins..."',
          content: 'Rodinei Sampaio, sai do Anadarí para fazer compras em Cascadura para aproveitar promoção Foto: Fabio Rossi / Agência O Globo\nMartha Imenes Tamanho do texto\nOs brasileiros estão consumindo menos e pagando mais nos supermercados do Rio de Janeiro, é ca...',
          url: 'https://extra.globo.com/economia-e-financas/o-carrinho-encolheu-cariocas-contam-que-mudaram-nos-habitos-de-consumo-na-hora-das-compras-25575779.html',
          image: 'https://extra.globo.com/economia-e-financas/25576929-d88-6e6/w976h550-PROP/100590060.jpg',
          publishedAt: '2022-09-25T09:00:00Z',
          source: {
              name: 'Extra',
              url: 'https://extra.globo.com'
          }
        },
        {
          title: "Aline Borges celebra auge da carreira com 'Pantanal' e relembra infância pobre: 'Andei de elevador pela primeira vez aos 9 anos'",
          description: 'Antes de falar sobre qualquer assunto nesta entrevista, Aline Borges quis registrar um agradecimento público aos pais, Maria Helena, de 80 anos, e Mariano...',
          content: 'Gabriela Medeiros Tamanho do texto\nAntes de falar sobre qualquer assunto nesta entrevista, Aline Borges quis registrar um agradecimento público aos pais, Maria Helena, de 80 anos, e Mariano Borges, de 92, leitores assíduos do EXTRA: “Eu não seria nad...',
          url: 'https://extra.globo.com/tv-e-lazer/aline-borges-celebra-auge-da-carreira-com-pantanal-relembra-infancia-pobre-andei-de-elevador-pela-primeira-vez-aos-9-anos-25577354.html',
          image: 'https://extra.globo.com/incoming/25576750-b45-e00/w976h550-PROP/aline-borges.jpg',
          publishedAt: '2022-09-25T08:00:00Z',
          source: {
              name: 'Extra',
              url: 'https://extra.globo.com'
          }
        },
        {
          title: "Aliados de Putin expressam preocupação com 'excessos' de mobilização",
          description: "Aliados de Putin expressam preocupação com 'excessos' de mobilização",
          content: '1 de 3 O presidente russo Vladmir Putin durante reunião em 10 de setembro — Foto: Sputnik/Mikhail Klimentyev/Kremlin via Reuters\nOs dois parlamentares mais importantes da Rússia abordaram neste domingo (25) uma série de queixas sobre a campanha de mo...',
          url: 'https://g1.globo.com/mundo/ucrania-russia/noticia/2022/09/25/aliados-de-putin-expressam-preocupacao-com-excessos-de-mobilizacao.ghtml',
          image: 'https://s2.glbimg.com/6f-1nbb0UEdcxOZmGpQYyXV6l-8=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/D/o/f0zxB9Q8WsFDoch8wRaw/2020-09-10t115240z-1203852726-rc2nvi933mlu-rtrmadp-3-russia-putin.jpg',
          publishedAt: '2022-09-25T08:59:10Z',
          source: {
              name: 'Globo',
              url: 'https://g1.globo.com'
          }
        }
    ];

  constructor(private news: NoticiasService) {
    /* this.noticiasTeste[] = [
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
          tittle: 'O carrinho encolheu: cariocas contam o que mudaram nos hábitos de consumo na hora das compras',
          description: 'Os brasileiros estão consumindo menos e pagando mais nos supermercados do Rio de Janeiro, é cada vez mais raro ver carrinhos de compras cheios, mesmo nos fins..."',
          content: 'Rodinei Sampaio, sai do Anadarí para fazer compras em Cascadura para aproveitar promoção Foto: Fabio Rossi / Agência O Globo\nMartha Imenes Tamanho do texto\nOs brasileiros estão consumindo menos e pagando mais nos supermercados do Rio de Janeiro, é ca...',
          url: 'https://extra.globo.com/economia-e-financas/o-carrinho-encolheu-cariocas-contam-que-mudaram-nos-habitos-de-consumo-na-hora-das-compras-25575779.html',
          image: 'https://extra.globo.com/economia-e-financas/25576929-d88-6e6/w976h550-PROP/100590060.jpg',
          publishedAt: '2022-09-25T09:00:00Z',
          source: {
              name: 'Extra',
              url: 'https://extra.globo.com'
          }
        },
        {
          tittle: "Aline Borges celebra auge da carreira com 'Pantanal' e relembra infância pobre: 'Andei de elevador pela primeira vez aos 9 anos'",
          description: 'Antes de falar sobre qualquer assunto nesta entrevista, Aline Borges quis registrar um agradecimento público aos pais, Maria Helena, de 80 anos, e Mariano...',
          content: 'Gabriela Medeiros Tamanho do texto\nAntes de falar sobre qualquer assunto nesta entrevista, Aline Borges quis registrar um agradecimento público aos pais, Maria Helena, de 80 anos, e Mariano Borges, de 92, leitores assíduos do EXTRA: “Eu não seria nad...',
          url: 'https://extra.globo.com/tv-e-lazer/aline-borges-celebra-auge-da-carreira-com-pantanal-relembra-infancia-pobre-andei-de-elevador-pela-primeira-vez-aos-9-anos-25577354.html',
          image: 'https://extra.globo.com/incoming/25576750-b45-e00/w976h550-PROP/aline-borges.jpg',
          publishedAt: '2022-09-25T08:00:00Z',
          source: {
              name: 'Extra',
              url: 'https://extra.globo.com'
          }
        },
        {
          tittle: "Aliados de Putin expressam preocupação com 'excessos' de mobilização",
          description: "Aliados de Putin expressam preocupação com 'excessos' de mobilização",
          content: '1 de 3 O presidente russo Vladmir Putin durante reunião em 10 de setembro — Foto: Sputnik/Mikhail Klimentyev/Kremlin via Reuters\nOs dois parlamentares mais importantes da Rússia abordaram neste domingo (25) uma série de queixas sobre a campanha de mo...',
          url: 'https://g1.globo.com/mundo/ucrania-russia/noticia/2022/09/25/aliados-de-putin-expressam-preocupacao-com-excessos-de-mobilizacao.ghtml',
          image: 'https://s2.glbimg.com/6f-1nbb0UEdcxOZmGpQYyXV6l-8=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/D/o/f0zxB9Q8WsFDoch8wRaw/2020-09-10t115240z-1203852726-rc2nvi933mlu-rtrmadp-3-russia-putin.jpg',
          publishedAt: '2022-09-25T08:59:10Z',
          source: {
              name: 'Globo',
              url: 'https://g1.globo.com'
          }
        }
      ]
    ] */
  }

  ngOnInit(): void {
    this.news.list()

    .subscribe( (response) => {
      return this.noticiasTeste = response;
    });
  }

  

}