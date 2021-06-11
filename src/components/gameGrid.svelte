<script lang="ts">
    import type {Game} from "../types/Game.type"
    import GameIcon from "./gameicon.svelte"

    let demoGame : Game = {
        title : "Persona 4 Golden",
        genre : ["turn-based", "action"],
        picLink : "images/persona4.jpg"
    }

    let games : Game[] = [
        demoGame, demoGame, demoGame, demoGame,
        demoGame, demoGame, demoGame, demoGame
    ]

    


</script>

<div class="game-container">
    {#each games as game}
        <GameIcon {game}/>
    {/each}

</div>



<style>
    .game-container{
        padding-top: 2vh;
        display: inline-grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 2vw;
        max-width: 70%;
        margin: auto;
    }

</style>