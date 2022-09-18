import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {
  local: string;
  iconName: string;
  bootstrapWeatherIcon: string;

  windP: number;
  waterP: number;
  rainP: number;

  temperatureStatus: string;
  degrees: number;

  constructor() { 
    this.local = "Belo Horizonte";
    this.iconName = "cloud-sun";
    this.bootstrapWeatherIcon = "bootstrap-icons.svg#" + this.iconName;

    this.windP = 10;
    this.waterP = 39;
    this.rainP = 0;

    this.temperatureStatus = "Parcialmente nublado";
    this.degrees = 25;
  }


  ngOnInit(): void {
  }

}
