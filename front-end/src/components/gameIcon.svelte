<script lang="ts">
    import type {Game} from "../types/Game.type";
    import { navigate } from "svelte-routing";
    import { Tag } from "carbon-components-svelte";
    export let game : Game

    const navigateToGame = () => {
        navigate("/Review/" + game.title)
    }

</script>

<div class="game-container" on:click="{navigateToGame}">
    <img class="box-art" src={game.picLink} alt="" />
    <h4 class="title">{game.title}</h4>
    <Tag type="teal">IBM Cloud</Tag>
</div>

<!-- <div class="card-display">
    <div class="card-container">
      <Card>
        <Media class="card-media-16x9" aspectRatio="16x9">
          <MediaContent>
            <h2
              class="mdc-typography--headline6"
              style="color: #fff; position: absolute; bottom: 16px; left: 16px; margin: 0;"
            >
              A card with 16x9 media.
            </h2>
          </MediaContent>
        </Media>
        <Content style="color: #888;">Here's some gray text down here.</Content>
      </Card>
    </div>
</div> -->


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