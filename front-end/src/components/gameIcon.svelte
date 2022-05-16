<script lang="ts">
	import type { Game } from "../types/Game.type"
	import { Tag, ImageLoader } from "carbon-components-svelte"
	import { createEventDispatcher } from "svelte"

	export let game: Game

	const IMG_URL = `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.pic_id}.jpg`

	const dispatch = createEventDispatcher()

	const submitted = () => {
		dispatch("selected", game)
	}
</script>

<div class="game-container" on:click={submitted}>
	<span class="box-art">
		<ImageLoader src={IMG_URL} />
	</span>

	<h4 class="title">{game.title}</h4>

	{#each game.genre as genre}
		<Tag type="teal">{genre.name}</Tag>
	{/each}
</div>

<style>
	.game-container {
		width: 12vw;
		padding: 1vw;
		display: inline-block;
		transition: transform 250ms;
		cursor: pointer;
		background-size: auto;
	}

	.game-container:hover {
		transform: translateY(-10px);
	}

	.box-art {
		/* max-width: 100%;
		max-height: 100%;
		display: inline-flex; */

		box-shadow: 0 0px 20px black;
	}

	.title {
		text-align: center;
	}
</style>
