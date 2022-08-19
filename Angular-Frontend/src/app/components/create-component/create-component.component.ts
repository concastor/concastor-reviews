import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OutputBlockData } from '@editorjs/editorjs';
import { Game } from 'src/types/Game.type';
import { Score } from 'src/types/Score.type';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss'],
})
export class CreateComponentComponent implements OnInit {
  @Output() gameCreated = new EventEmitter<Game>();

  constructor() {}
  title: string;
  review: Array<OutputBlockData>;
  score: Score;

  ngOnInit(): void {}

  updateScore(newScore: Score): void {
    this.score = newScore;
  }

  updateReview(newReview: Array<OutputBlockData>): void {
    this.review = newReview;
  }

  handleSubmit(): void {
    const newGame: Game = {
      title: this.title,
      genre: [],
      pic_id: '',
      review: this.review,
      score: this.score,
      igdb_id: 0,
    };

    this.gameCreated.emit(newGame);
  }
}
