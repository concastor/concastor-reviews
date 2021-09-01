<script lang="ts">
    import GameGrid from '../shared/gameGrid.svelte'
    import GameStore from "../stores/GameStore"
    import SearchBar from '../shared/searchBar.svelte';
    import { bs } from "../services/backendService"
    import type { Game } from '../types/Game.type';
    import { onMount } from 'svelte';

    const backendService = new bs()

    let displayGames : Game[] = []

    onMount(async () => {
        displayGames = await backendService.getAllGames()

    })

    const searchRecieved = (event) => {
        console.log("searched from component", event.detail)
    }
</script>

<div class="main-container">
    <div class="title-container">
        <h1 class="title">All Reviews</h1>
        <div class="filters">
            <SearchBar placeholder={"Search reviews..."} on:searched={searchRecieved}/>
        </div>
    </div>

    <span>
    </span>
    <GameGrid {displayGames}/>
</div>

<style>
    .title{
        float: left;
        margin: 5px;
    }

    .filters{
        float: right;
        width: 35vw;
        padding-right: 20px;
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