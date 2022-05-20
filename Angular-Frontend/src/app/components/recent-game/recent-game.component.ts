import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/types/Game.type';

@Component({
  selector: 'app-recent-game',
  templateUrl: './recent-game.component.html',
  styleUrls: ['./recent-game.component.scss'],
})
export class RecentGameComponent implements OnInit {
  constructor(private router: Router) {}

  private _recentGame: Game;

  IMG_URL: string = '';

  get recentGame(): Game {
    return this._recentGame;
  }

  @Input() set recentGame(value: Game) {
    this._recentGame = value;
    this.IMG_URL = `https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${this._recentGame.pic_id}.jpg`;
  }

  ngOnInit(): void {}

  selected(): void {
    this.router.navigate([`review/${this.recentGame.title}`]);
  }
}
