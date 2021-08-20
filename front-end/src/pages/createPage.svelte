<script lang="ts">
    import GenreRadio from "../components/genreRadio.svelte";
    import ConfirmModal from "../shared/confirmModal.svelte";
    import { Button , TextInput, TextArea } from "carbon-components-svelte";
    import ScoreSelect from "../components/ScoreSelect.svelte";
    import type { Score } from "../types/Score.type";


    
    let title : string
    let genres : string[]
    let review : string

    let score : Score
    let picLink : string

    $: console.log("genres", score)

    let modalOpen = false

    
    const handleSubmit = () =>{
        modalOpen = false
    }
</script>

<div class="main-container">
    <ConfirmModal open={modalOpen} on:approved={handleSubmit}/>

    <h1>create</h1>
    <br>

    <div class="section">
        <TextInput style="width: 50%" labelText="Game Title" placeholder="enter title of game" bind:value={title} />
    </div>
    
    <div class="section">
        <p>genres</p>
        <GenreRadio on:selected={(e)=> genres = e.detail}/>
    </div>
        
    <div class="section">
        <TextArea labelText="Game review" placeholder="Enter the review..." bind:value={review}/>
    </div>


    <h3>Score</h3>
    <div class="section">
        <ScoreSelect bind:score/>
    </div>

    <Button on:click={(()=> modalOpen = !modalOpen)}>Create</Button>



</div>

<style>
    .main-container{
        max-width: 60%;
        margin: auto;
    }

    .section{
        padding: 10px 0px;
    }
</style>