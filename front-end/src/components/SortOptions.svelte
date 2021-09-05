<script lang="ts">
	import { Select, SelectItem } from "carbon-components-svelte"
</script>

<div class="container">
	<Select inline labelText="Sort" selected="Recent">
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
