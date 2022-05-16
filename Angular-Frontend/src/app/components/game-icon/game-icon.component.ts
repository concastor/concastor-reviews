import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/types/Game.type';

@Component({
  selector: 'app-game-icon',
  templateUrl: './game-icon.component.html',
  styleUrls: ['./game-icon.component.scss'],
})
export class GameIconComponent implements OnInit {
  constructor(private router: Router) {}

  private _game: Game;
  IMG_URL: string = '';

  get game(): Game {
    return this._game;
  }

  @Input() set game(value: Game) {
    this._game = value;
    this.IMG_URL = `https://images.igdb.com/igdb/image/upload/t_cover_big/${this.game.pic_id}.jpg`;
  }

  ngOnInit(): void {
    console.log('img url', this.game, this.IMG_URL);
  }

  selected(): void {
    this.router.navigate([`review/${this.game.title}`]);
  }
}
