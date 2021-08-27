<script lang="ts">
    import { Modal } from "carbon-components-svelte";
    import type { Game } from "../types/Game.type";
    import Gameicon from "./gameicon.svelte";

    export let open = false
    export let games : Game[] = []

    $: console.log("games", games)

</script>


<Modal
  preventCloseOnClickOutside
  {open}
  modalHeading="Select correct game"
  primaryButtonText="Confirm"
  secondaryButtonText="Cancel"
  on:click:button--secondary
  on:open
  on:close
  on:submit
>
  {#each games as game}
       <Gameicon {game} />
  {/each}
</Modal>

<style>

</style>