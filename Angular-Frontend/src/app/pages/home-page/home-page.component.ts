import { Component, OnInit } from '@angular/core';
import { BackendCallService } from 'src/app/services/backend-call.service';
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
      this.recentGame = data[0];
      this.games = data;
      this.games.shift();
    });
  }
}
