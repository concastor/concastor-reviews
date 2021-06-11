<script lang="ts">
    import type {Game} from "./types/Game.type"
    // export let game : Game


</script>

<div class="game-container">
    <img class="box-art" src="images/persona4.jpg" alt="" />
    <h3 class="title">Persona 4 Golden</h3>
</div>


<style>
    .game-container{
        width: 12vw;
        padding: 1vw;
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