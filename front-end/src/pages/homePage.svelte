<script>
    import GameGrid from '../shared/gameGrid.svelte'
    import RecentGame from "../components/RecentGame.svelte"

    //gets first value for most revent review



</script>
<div class="main-container">
    <div class="title-container">
        <h1 class="title">Most Recent Review</h1>
    </div>
    <RecentGame />

    <div class="title-container">
        <h1 class="title">Recent Reviews</h1>
    </div>
    <GameGrid />
</div>

<style>
    .title{
        float: left;
        margin: 5px;
    }

    .title-container{
        padding-left : 1vw;
        border-bottom: 2px solid black;
    }

    .main-container{
        display: grid;
        max-width: 60%;
        margin: auto;
    }
</style>