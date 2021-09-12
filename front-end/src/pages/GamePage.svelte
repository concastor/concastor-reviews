<script lang="ts">
	import { bs } from "../services/backendService"
	import { onMount } from "svelte"
	import type { Game } from "../types/Game.type"

	import ScoreGrid from "../shared/scoreGrid.svelte"
	// import { Grid, Row, Column } from "carbon-components-svelte"

	export let title: string

	let backendService = new bs()
	let game: Game

	onMount(async () => {
		let game_title = title.replace(/-/g, " ")

		game = await backendService.getOneGame(game_title)
	})
</script>

{#if game}
	<div class="main-container">
		<h1 class="title">{game.title}</h1>
		<img
			class="box-art"
			src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.pic_id}.jpg`}
			alt=""
		/>
		<div class="side-info">
			<ScoreGrid score={game.score} />
		</div>
	</div>
{/if}

<style>
	.main-container {
		max-width: 60%;
		margin: auto;
		padding-top: 20px;
		min-height: 80vh;
	}

	.box-art {
		float: left;
		max-width: 30vw;
		max-height: 80vh;
		box-shadow: 0px 0px 20px black;
	}
	.title {
		padding-bottom: 20px;
		font-weight: 900;
	}

	.side-info {
	}
</style>
