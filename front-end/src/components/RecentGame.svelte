<script lang='ts'>
    import type {Game} from "../types/Game.type"
	import RightArrow from '../shared/rightArrow.svelte'
    import { navigate } from "svelte-routing";
    
    
    export let game : Game
    
    const navigateToGame = () => {
        console.log("forwared")
        navigate("/Review/" + game.title)
    }
    // let review = game.review.substr(0)


</script>


<div class="main-container">
    <div style="float: left;">
        <img class="box-art" src={game.picLink} alt="" />
    </div>
    <div class="container">
        <!-- <br> -->
        <h1>{game.title}</h1>
        <h2>{game.review}</h2>
        
    </div>
    <div class="arrow">
        <RightArrow on:pressed="{navigateToGame}"/>
    </div>


</div>

<style>

    .main-container{
        max-height: 40em;
        
    }

    .arrow{
        margin: 1em;
        float: right;
        margin-right: 10px;
    }
    .container{
        float: left;
        height: auto;
        width : 64%;
        height: 84%;
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

    h2{
        margin: 0;
        
    }
    h1{
        margin-bottom: 0;
    }

</style>