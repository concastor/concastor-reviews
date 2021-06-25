<script lang="ts">
    import {bs} from "../services/backendService"
    import { onMount } from 'svelte';
    import type { Game } from "../types/Game.type";
    export let title : string

    let backendService = new bs()
    let game : Game 

    console.log("data", game)
    

    onMount(async () => {
        game = await backendService.getOneGame(title)
	})

</script>
{#if game}
<div class="main-container">

    <h1>{game.title}</h1>
    <h1>{game.review}</h1>



</div>
    
{/if}


<style>

    .main-container{
        max-width: 60%;
        margin: auto;
    }

</style>