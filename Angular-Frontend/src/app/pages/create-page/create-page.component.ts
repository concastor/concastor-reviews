import { Component, OnInit } from '@angular/core';
import { BackendCallService } from 'src/app/services/backend-call.service';
import { Game } from 'src/types/Game.type';
import { Score } from 'src/types/Score.type';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss'],
})
export class CreatePageComponent implements OnInit {
  constructor(private backend: BackendCallService) {}

  loading: boolean = false;
  possibleGames: Game[] = [];

  ngOnInit(): void {}

  async handleGameSearch(newGame: Game): Promise<void> {
    this.loading = true;
    await this.backend.createGame(newGame).subscribe((data) => {
      this.possibleGames = data;
      console.log('data', this.possibleGames.length);
      this.loading = false;
    });
  }
}
