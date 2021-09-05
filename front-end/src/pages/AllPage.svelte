<script lang="ts">
	import GameGrid from "../shared/gameGrid.svelte"
	import GameStore from "../stores/GameStore"
	import SearchBar from "../shared/searchBar.svelte"
	import SortOptions from "../components/SortOptions.svelte"
	import { bs } from "../services/backendService"
	import type { Game } from "../types/Game.type"
	import { onMount } from "svelte"
	import FilterOptions from "../components/FilterOptions.svelte"
	import { Grid, Row, Column } from "carbon-components-svelte"

	const backendService = new bs()

	let displayGames: Game[] = []
	let noResultsFound: Boolean = false

	onMount(async () => {
		displayGames = await backendService.getAllGames()
	})

	const searchRecieved = async (event) => {
		noResultsFound = false
		let searchResults = await backendService.searchGame(event.detail)

		if (searchResults && searchResults.length) {
			displayGames = searchResults
		} else {
			noResultsFound = true
		}
	}
</script>

<div class="main-container">
	<div class="title-container">
		<Grid>
			<Row>
				<Column><h1 class="title">All Reviews</h1></Column>
				<!-- <Column>Column</Column> -->
				<Column>
					<SortOptions />
					<FilterOptions /></Column
				>
				<Column>
					<SearchBar
						placeholder={"Search reviews..."}
						on:searched={searchRecieved}
					/></Column
				>
			</Row>
		</Grid>
		<!-- <h1 class="title">All Reviews</h1>
		<div class="filters">
			<SearchBar
				placeholder={"Search reviews..."}
				on:searched={searchRecieved}
			/>
			<SortOptions />
			<FilterOptions />
		</div> -->
	</div>

	{#if noResultsFound}
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
