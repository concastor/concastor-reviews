import type { Score } from "./Score.type"

export type Game = {
	title: string
	genre: any[]
	picLink: string
	review: string
	score: Score
	igdb_id: number
}
