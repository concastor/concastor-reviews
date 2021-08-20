<script lang='ts'>
    import type {Game} from "../types/Game.type"
	import RightArrow from '../shared/rightArrow.svelte'
    import { navigate } from "svelte-routing";
    import {RecentGameStore} from "../stores/GameStore"
    import { truncate } from "carbon-components-svelte/actions";
    
    const navigateToGame = () => {
        console.log("forwared")
        navigate("/Review/" + $RecentGameStore.title)
    }


</script>

<!-- loading block -->
{#if $RecentGameStore === null}
    <h1>loading</h1>

<!-- normal block -->
{:else}

<div class="main-container">
        <div style="float: left;">
            <img class="box-art" src={$RecentGameStore.picLink} alt="" />
        </div>
        <div class="container">
            <!-- <br> -->
            <h1>{$RecentGameStore.title}</h1>
            <h2 >{$RecentGameStore.review}</h2>
            
        </div>
        <div class="arrow">
            <RightArrow on:pressed="{navigateToGame}"/>
        </div>
    </div>
{/if}

<style>

    .main-container{
        max-height: 43em;
        padding-top: 10px;
        /* padding-bottom: 20px; */
        
    }

    .arrow{
        margin: 1em;
        float: right;
        margin-right: 10px;
    }
    .container{
        float: left;
        height: auto;
        width : 60%;
        height: 85%;
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