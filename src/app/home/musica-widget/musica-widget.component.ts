import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musica-widget',
  templateUrl: './musica-widget.component.html',
  styleUrls: ['./musica-widget.component.scss']
})
export class MusicaWidgetComponent implements OnInit {
  musicName: string;
  singer: string;
  iconName: string;
  statusOfPlayer: string;

  constructor() {
    this.musicName = "Physical";
    this.singer = "Dua Lipa";
    this.iconName = "play-circle-fill"
    this.statusOfPlayer = "bootstrap-icons.svg#" + this.iconName;
  }

  ngOnInit(): void {
  }

}
