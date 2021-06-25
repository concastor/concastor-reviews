<script lang="ts">
    import GenreRadio from "../components/genreRadio.svelte";

    let title : string
    let genre : string[]
    let review : string
    let picLink : string

</script>

<div class="main-container">
    <h1>create</h1>

    <p>title</p>
    <input bind:value={title}>
    <p>genre</p>
    <GenreRadio/>
    <p>review</p>
    
    <textarea  id="review" name="review" rows="8" cols="100">
        test review
    </textarea>

    <p>score</p>


</div>

<style>
    .main-container{
        max-width: 60%;
        margin: auto;
    }
</style>