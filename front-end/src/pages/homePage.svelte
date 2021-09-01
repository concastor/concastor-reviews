<script lang="ts">
    import GameGrid from '../shared/gameGrid.svelte'
    import RecentGame from "../components/RecentGame.svelte"
    import { onMount } from 'svelte';
    import type { Game } from '../types/Game.type';
    import { bs } from "../services/backendService"

    const backendService = new bs()


    let recentGame : Game
    let games : Game[]

    onMount(async () => {
        games = await backendService.getAllGames()
        recentGame = games[0]
    })



</script>
<div class="main-container">
    <div class="title-container">
        <h1 class="title">Most Recent Review</h1>
    </div>
    <RecentGame {recentGame}/>

    <div class="title-container">
        <h1 class="title">Recent Reviews</h1>
    </div>
    <GameGrid displayGames={games}/>
</div>

<style>
    .title{
        float: left;
        margin: 5px;
    }

    .title-container{
        padding-left : 1vw;
        border-bottom: 2px solid black;
    }

    .main-container{
        display: grid;
        max-width: 60%;
        margin: auto;
    }
</style>