<script lang="ts">
    import {bs} from "../services/backendService"
    import { onMount } from 'svelte';
    import type { Game } from "../types/Game.type";
    import ScoreDisplay from "../shared/scoreDisplay.svelte"
    export let title : string

    let backendService = new bs()
    let game : Game 

    

    onMount(async () => {
        game = await backendService.getOneGame(title)
 
	})

</script>
{#if game}
    <div class="main-container">


        <div class="game-container" >
            <img class="box-art" src={game.picLink} alt="" />
            <h3 class="title">{game.title}</h3>

            <!-- <ScoreDisplay/> -->
        </div>



    </div>
{/if}


<style>

    .main-container{
        max-width: 60%;
        margin: auto;
    }

    .title{
        /* float: left */
    }

    .box-art{
        /* float: left; */
        max-width: 30vw;
        max-height: 80vh;
        box-shadow: 0px 0px 20px black;
    }

</style>