import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { Game } from 'src/types/Game.type';

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
  styleUrls: ['./game-grid.component.scss'],
})
export class GameGridComponent implements OnInit {
  constructor() {}

  @Input() displayGames: Game[] = [];
  @Input() limit: number;
  @Input() scoreFilter: number = 0;

  filteredGames: Game[] = [];

  ngOnChanges(changes: SimpleChange) {
    console.log('filters', this.scoreFilter);
    this.filteredGames = this.displayGames.filter(
      (game) => game.score.overall > this.scoreFilter
    );
  }

  ngOnInit(): void {}
}
