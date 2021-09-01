import { writable } from "svelte/store"
import type { Game } from "../types/Game.type"
import { bs } from "../services/backendService"

let backendService = new bs()
let games: Game[] = []
let RecentGame: Game = null
//creates store
const GameStore = writable(games)
const RecentGameStore = writable(RecentGame)

const setupIntialLoad = async () => {
	// await InitStore()
	let games = await backendService.getAllGames()

	GameStore.set(games)
	RecentGameStore.set(games[0])
}

setupIntialLoad()

//reveals store to other components

export default GameStore
export { RecentGameStore }
