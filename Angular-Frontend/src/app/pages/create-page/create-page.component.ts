import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendCallService } from 'src/app/services/backend-call.service';
import { Game } from 'src/types/Game.type';
import { Score } from 'src/types/Score.type';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss'],
})
export class CreatePageComponent implements OnInit {
  constructor(private backend: BackendCallService, private router: Router) {}

  loading: boolean = false;
  bigLoading: boolean = false;
  possibleGames: Game[] = [];

  ngOnInit(): void {}

  async handleGameSearch(newGame: Game) {
    this.loading = true;
    await this.backend.createGame(newGame).subscribe((data) => {
      this.possibleGames = data;
      this.loading = false;
    });
  }

  resetCreate(): void {
    this.possibleGames = [];
  }

  async addGameToDb(game: Game): Promise<void> {
    this.bigLoading = true;
    //delay because UI/UX is dumb
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    await this.backend.addGameToDb(game).subscribe((data) => {
      this.bigLoading = false;
      this.router.navigate(['']);
    });
  }
}
