import type { Score } from './Score.type';

export type Game = {
  title: string;
  genre: any[];
  pic_id: string;
  review: object;
  score: Score;
  igdb_id: number;
};
