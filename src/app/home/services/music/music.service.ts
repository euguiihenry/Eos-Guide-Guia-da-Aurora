import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }
  /*
  const endpoint = "https://api.spotify.com/v1/recommendations";
  const artists = '6sFIWsNpZYqfjUpaCgueju';
  const danceability = encodeURIComponent('0.9');

  //@ts-ignore
  fetch(`${endpoint}?seed_artists=${artists}&target_danceability=${danceability}`, {
    method: "GET",
    headers: {
        Authorization: `Bearer ${userAccessToken}`
    }
  })
  .then(response => response.json())
  .then(({tracks}) => {
    tracks.forEach(item => {
      console.log(`${item.name} by ${item.artists[0].name}`);
    })
  })
  */
}
