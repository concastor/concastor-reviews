<script>
    import GameGrid from './gameGrid.svelte'

</script>
<div class="main-container">
    <div class="title-container">
        <h1 class="title">Recent Reviews</h1>
    
    </div>
    <GameGrid/>
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