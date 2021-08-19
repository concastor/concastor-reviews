<script lang="ts">
    import { genres } from "./data/genres";
    import { Checkbox } from "carbon-components-svelte";
    import { createEventDispatcher } from 'svelte';

    
    //TODO: make it an accordian
    
    const dispatch = createEventDispatcher();
    const selectedGenres = new Set() //fancy and uneccsarily efficent

    let menu = genres

    const addGenre = (e, genre) =>{
        if (e.detail) {
            selectedGenres.add(genre)
        }
        else {
            selectedGenres.delete(genre) 
        }
        dispatch("selected", [...selectedGenres])
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