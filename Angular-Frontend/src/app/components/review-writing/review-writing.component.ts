import { Component, OnInit } from '@angular/core';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';

// import List from '@editorjs/list';
import { editorjsConfig } from './review-writing.config';

@Component({
  selector: 'app-review-writing',
  templateUrl: './review-writing.component.html',
  styleUrls: ['./review-writing.component.scss'],
})
export class ReviewWritingComponent implements OnInit {
  constructor() {}

  editorData: any;
  editor: EditorJS;
  editorObserver: MutationObserver;

  ngOnInit(): void {
    this.setUpEditor();
  }

  saveData(): void {
    this.editor
      .save()
      .then((outputData) => {
        console.log('Article data: ', outputData);
      })
      .catch((error) => {
        console.log('Saving failed: ', error);
      });
  }

  async setUpEditor(): Promise<void> {
    this.editor = new EditorJS(editorjsConfig);

    try {
      await this.editor.isReady;
      console.log('Editor.js is ready to work!');
      /** Do anything you need after editor initialization */
    } catch (reason) {
      console.log(`Editor.js initialization failed because of ${reason}`);
    }
  }
}
