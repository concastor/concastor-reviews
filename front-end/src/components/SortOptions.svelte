<script lang="ts">
	import { Select, SelectItem } from "carbon-components-svelte"
	import { createEventDispatcher } from "svelte"

	const dispatch = createEventDispatcher()

	const selected = (event) => {
		dispatch("selected", event.detail)
	}
</script>

<div class="container">
	<Select inline labelText="Sort" selected="Recent" on:change={selected}>
		<SelectItem value="Recent" text="Recent" />
		<SelectItem value="Title" text="Title" />
		<SelectItem value="Rating" text="Rating" />
	</Select>
</div>

<style>
	.container {
		margin-top: 4vh;
		float: right;
	}
</style>
