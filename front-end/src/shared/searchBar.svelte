<script lang="ts">
	import { Search } from "carbon-components-svelte"
	import { createEventDispatcher } from "svelte"

	const dispatch = createEventDispatcher()

	export let placeholder = ""

	let searchValue

	const submitSearch = (search) => {
		dispatch("searched", search)
	}

	const handleEnter = (event) => {
		if (event.key === "Enter") {
			submitSearch(searchValue)
		}
	}
</script>

<div class="search">
	<Search
		{placeholder}
		bind:value={searchValue}
		on:keydown={handleEnter}
		on:clear={() => submitSearch("")}
		size="sm"
	/>
</div>

<style>
	.search {
		padding-top: 15px;
		margin-left: 1vw;
		width: 50%;
		float: right;
	}
</style>
