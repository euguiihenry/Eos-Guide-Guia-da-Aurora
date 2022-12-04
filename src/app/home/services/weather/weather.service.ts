import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { weatherInterface } from './models/weather-info-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  private weatherInfo: weatherInterface;
  private weatherAPI: string = environment.openWeather //process.env['OPEN_WEATHER'];

  constructor(private http: HttpClient) {
    this.weatherInfo = {} as weatherInterface;
  }

  

  public getLocation() {
    return new Promise ((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    })
  }

  public async getCoords() {
    let answer;

    answer = await this.getLocation().then((position: any) => {
      return position.coords;
    });

    return answer;
  }

  public getWeatherStatus = (coords: any) => {  
    let lat = coords.latitude;
    let lon = coords.longitude;

    //let lat, lon = undefined;

    let connection = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pt_br&appid=${this.weatherAPI}&units=metric`

    return this.http.get<weatherInterface>(connection);
  }
}