<script lang="ts">
	import type { Game } from "../types/Game.type"
	import GameIcon from "../components/gameicon.svelte"
	import { fade, slide, scale } from "svelte/transition"
	// import GameStore from "../stores/GameStore"
	import { navigate } from "svelte-routing"
	// import { onMount } from "svelte";

	export let displayGames: Game[] = []

	const navigateToGame = (event) => {
		let game = event.detail
		let url = game.title.replace(/\s+/g, "-")
		navigate("/Review/" + url)
	}
</script>

<div class="game-container">
	{#each displayGames as game}
		<div in:scale>
			<GameIcon {game} on:selected={navigateToGame} />
		</div>
	{/each}
</div>

<style>
	.game-container {
		padding-top: 2vh;
		display: inline-grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 2vw;
		margin: auto;
	}
</style>
