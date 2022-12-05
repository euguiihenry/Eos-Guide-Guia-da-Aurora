import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/news/noticias.service';
import { NewsInterface } from '../services/news/models/proto-news-interface';
import { NewsArticles } from '../services/news/models/final-news-interface';
import { weatherFinal } from '../services/weather/models/weather-final-interface';
import { WeatherService } from '../services/weather/weather.service';
import { MusicService } from '../services/music/music.service';
import { weatherInterface } from '../services/weather/models/weather-info-interface';


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

  quoteTitle: string;
  quoteParagraph: string;
  quoteAuthor: string;

  // Alimentação:
  foodTitle: string = "Alimentação";
  foodSubtitle: string = "Bolo de Chocolate";
  foodImg: string = "https://oquetempracomer.com.br/wp-content/uploads/elementor/thumbs/Receita-de-bolo-de-chocolate-psyp63h4pnejlosdlnehg7fhumtdjdjtqr14drf7vg.jpg";
  foodDescription: string = "Que tal um excelente bolo de chocolate para adoçar o dia?";
  foodLink: string = "https://receitas.globo.com/bolo-levissimo-de-chocolate-540fd0054d388566480000f9.ghtml"
  
  // Cinema:
  entertainmentTitle: string = "Cinema";
  entertainmentSubtitle: string = "A Família Addams 2"
  cinemaImg: string = "https://cinevisao.pt/wp-content/uploads/2020/10/Data-de-estreia-do-filme-A-Familia-Addams-2.jpg";
  entertainmentDescription: string = "Pertubados que seus filhos estão crescendo rápido, Morticia (Charlize Theron) e Gomez (Oscar Isaac), e fazendo coisas que não faziam, eles descidem...";
  cinemaLink: string = "https://www.adorocinema.com/filmes/filme-278122/";

  // Lazer:
  leisureTitle: string = "Lazer";
  leisureSubtitle: string = "Corrida";
  lazerImg: string = "https://static.tuasaude.com/media/article/em/la/beneficios-da-corrida_33063.webp";
  leisureDescription: string = "O clima propicia uma leve caminhada e até mesmo, caso seja de sua vontade, uma corrida leve.";
  leisureLink: string = "https://www.tuasaude.com/beneficios-da-corrida/";

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
      if(Object.keys(JSON.parse(localStorage.getItem('musicError') || '{}')).length !== 0) {
        alert("Error ao acessar o acervo de música! Provavelmente a API chegou ao seu limite de acessos!");
        this.musicImg = "https://upload.wikimedia.org/wikipedia/en/f/f5/Dua_Lipa_-_Future_Nostalgia_%28Official_Album_Cover%29.png";
        this.musicLink = "https://open.spotify.com/track/3AzjcOeAmA57TIOr9zF1ZW?si=9cf4d7fd9cca42b5";
        localStorage.setItem('musicError', 'true');

      } else {
        let answer = localStorage.getItem('musicError');

        if(answer != 'true') {
          alert("Error ao acessar o acervo de música! Provavelmente a API chegou ao seu limite de acessos!");
          this.musicImg = "https://upload.wikimedia.org/wikipedia/en/f/f5/Dua_Lipa_-_Future_Nostalgia_%28Official_Album_Cover%29.png";
          this.musicLink = "https://open.spotify.com/track/3AzjcOeAmA57TIOr9zF1ZW?si=9cf4d7fd9cca42b5";
          localStorage.setItem('musicError', 'true');

        } else {
          localStorage.setItem('musicError', 'true');
          this.musicImg = "https://upload.wikimedia.org/wikipedia/en/f/f5/Dua_Lipa_-_Future_Nostalgia_%28Official_Album_Cover%29.png";
          this.musicLink = "https://open.spotify.com/track/3AzjcOeAmA57TIOr9zF1ZW?si=9cf4d7fd9cca42b5";
        }
      }
    }
  }
  
  ngOnInit(): void {
    this.getNewsDB();
    this.setLazerHome();
    this.setCinemaHome();
    this.setComidaHome();
    this.getNewsDB();
    this.getInfo();
    this.showMusic();

  }

  public setLazerHome(){
    if (localStorage.getItem('lazer')) {
      const lazer = JSON.parse(localStorage.getItem('lazer') || '{}');

      if(lazer.caminhar === true || lazer.esportes === true){
        this.leisureTitle = "Esportes"
        this.leisureSubtitle = "Caminhada";
        this.leisureDescription = "Além da melhora do condicionamento físico, as vantagens de caminhar para a saúde do corpo e da mente são muitas, e comprovadas...";
        this.lazerImg = "https://boaforma.abril.com.br/wp-content/uploads/sites/2/2018/04/thinkstockphotos-860246654.jpg?quality=90&strip=info&resize=850,567"
        this.leisureLink = "https://www.tjdft.jus.br/informacoes/programas-projetos-e-acoes/pro-vida/dicas-de-saude/pilulas-de-saude/11-beneficios-da-caminhada-para-o-corpo-e-a-mente";
      
      }else if(lazer.ler === true || lazer.cinema === true){

        this.leisureTitle = "Livros & Cinema"
        this.leisureSubtitle = "Telefone Preto";
        this.leisureDescription = "Como escapar ao ser sequestrado por um serial killer e aprisionado em um local cuja única companhia é um estranho telefone preto?";
        this.lazerImg = "https://literaturapolicial.com/wp-content/uploads/2022/07/joepb.jpg"
        this.leisureLink = "https://www.mundodasresenhas.com.br/o-telefone-preto-outras-historias-joe-hill/";
      
      }else if(lazer.bar=== true){
        this.leisureTitle = "Bares & Restaurantes"
        this.leisureSubtitle = "6 bares mais famosos do Brasil";
        this.leisureDescription = "Os bares são um dos locais de entretenimento e lazer mais populares do mundo e do Brasil. Conheça os mais famosos do Brasil";
        this.lazerImg = "https://freesider.com.br/wp-content/uploads/2017/01/billiards-1677103_640.jpg"
        this.leisureLink = "https://freesider.com.br/viajar/descubra-os-7-bares-mais-famosos-do-brasil/";
      
      }else if( lazer.turismo === true || lazer.viajar === true){
        this.leisureTitle = "Turismo & Viagem"
        this.leisureSubtitle = "Floresta Negra: Alemanha";
        this.leisureDescription = "Esse canto da Alemanha é um dos lugares mais belos de todo país e um dos mais misteriosos também.";
        this.lazerImg = "https://www.vounajanela.com/wp-content/uploads/2016/03/capa17-1017x580.jpg"
        this.leisureLink = "https://www.vounajanela.com/alemanha/floresta-negra-na-alemanha/";
      
      }else if(lazer.pescaria){
        this.leisureTitle = "Pescaria"
        this.leisureSubtitle = "6 lugares no Brasil para uma boa pescaria";
        this.leisureDescription = "Agua é algo abundante no Brasil, o que torna o ambiente ideal para boas pescarias. Conheça os melhores lugares.";
        this.lazerImg = "https://www.reidapesca.com.br/produtos/original/night-73326.png"
        this.leisureLink = "https://blog.viajarfazbem.com/lugares-para-pescar/";
      
      }else if(lazer.piquinique === true){
        this.leisureTitle = "Piquinique"
        this.leisureSubtitle = "Como organizar um piquenique?";
        this.leisureDescription = "Em dias ensolarados, nada melhor que um delicioso piquinique no parque ou em um campo com a família e amigos. Saiba como organizar.";
        this.lazerImg = "https://cultura.uol.com.br/upload/tvcultura/turismo/20220704171314_pexels-kampus-production-7669136.jpg"
        this.leisureLink = "https://www.deliway.com.br/blog/organizar-piquenique";

      }else if (lazer.fotografia === true){
        this.leisureTitle = "Fotografia"
        this.leisureSubtitle = "Dicas de edição de fotos";
        this.leisureDescription = "Corte, brilho, contraste, saturação... quantas vezes você já testou esses controles para ver como seria o resultado em uma imagem?";
        this.lazerImg =  "https://images.pexels.com/photos/2174983/pexels-photo-2174983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        this.leisureLink = "https://www.canva.com/pt_br/aprenda/fotografia/";
        
        
      }else{
        console.log('padrao Correr');
      }
    }
  }

  public setCinemaHome(){
    if (localStorage.getItem('cinema')){
      const cinema = JSON.parse(localStorage.getItem('cinema') || '{}');


      if(cinema.investigacao===true || cinema.thriller === true || cinema.horror === true){
        this.entertainmentTitle = "Filme";
        this.entertainmentSubtitle = "O Corvo (2012)"
        this.cinemaImg = "https://assets.mubicdn.net/images/film/94974/image-w1280.jpg?1445921104";
        this.entertainmentDescription  = "O escritor Edgar Alan Poe (John Cusack) está na caça de um assassino serial que imita os crimes de seus contos.";
        this.cinemaLink = "https://www.adorocinema.com/filmes/filme-170893/";
      }else if(cinema.acao === true || cinema.scifi){
        
        this.entertainmentTitle = "Filme";
        this.entertainmentSubtitle = "Circulo de Fogo"
        this.cinemaImg = "https://pipocasclub.com.br/wp-content/uploads/2020/08/circulodefogo1.jpg";
        this.entertainmentDescription  = "Criaturas monstruosas conhecidas como Kaiju começam a emergir do mar. Para combatê-los, a humanidade desenvolve uma série de robôs gigantescos, os Jaegers.";
        this.cinemaLink = "https://www.adorocinema.com/filmes/filme-191289/";

      }else if(cinema.aventura  === true){
        this.entertainmentTitle = "Série & Animação";
        this.entertainmentSubtitle = "Demon Slayer: Kimetsu no Yaiba";
        this.cinemaImg = "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2022/02/legiao_zsK5cCXkQ176.jpg.webp";
        this.entertainmentDescription  = "Japão, era Taisho. Tanjiro, um bondoso jovem que ganha a vida vendendo carvão, descobre que sua família foi massacrada por um Oni. ";
        this.cinemaLink = "https://www.crunchyroll.com/pt-br/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba";

      }else if(cinema.drama === true){

        this.entertainmentTitle = "Série & Animação";
        this.entertainmentSubtitle = "ARCANE";
        this.cinemaImg = "https://sm.ign.com/t/ign_br/review/a/arcane-sea/arcane-season-1-review_2kfz.960.jpg";
        this.entertainmentDescription  = "Em meio ao conflito entre as cidades-gêmeas de Piltover e Zaun, duas irmãs lutam em lados opostos de uma guerra... ";
        this.cinemaLink = "https://www.netflix.com/title/81435684";


      }else if(cinema.biografia === true || cinema.guerra === true){
        this.entertainmentTitle = "Filme";
        this.entertainmentSubtitle = "Até o Último Homem";
        this.cinemaImg = "https://www.devotudoaocinema.com.br/content/uploads/2017/02/images_HAcksaw.jpg";
        this.entertainmentDescription  = "Durante a Segunda Guerra Mundial, o médico do exército Desmond T. Doss (Andrew Garfield) se recusa a pegar em uma arma e matar pessoas ";
        this.cinemaLink = "https://www.adorocinema.com/filmes/filme-208104/";

      }else if(cinema.comedia === true || cinema.romance === true || cinema.musical === true ){
        this.entertainmentTitle = "Filme";
        this.entertainmentSubtitle = "Mamma Mia!";
        this.cinemaImg = "https://www.oficialhostgeek.com.br/wp-content/uploads/2018/07/Mamma-Mia-1024x5221.jpg";
        this.entertainmentDescription  = "A jovem Sophie (Amanda Seyfried) está prestes a se casar e, sem saber quem é seu pai, envia convites para 3 ex-namorados de sua mãe...";
        this.cinemaLink = "https://www.adorocinema.com/filmes/filme-125562/";

      }else{
        console.log('padrao Wandinha');

      }

    }


  }

  public setComidaHome(){
    if(localStorage.getItem('comida')){
      const comida = JSON.parse(localStorage.getItem('comida') || '{}');

      if(comida.padrao===true){
        this.foodTitle = "Receita";
        this.foodSubtitle = "Hamburguer & Fritas";
        this.foodImg = "https://cdn.minhareceita.com.br/2020/08/hamburguer-angus-fatias-redondas-bacon-desktop.jpg";
        this.foodDescription = "Vamos olhar essa receita maravilhosa que cai bem com o clima ameno que está no ambiente externo.";
        this.foodLink = "https://www.minhareceita.com.br/receita/hamburguer-angus-com-fatias-redondas-de-bacon/"
      
      }else if(comida.pescatariana===true){
        this.foodTitle = "Receita";
        this.foodSubtitle = "Travessa de Pescado com Batatas";
        this.foodImg = "https://truffle-assets.imgix.net/01e3393e-travessa-de-pescado-com-batatas-l-thumb.jpg";
        this.foodDescription = "Prática e saborosa, essa receita de travessa de pescado com batatas é pedida perfeita para o almoço do fim de semana!";
        this.foodLink = "https://www.tastemade.com.br/videos/travessa-de-pescado-com-batatas/"
      }else if(comida.vegetariana===true){
        this.foodTitle = "Dicas";
        this.foodSubtitle = "15 receitas Vegetarianas";
        this.foodImg = "https://img.estadao.com.br/fotos/crop/960x540/resources/jpg/1/5/1453292457551.jpg";
        this.foodDescription = "Se você está fazendo uma alimentação vegetariana, sabe que nem sempre é fácil encontrar opções diversificadas.";
        this.foodLink = "https://www.receiteria.com.br/receitas-almoco-vegetariano/"
      }else if(comida.lactovegetariana===true){
        this.foodTitle = "Alimentação";
        this.foodSubtitle = "Strogonoff de Cogumelos";
        this.foodImg = "https://s2.glbimg.com/nu4thoDJ9oo2P4iJJrJbB2bMbHM=/0x0:6000x4000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/Z/S/LUvwJXR2AeMTu783KWAw/estrogonofe-de-cogumelos.jpg";
        this.foodDescription = "Estrogonofe é uma receita de origem russa que ganhou o mundo em diferentes versões. Uma delas é a de cogumelos.";
        this.foodLink = "https://www.tudogostoso.com.br/receita/310181-strogonoff-de-cogumelos.html"
      }else if(comida.ovovegetariana===true){
        this.foodTitle = "Mitos & Verdades";
        this.foodSubtitle = "Ovos: Mitos & Verdades";
        this.foodImg = "https://saude.abril.com.br/wp-content/uploads/2016/10/revista-estilo-beneficios-do-ovo.jpg";
        this.foodDescription = "Com certeza o ovo é um ingrediente presente na culinária de quase todas as famílias brasileiras. Conheça os mitos e verdades";
        this.foodLink = "https://www.hojeemdia.com.br/minas/cinco-mitos-e-verdades-sobre-o-ovo-na-alimentac-o-1.452977"
      }else if(comida.vegana===true){
        this.foodTitle = "Dicas & Receitas";
        this.foodSubtitle = "20 receitas de massas veganas sensacionais";
        this.foodImg = "https://vegorganico.com.br/wp-content/themes/yootheme/cache/20-receitas-de-massas-veganas-sensacionais-ef5b9b98.webp";
        this.foodDescription = "Ao se adaptar a uma dieta vegana, ficamos perdidos e sem ideia de como organizar essa nova rotina alimentar. Vejamos essas receitas de massas!";
        this.foodLink = "https://vegorganico.com.br/massas-veganas/"
      }else{
        console.log('padrao Bolo de Chocolate');

      }
    }

  }

}
