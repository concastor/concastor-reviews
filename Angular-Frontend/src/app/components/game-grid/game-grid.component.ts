import { Component, Input, OnInit } from '@angular/core';
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

  ngOnInit(): void {}
}
