import { Component, OnInit } from '@angular/core';
import EditorJS from '@editorjs/editorjs';
// import { editorjsConfig } from './review-writing.config';

@Component({
  selector: 'app-review-writing',
  templateUrl: './review-writing.component.html',
  styleUrls: ['./review-writing.component.scss'],
})
export class ReviewWritingComponent implements OnInit {
  constructor() {}
  editor: EditorJS;

  ngOnInit(): void {}

  async setUpEditor(): Promise<void> {
    this.editor = new EditorJS();
    // try {
    //   await this.editor.isReady;
    //   console.log('Editor.js is ready to work!');
    //   /** Do anything you need after editor initialization */
    // } catch (reason) {
    //   console.log(`Editor.js initialization failed because of ${reason}`);
    // }
  }
}
