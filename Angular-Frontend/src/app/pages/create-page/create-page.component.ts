import { Component, OnInit } from '@angular/core';
import { Score } from 'src/types/Score.type';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss'],
})
export class CreatePageComponent implements OnInit {
  constructor() {}

  title: String;
  genre: string[] = [];
  review: string;
  score: Score;

  ngOnInit(): void {}

  updateScore(newScore: Score): void {
    this.score = newScore;
  }
}
