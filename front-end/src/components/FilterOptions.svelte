<script lang="ts">
	import { Select, SelectItem } from "carbon-components-svelte"
</script>

<div class="container">
	<Select inline labelText="Filter" selected="Recent">
		<SelectItem value="None" text="None" />
		<SelectItem value="Score" text="Score" />
		<!-- <SelectItem value="Rating" text="Rating" /> -->
	</Select>
</div>

<style>
	.container {
		margin-top: 1vh;
		/* width: 15%; */
		float: right;
	}
</style>
