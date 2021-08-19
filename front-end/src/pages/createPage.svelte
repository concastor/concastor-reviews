<script lang="ts">
    import GenreRadio from "../components/genreRadio.svelte";
    import ConfirmModal from "../shared/confirmModal.svelte";
    import { Button , TextInput, TextArea } from "carbon-components-svelte";


    
    let title : string
    let genres : string[]
    let review : string
    let picLink : string

    $: console.log("genres", review)

    let modalOpen = false

    
    const handleSubmit = () =>{
        modalOpen = false
    }
</script>

<div class="main-container">
    <ConfirmModal open={modalOpen} on:approved={handleSubmit}/>

    <h1>create</h1>

    <TextInput style="width: 50%" labelText="Game Title" placeholder="enter title of game" bind:value={title} />

    <p>genres</p>
    <GenreRadio on:selected={(e)=> genres = e.detail}/>


    <TextArea labelText="Game review" placeholder="Enter the review..." bind:value={review}/>

    <p>score</p>

    <Button on:click={(()=> modalOpen = !modalOpen)}>Create</Button>



</div>

<style>
    .main-container{
        max-width: 60%;
        margin: auto;
    }
</style>