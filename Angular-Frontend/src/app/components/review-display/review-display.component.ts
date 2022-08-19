import { Component, Input, OnInit } from '@angular/core';
import { OutputBlockData } from '@editorjs/editorjs';

@Component({
  selector: 'app-review-display',
  templateUrl: './review-display.component.html',
  styleUrls: ['./review-display.component.scss'],
})
export class ReviewDisplayComponent implements OnInit {
  constructor() {}

  @Input() review: Array<OutputBlockData>;

  ngOnInit(): void {}
}
