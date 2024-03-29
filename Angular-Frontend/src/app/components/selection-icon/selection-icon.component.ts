import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from 'src/types/Game.type';

@Component({
  selector: 'app-selection-icon',
  templateUrl: './selection-icon.component.html',
  styleUrls: ['./selection-icon.component.scss'],
})
export class SelectionIconComponent implements OnInit {
  constructor() {}

  @Output() gameSelected = new EventEmitter<Game>();

  private _game: Game;
  IMG_URL: string = '';

  get game(): Game {
    return this._game;
  }

  @Input() set game(value: Game) {
    this._game = value;
    this.IMG_URL = `https://images.igdb.com/igdb/image/upload/t_cover_small/${this.game.pic_id}.jpg`;
  }

  ngOnInit(): void {}

  selected(): void {
    this.gameSelected.emit(this.game);
  }
}
