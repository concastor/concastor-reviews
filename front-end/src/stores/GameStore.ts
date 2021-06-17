import { writable } from "svelte/store";
import type {Game} from "../types/Game.type"

let games : Game[] = []
let RecentGame : Game = null
//creates store
const GameStore = writable(games)
const RecentGameStore = writable(RecentGame)

const  InitStore = async () => {
  var title = null;
  var query = 
    `query getGames($title : String){
      getGames(title : $title){
        allGameInfo{
          title
          picLink
          review
          genre
        }
      }
    }`
    
    fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables: {title},
        })
      })
        .then(r => r.json())
        .then(data => {
          games = data.data.getGames.allGameInfo
          
          //update stores
          GameStore.set(games)
          RecentGameStore.set(games[0])
        })
}

const setupIntialLoad = async() => {
  await InitStore()
}



setupIntialLoad()

//reveals store to other components
export default GameStore
export {RecentGameStore}