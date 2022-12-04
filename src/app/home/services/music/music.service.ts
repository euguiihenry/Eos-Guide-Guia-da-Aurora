import { HttpClient, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private readonly code = environment.musicAPI;
  private readonly URL = 'https://spotify-scraper.p.rapidapi.com/v1/chart/tracks/viral'

  constructor(private http: HttpClient) { }

  private options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': this.code.toString(),
      'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
    }
  };

  saveViralTracks(now: Date) {
    this.http.get<any>(this.URL, this.options)
    .subscribe((data: any)=> {

      localStorage.setItem('viralMusic', JSON.stringify(data));
      let info: any = []
      data.tracks.forEach((element: any) => {
        info.push(element);
      });

      info.push(now.getTime());

      localStorage.setItem('viralMusic', JSON.stringify(info));
  })
}

  getViralTracks() {
    let result;
    let now = new Date();
    let sumTime = 86400000;

    result = JSON.parse(localStorage.getItem('viralMusic') || '{}');
    
    if(Object.keys(result).length !== 0) {
        if(result[100].value >= (now.getTime()+sumTime)) {
          localStorage.removeItem('weatherInfo');
          this.saveViralTracks(now);

      } else {
        this.saveViralTracks(now);
      }
    }
  }

  getSavedMusic() {
    let result = JSON.parse(localStorage.getItem('viralMusic') || '{}');

    let random = Math.floor(Math.random() * 100);

    let trackArray = result[random];

    let artists = '';
    let x = 1;

    trackArray.artists.forEach((e: any) => {
      if(x == 1) {
        artists += e.name;

      } else {
        artists += ", " + e.name;
      }

      x++;
    });

    let track = {
      name: trackArray.name,
      artists: artists,
      image: trackArray.album.cover[0].url,
      link: trackArray.shareUrl
    }

    return track;
  }
}
