<script lang="ts">
	import { bs } from "../services/backendService"
	import { onMount } from "svelte"
	import type { Game } from "../types/Game.type"

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
		<div class="game-container">
			<img
				class="box-art"
				src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.pic_id}.jpg`}
				alt=""
			/>
			<h3 class="title">{game.title}</h3>

			<!-- <ScoreDisplay/> -->
		</div>
	</div>
{/if}

<style>
	.main-container {
		max-width: 60%;
		margin: auto;
	}

	.box-art {
		max-width: 30vw;
		max-height: 80vh;
		box-shadow: 0px 0px 20px black;
	}
</style>
