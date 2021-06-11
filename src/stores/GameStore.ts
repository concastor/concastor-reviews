import { writable } from "svelte/store";
import type {Game} from "../types/Game.type"

//demo data
let demoGame : Game = {
    title : "Persona 4 Golden",
    genre : ["turn-based", "action"],
    picLink : "images/persona4.jpg"
}

let games : Game[] = [
    demoGame, demoGame, demoGame, demoGame,
    demoGame, demoGame, demoGame, demoGame
]

//creates store
const GameStore = writable(games)



//reveals store to other components
export default GameStore