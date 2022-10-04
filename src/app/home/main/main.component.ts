import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  local: string;
  iconName: string;
  bootstrapWeatherIcon: string;

  windP: number;
  waterP: number;
  rainP: number;

  temperatureStatus: string;
  degrees: number;

  musicName: string;
  singer: string;
  statusIcon: string;
  statusOfPlayer: string;


  constructor() { 

    // Weather:
      this.local = "Belo Horizonte";
      this.iconName = "cloud-sun";
      this.bootstrapWeatherIcon = "bootstrap-icons.svg#" + this.iconName;

      this.windP = 10;
      this.waterP = 39;
      this.rainP = 0;

      this.temperatureStatus = "Parcialmente nublado";
      this.degrees = 25;

    // Music:
      this.musicName = "Physical";
      this.singer = "Dua Lipa";
      this.statusIcon = "play-circle-fill"
      this.statusOfPlayer = "bootstrap-icons.svg#" + this.iconName;

    // Quote:
      
  }
  
  ngOnInit(): void {
  }

}
