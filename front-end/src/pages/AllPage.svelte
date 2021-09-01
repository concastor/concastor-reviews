<script>
    import GameGrid from '../shared/gameGrid.svelte'
    // import { Search } from "carbon-components-svelte";
    import SearchBar from '../shared/searchBar.svelte';

    const searchRecieved = (event) => {
        console.log("searched from component", event.detail)
    }
</script>

<div class="main-container">
    <div class="title-container">
        <h1 class="title">All Reviews</h1>
    </div>
    <SearchBar placeholder={"Search reviews..."} on:searched={searchRecieved}/>
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

    .search{
        padding-top: 15px;
        margin-left: 1vw;
        width: 40%;
    }
</style>