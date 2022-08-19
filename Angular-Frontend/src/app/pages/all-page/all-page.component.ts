import { Component, OnInit } from '@angular/core';
import { BackendCallService } from 'src/app/services/backend-call.service';
import { Game } from 'src/types/Game.type';

@Component({
  selector: 'app-all-page',
  templateUrl: './all-page.component.html',
  styleUrls: ['./all-page.component.scss'],
})
export class AllPageComponent implements OnInit {
  constructor(private backend: BackendCallService) {}

  games: Game[] = [];

  ngOnInit(): void {
    this.backend.getAllGames().subscribe((data) => {
      this.games = data;
    });
  }
}
