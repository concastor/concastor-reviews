import type { Score } from "./Score.type";

export type Game = {
    title : string
    genre : string[]
    picLink : string
    review : string
    score : Score
}