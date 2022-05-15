import { Component, OnInit } from '@angular/core';
import { BackendCallService } from 'src/app/shared/backend-call.service';
import { Game } from 'src/types/Game.type';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private backend: BackendCallService) {}

  games: Game[] = [];
  recentGame: Game = <Game>{};

  ngOnInit(): void {
    this.backend.getAllGames().subscribe((data) => {
      this.games = data;
      this.recentGame = data[0];

      console.log('game data', this.games, this.recentGame);
    });
  }
}
