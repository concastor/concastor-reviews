import type { Score } from './Score.type';
import { OutputBlockData } from '@editorjs/editorjs';

export type Game = {
  title: string;
  genre: any[];
  pic_id: string;
  review: Array<OutputBlockData>;
  score: Score;
  igdb_id: number;
};
