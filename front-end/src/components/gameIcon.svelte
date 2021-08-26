<script lang="ts">
    import type {Game} from "../types/Game.type";
    import { navigate } from "svelte-routing";
    import { Tag, ImageLoader } from "carbon-components-svelte";
    export let game : Game

    const navigateToGame = () => {
        navigate("/Review/" + game.title)
    }

</script>

<div class="game-container" on:click="{navigateToGame}">
  
  <div class="box-art">
    <ImageLoader src={game.picLink} />
  </div>
  
  <h4 class="title">{game.title}</h4>

  {#each game.genre as genre}
    <Tag type="teal"> {genre.name} </Tag>
  {/each}
</div>

<style>
    .game-container{
        width: 12vw;
        padding: 1vw;
        /* padding-left: 0; */
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
        box-shadow: 0px 0px 20px black;
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