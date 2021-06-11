<script lang="ts">
    import type {Game} from "../types/Game.type"
    export let game : Game


</script>

<div class="game-container">
    <img class="box-art" src={game.picLink} alt="" />
    <h3 class="title">{game.title}</h3>
</div>


<style>
    .game-container{
        width: 12vw;
        padding: 1vw;
        /* padding-left: 0; */
        display: inline-block;
        transition: transform 250ms;
    }

    .game-container:hover{
        transform: translateY(-10px);
    }

    .box-art{
        max-width:100%;
        max-height:100%;
        box-shadow: 0px 0px 20px black;
    }

</style>