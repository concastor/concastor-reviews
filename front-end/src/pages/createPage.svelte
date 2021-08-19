<script lang="ts">
    import GenreRadio from "../components/genreRadio.svelte";
    import ConfirmModal from "../shared/confirmModal.svelte";
    import { Button  } from "carbon-components-svelte";


    
    let title : string
    let genres : string[]
    let review : string
    let picLink : string

    $: console.log("genres", genres)

    let modalOpen = false

    
    const handleSubmit = () =>{
        modalOpen = false
    }
</script>

<div class="main-container">
    <ConfirmModal open={modalOpen} on:approved={handleSubmit}/>

    <h1>create</h1>

    <p>title</p>
    <input bind:value={title}>
    <p>genre</p>
    <GenreRadio on:selected={(e)=> genres = e.detail}/>
    <p>review</p>
    
    <textarea  id="review" name="review" rows="8" cols="100">
        test review
    </textarea>

    <p>score</p>

    <Button on:click={(()=> modalOpen = !modalOpen)} >Create Review</Button>



</div>

<style>
    .main-container{
        max-width: 60%;
        margin: auto;
    }
</style>