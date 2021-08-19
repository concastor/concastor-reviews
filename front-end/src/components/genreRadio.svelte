<script lang="ts">
    import { genres } from "./data/genres";
    import { Checkbox, Button  } from "carbon-components-svelte";
    import ConfirmModal from "../shared/confirmModal.svelte";

    //TODO: make it an accordian

    const selectedGenres = new Set() //fancy and uneccsarily efficent

    let menu = genres
    let modalOpen = false

    
    const handleSubmit = () =>{
        modalOpen = false
    }

    const addGenre = (e, genre) =>{
        if (e.detail) {
            selectedGenres.add(genre)
        }
        else {
            selectedGenres.delete(genre) 
        }
        console.log("clicked", e.detail, genre, [...selectedGenres])
    }   

</script>

<ConfirmModal open={modalOpen} on:approved={handleSubmit}/>
<div class="genre-container">
    {#each menu as genre}
        <Checkbox on:check={(e) => addGenre(e, genre)} labelText={genre}/>
    {/each}
</div>


<Button on:click={(()=> modalOpen = !modalOpen)} >Primary button</Button>


<style>
    .genre-container{
        /* padding-top: 2vh; */
        display: inline-grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr ;
        gap: 1em;
        margin: auto;
    }
</style>