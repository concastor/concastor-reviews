<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const navigateToGame = () => {
        dispatch("pressed")
    }

</script>


<div class="button" on:click={navigateToGame}></div>


<style>

.button {
  cursor: pointer;
  position: relative;
  top: 10%;
  left: 10%;
  height: 60px;
  width: 100px;
  background: rgb(48, 177, 76);
  border-radius: 25px
}

.button:before {
  content: "";
  width: 25px;
  height: 2px;
  background: slategray;
  position: absolute;
  top: 50%;
  margin-top: -1px;
  right: 24px;
  transition: all 0.3s ease;
}

.button:hover:before {
  right: 34px;
  width: 35px;
}

.button:after {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 0 5px 5px;
  border-color: transparent transparent transparent #000000;
  position: absolute;
  top: 50%;
  margin-top: -5px;
  right: 20px;
  transition: all 0.3s ease;
}

.button:hover:after {
  right: 34px;
  right: 30px;
}

</style>
