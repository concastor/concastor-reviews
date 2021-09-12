<script lang="ts">
	import type { Score } from "../types/Score.type"
	import ScoreDisplay from "./scoreDisplay.svelte"

	export let score: Score
</script>

<p>enjoyment</p>
<ScoreDisplay score={score.enjoyment} />
<p>gamefeel</p>
<ScoreDisplay score={score.gameFeel} />
<p>story</p>
<ScoreDisplay score={score.story} />
<p>world</p>
<ScoreDisplay score={score.world} />

<style>
</style>
