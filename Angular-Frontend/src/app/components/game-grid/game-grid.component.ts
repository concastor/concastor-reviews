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
  @Input() sortMethod: string = 'Most recent';
  filteredGames: Game[] = [];

  ngOnChanges(changes: any) {
    if (changes?.scoreFilter) {
      this.filteredGames = this.displayGames.filter(
        (game) => game.score.overall > changes.scoreFilter.currentValue
      );
    } else {
      this.filteredGames = this.displayGames;
    }

    if (changes?.sortMethod) {
      this.sortGames(changes.sortMethod.currentValue);
    }
  }

  ngOnInit(): void {}

  sortGames(sortMethod: string): void {
    switch (sortMethod) {
      case 'Most recent':
        this.filteredGames = this.displayGames;
        break;
      case 'Oldest':
        const temp = this.displayGames;
        this.filteredGames = temp.reverse();
    }
  }
}
