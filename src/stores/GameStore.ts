import { writable } from "svelte/store";
import type {Game} from "../types/Game.type"


//demo data
let PersonaGame : Game = {
    title : "Persona 4 Golden",
    genre : ["turn-based", "action"],
    picLink : "images/persona4.jpg",
    review : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nunc at velit semper, a dapibus augue sodales. Donec at iaculis metus. Nulla vel purus sit amet felis iaculis condimentum ut a turpis. Praesent faucibus mauris vel elementum mollis. Fusce dapibus lacus turpis, nec cursus tellus finibus sit amet. Aliquam bibendum, sapien et placerat hendrerit, massa erat gravida urna, pellentesque tempus mauris nulla a lorem. Aenean volutpat semper luctus. In vel tempus mi. Phasellus sed hendrerit dolor, ut faucibus augue. Fusce id mauris fringilla, finibus ex a, commodo massa. 
    
    Aliquam erat volutpat. Vivamus gravida euismod tellus vel iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras lorem eros, varius ac efficitur ac, egestas non enim. Nam tristique nulla est, a sollicitudin elit porttitor nec. Pellentesque vitae libero ultrices, pretium velit vestibulum, porttitor nunc. Curabitur ac purus velit. Morbi non egestas lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
    
    Sed dictum gravida elit, a accumsan diam dignissim non. Curabitur fringilla arcu justo, sit amet eleifend urna mollis id. Fusce laoreet feugiat tellus eget mollis. Morbi quis mi eros. Aliquam erat volutpat. Curabitur vitae elit dolor. Cras eros mauris, dapibus at vulputate vel, eleifend eget est. Integer at mattis augue, sed hendrerit sem. Vivamus dui ligula, suscipit eget nulla non, bibendum pretium orci.
    
    Vestibulum semper egestas ipsum et suscipit. Sed scelerisque neque eu placerat lacinia. Ut tincidunt consectetur nulla ut tempus. Nunc non luctus felis. Donec ipsum neque, dapibus ut tortor sed, sollicitudin feugiat ex. Nunc suscipit augue at quam sodales, venenatis pellentesque nisl pellentesque. Nam placerat est sit amet est cursus, sit amet cursus erat posuere.
    
    Morbi tincidunt tortor mollis, congue leo quis, lacinia ligula. Etiam porttitor nunc vel sapien imperdiet maximus in ut quam. Nulla imperdiet neque eget aliquam sodales. Nulla ultrices purus nec tortor pellentesque, eu sodales justo blandit. Donec quis pulvinar nibh. In tempor urna id quam pharetra condimentum. Sed facilisis luctus neque dignissim faucibus. Vivamus odio purus, lobortis sit amet leo eu, ultricies elementum ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce lacinia erat nunc, non faucibus elit eleifend sit amet. Nam fermentum quam mauris. Donec eros massa, tempor in dui sed, auctor auctor lectus. `,


}

let OuterWilds : Game = {
    title : "Outer Wilds",
    genre : ["puzzle", "exploration"],
    picLink : "images/outerWilds.jpg",
    review : "pre good",

}

let subnautica : Game = {
    title : "Subnautica",
    genre : ['survival'],
    picLink : "images/subnautica.png",
    review : "pre good",

}
let darkSouls : Game = {
    title : "Dark Souls",
    genre : ['Action-Rpg'],
    picLink : "images/darksouls.jpg",
    review : "pre good",

}

let games : Game[] = [
    PersonaGame, OuterWilds, subnautica, darkSouls,
    PersonaGame, darkSouls, subnautica, OuterWilds
]

//creates store
const GameStore = writable(games)



//reveals store to other components
export default GameStore