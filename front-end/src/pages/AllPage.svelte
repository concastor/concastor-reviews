<script lang="ts">
	import GameGrid from "../shared/gameGrid.svelte"
	import GameStore from "../stores/GameStore"
	import SearchBar from "../shared/searchBar.svelte"
	import SortOptions from "../components/SortOptions.svelte"
	import { bs } from "../services/backendService"
	import type { Game } from "../types/Game.type"
	import { onMount } from "svelte"
	import FilterOptions from "../components/FilterOptions.svelte"

	const backendService = new bs()

	let displayGames: Game[] = []
	let loading: Boolean = false

	let search = null
	let filter = null
	let sort = null

	onMount(async () => {
		displayGames = await backendService.getAllGames()
	})

	const makeSearch = async () => {
		loading = true

		displayGames = []
		let searchResults = await backendService.searchGame(search, filter, sort)

		if (searchResults && searchResults.length) {
			displayGames = searchResults
		}

		loading = false
	}

	const searchRecieved = async (event) => {
		search = event.detail
		makeSearch()
	}

	const sortSelected = async (event) => {
		sort = event.detail
		makeSearch()
	}
</script>

<div class="main-container">
	<div class="title-container">
		<h1 class="title">All Reviews</h1>
		<div class="filters">
			<SearchBar
				placeholder={"Search reviews..."}
				on:searched={searchRecieved}
			/>
			<SortOptions on:selected={sortSelected} />
			<FilterOptions />
		</div>
	</div>

	{#if !loading && !displayGames.length}
		<p>No results found</p>
	{:else}
		<GameGrid {displayGames} />
	{/if}
</div>

<style>
	.title {
		float: left;
		margin: 5px;
	}

	.filters {
		float: right;
		width: 45vw;
		padding-right: 20px;
	}

	.title-container {
		padding-left: 1vw;
		border-bottom: 2px solid black;
	}

	.main-container {
		display: grid;
		max-width: 60%;
		margin: auto;
	}
</style>
