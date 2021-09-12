<script lang="ts">
	import type { Score } from "../types/Score.type"

	// import CircularProgress from '@smui/circular-progress';

	export let score: Number
</script>

<div class="scores-container">
	{score}
</div>

<style>
	.scores-container {
		height: 2em;
		width: 2em;
		background-color: yellowgreen;
		font-size: 42px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 25px;
	}
</style>
