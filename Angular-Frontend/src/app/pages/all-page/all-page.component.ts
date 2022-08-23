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

  scoreFilter: number = 0;
  sortMethod: string = 'Most recent';

  scores: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  sorts: string[] = [
    'Most recent',
    'Oldest',
    'Highest scoring',
    'Lowest scoring',
  ];

  ngOnInit(): void {
    this.backend.getAllGames().subscribe((data) => {
      this.games = data;
    });
  }

  changeSortMethod(data: any): void {
    console.log('data', data);
  }
}
