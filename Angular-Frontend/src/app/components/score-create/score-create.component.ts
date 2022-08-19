import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Score } from 'src/types/Score.type';

@Component({
  selector: 'app-score-create',
  templateUrl: './score-create.component.html',
  styleUrls: ['./score-create.component.scss'],
})
export class ScoreCreateComponent implements OnInit {
  constructor() {}

  @Output() scoreChange = new EventEmitter<Score>();

  ngOnInit(): void {}

  score: Score;
  enjoyment: number = 0;
  story: number = 0;
  gameFeel: number = 0;
  world: number = 0;
  overall: number = 0;

  calculateOverall(): void {
    this.overall = Math.ceil(
      (this.story + this.gameFeel + this.world + this.enjoyment) / 4
    );
    this.scoreChange.emit(this.createScoreObj());
  }

  createScoreObj(): Score {
    return {
      enjoyment: this.enjoyment,
      story: this.story,
      gameFeel: this.gameFeel,
      world: this.world,
      overall: this.overall,
    };
  }
}
