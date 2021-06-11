<script lang="ts">
	import GameGrid from './components/gameGrid.svelte'
	import Header from './components/Header.svelte'
	import Footer from './components/Footer.svelte'
	// import GameIcon from './assets/images/persona4.jpg'

	
</script>

<Header/>
<main>
	<!-- <h1>Hello {name}!</h1> -->

	<GameGrid/>


</main>
<Footer/>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>