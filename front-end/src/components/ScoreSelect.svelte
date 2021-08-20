<script lang="ts">
    import type { Score } from "../types/Score.type";
    import { Slider, Grid, Row, Column } from "carbon-components-svelte";
    import { createEventDispatcher } from 'svelte';

    
    const dispatch = createEventDispatcher();




    export let score : Score

    //diffrent scores
    let enjoyment : number = 0
    let story : number = 0
    let gameFeel : number = 0
    let world : number = 0
    let overall : number = 0


    //responsive function, whenever a score changes it computes new score
    $: {
        overall = Math.ceil((story + gameFeel + world + enjoyment)/4)

        score = {
            enjoyment,
            story,
            gameFeel,
            world,
            overall
        }
    }

</script>


<Grid>
    <Row>
        <Column>
            <Slider labelText="Game Enjoyment" bind:value={enjoyment}/>
        </Column>
        <Column>
            <Slider labelText="Game Story" bind:value={story}/>
        </Column>

    </Row>
    <Row>
        <Column>
            <Slider labelText="Game Feel" bind:value={gameFeel}/>
        </Column>
        <Column>
            <Slider labelText="Game World" bind:value={world}/>
        </Column>

    </Row>
    <Row>
        <Column>
            <p>Overall Score : {overall}</p>
        </Column>
    </Row>
</Grid>




