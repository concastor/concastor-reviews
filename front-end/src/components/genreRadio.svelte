<script lang="ts">
    let genres = []
    let menu = [
        "Action",
        "Platformer",
        "Shooter" ,
        "Fighting" ,
        "Stealth",
        "Survival",
        "Rhythm", 
        "Battle Royale", 
        "Adventure",
        "Survival horror",
        "Metroidvania",
        "Competative",
        "Visual novels",
        "Interactive movie",
        "Role-Playing",
        "Multiplayer",
        "MMORPG",
        "Roguelike",
        "Sandbox",
        "JRPG",
        "Simulation",
        "Strategy",
        "MOBA",
        "Real-time strategy",
        "Tower defense",
        "Turn-based strategy",
        "Sports",
        "Racing",
        "Open world",
        "MMO"
    ]

    const test = () =>{
        console.log(genres)
    }   

</script>
<div class="genre-container">
    {#each menu as genre}
        <label>
            <input type=checkbox bind:group={genres} value={genre}>
            {genre}
        </label>
    {/each}
</div>
<button on:click="{test}">test</button>

<style>
    .genre-container{
        /* padding-top: 2vh; */
        display: inline-grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr ;
        gap: 1em;
        margin: auto;
    }
</style>