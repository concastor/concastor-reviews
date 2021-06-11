<script lang='ts'>
    import type {Game} from "../types/Game.type"
	import RightArrow from '../shared/rightArrow.svelte'


    export let game : Game

    let review = game.review.substr(0)


</script>


<div class="main-container">
    <div style="float: left;">
        <img class="box-art" src={game.picLink} alt="" />
    </div>
    <div class="container">
        <br>
        <h1>{game.title}</h1>
        <h2>{review}</h2>
        
    </div>
    <div class="arrow">
        <RightArrow/>
    </div>


</div>

<style>

    .main-container{
        max-height: 36em;
        
    }

    .arrow{
        float: right;
        margin-right: 10px;
    }
    .container{
        float: left;
        height: auto;
        width : 64%;
        height: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: pre-wrap;
        
    }
    .box-art{
        max-width: 20vw;
        margin: 1vw;
        box-shadow: 0px 0px 20px black;
        /* float: left; */
    }

    h2,h1{
        margin: 0
    }

</style>