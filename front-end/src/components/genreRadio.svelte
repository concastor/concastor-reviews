<script lang="ts">
    import { genres } from "./data/genres";
    import { Checkbox } from "carbon-components-svelte";

    //TODO: make it an accordian

    const selectedGenres = new Set() //fancy and uneccsarily efficent

    let menu = genres

    // let selectedGenres = []

    const addGenre = (e, genre) =>{
        if (e.detail) {
            selectedGenres.add(genre)
            console.log("clicked", e.detail, genre, [...selectedGenres])

        }
        else {
            selectedGenres.delete(genre) 
            console.log("clicked", e.detail, genre, [...selectedGenres])
        }

    }   

</script>
<div class="genre-container">
    {#each menu as genre}
        <Checkbox on:check={(e) => addGenre(e, genre)} labelText={genre}/>
    {/each}
</div>

<style>
    .genre-container{
        /* padding-top: 2vh; */
        display: inline-grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr ;
        gap: 1em;
        margin: auto;
    }
</style>