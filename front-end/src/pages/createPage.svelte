<script lang="ts">
    import GenreRadio from "../components/genreRadio.svelte";
    import ConfirmModal from "../shared/confirmModal.svelte";
    import { Button , TextInput, TextArea, Loading  } from "carbon-components-svelte";
    import ScoreSelect from "../components/ScoreSelect.svelte";
    import type { Score } from "../types/Score.type";
    import type { Game } from "../types/Game.type";
    import {bs} from "../services/backendService"
    import CreateSelection from "../components/CreateSelection.svelte"


    let backendService = new bs()
    
    
    let title : string
    let genre : string[] = null
    let review : string
    let score : Score

    let modalOpen = false
    let SelectionModal = false
    let loading = false

    let possibleGames : Game[] = []

    
    const handleSubmit = async () =>{
        modalOpen = false
        loading = true

        const gameInfo : Game = {
            title,
            genre,
            picLink : null,
            review,
            score,
            igdb_id : null
        }

        let res = await backendService.createGame(gameInfo)

        possibleGames = res.PossibleGames
        loading = false
        SelectionModal = true
    }

    const CreateGame = async(event) => {
        let createGame = event.detail

        SelectionModal = false
        loading = true

        let res = await backendService.addGameToDb(createGame)

        loading = false
    }
    
</script>

<div class="main-container">
    <ConfirmModal open={modalOpen} on:approved={handleSubmit}/>
    <CreateSelection open={SelectionModal} games={possibleGames} on:selected={CreateGame}/>


    <Loading active={loading}/>

    <h1>create</h1>
    <br>

    <div class="section">
        <TextInput style="width: 50%" labelText="Game Title" placeholder="enter title of game" bind:value={title} />
    </div>
    
    <!-- <div class="section">
        <p>genres</p>
        <GenreRadio on:selected={(e)=> genre = e.detail}/>
    </div> -->
        
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