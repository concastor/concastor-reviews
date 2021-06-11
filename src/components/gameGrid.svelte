<script lang="ts">
    import type {Game} from "../types/Game.type"
    import GameIcon from "./gameicon.svelte"
    import {fade, slide, scale} from 'svelte/transition'

    export let Games : Game[]


</script>

<div class="game-container">
    {#each Games as game}
        <div in:scale>
            <GameIcon {game}/>
        </div>
    {/each}

</div>



<style>
    .game-container{
        padding-top: 2vh;
        display: inline-grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 2vw;
        margin: auto;
    }

</style>