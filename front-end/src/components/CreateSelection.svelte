<script lang="ts">
  import { Modal } from "carbon-components-svelte";
  import type { Game } from "../types/Game.type";
  import Gameicon from "./gameicon.svelte";
  import SelectionGrid from "./SelectionGrid.svelte";

  export let open = false
  export let games : Game[] = []

  let selectedGame : Game 

  const createGameDb = () => {
      console.log("selectedGame", selectedGame)
  }


  

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
  on:submit={createGameDb}
>
  <SelectionGrid {games} on:selected={(e)=> selectedGame = e.detail}/>
</Modal>

<style>

</style>