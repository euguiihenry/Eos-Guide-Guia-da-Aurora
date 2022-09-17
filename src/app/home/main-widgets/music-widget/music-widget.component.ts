import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-widget',
  templateUrl: './music-widget.component.html',
  styleUrls: ['./music-widget.component.scss']
})
export class MusicWidgetComponent implements OnInit {
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
