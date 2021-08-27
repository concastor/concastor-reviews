<script lang="ts">
    import type {Game} from "../types/Game.type";
    import { Tag, ImageLoader } from "carbon-components-svelte";
    import { createEventDispatcher } from 'svelte';
    
    export let game : Game
    export let showSelected : Boolean

    const dispatch = createEventDispatcher();

    const submitted = () => {
      dispatch("selected", game)
    }


</script>

<div class="game-container" on:click={submitted}>
  
  <span class="box-art" class:selected="{showSelected}">
    <ImageLoader src={game.picLink} />
  </span>
  
  <h4 class="title">{game.title}</h4>

  {#each game.genre as genre}
    <Tag type="teal"> {genre.name} </Tag>
  {/each}
</div>

<style>
    .game-container{
        width: 12vw;
        padding: 1vw;
        display: inline-block;
        transition: transform 250ms;
        cursor: pointer;
    }

    .game-container:hover{
        transform: translateY(-10px);
    }

    .box-art{
        max-width:100%;
        max-height:100%;
        display: inline-flex;
        
        box-shadow: 0 0px 20px black;
    }

    .box-art.selected{
      box-shadow: 0 0px 30px red;

    }

    .title{
        text-align: center;
    }

    * :global(.card-media-16x9) {
    background-image: url(https://place-hold.it/320x180?text=16x9&fontsize=23);
  }
 
  * :global(.card-media-square) {
    background-image: url(https://place-hold.it/320x320?text=square&fontsize=23);
  }

</style>