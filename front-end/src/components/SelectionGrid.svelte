<script lang="ts">
    import type {Game} from "../types/Game.type"
    import GameIcon from "../components/gameicon.svelte"
    import {fade, slide, scale} from 'svelte/transition'
    import { createEventDispatcher } from 'svelte';


    const dispatch = createEventDispatcher();

    export let games : Game[] = []

    let selectedGame : Game 


    const submitted = (e) => {
        let game = e.detail
        dispatch("selected", game)
        selectedGame = game

    }

</script>

<div class="game-container">

    {#each games as game}
        <div class:selected="{selectedGame && selectedGame.igdb_id === game.igdb_id}" in:scale>
            <GameIcon {game} on:selected={submitted} />
        </div>
    {/each}

</div>



<style>
    .game-container{
        padding: 2vh 0px;
        display: inline-grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2vw;
        margin: auto;
    }

    .selected{
        border: 1px solid #f4f4f4;
    }



    

</style>