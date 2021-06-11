import { writable } from "svelte/store";
import type {Game} from "../types/Game.type"

//demo data
let PersonaGame : Game = {
    title : "Persona 4 Golden",
    genre : ["turn-based", "action"],
    picLink : "images/persona4.jpg"
}

let OuterWilds : Game = {
    title : "Outer Wilds",
    genre : ["puzzle", "exploration"],
    picLink : "images/outerWilds.jpg"
}

let subnautica : Game = {
    title : "Subnautica",
    genre : ['survival'],
    picLink : "images/subnautica.png"
}
let darkSouls : Game = {
    title : "Dark Souls",
    genre : ['Action-Rpg'],
    picLink : "images/darksouls.jpg"
}

let games : Game[] = [
    PersonaGame, OuterWilds, subnautica, darkSouls,
    PersonaGame, darkSouls, subnautica, OuterWilds
]

//creates store
const GameStore = writable(games)



//reveals store to other components
export default GameStore