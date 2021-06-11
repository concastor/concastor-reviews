<script lang="ts">
	import GameGrid from './components/gameGrid.svelte'
	import GameIcon from './components/gameicon.svelte'
	import Header from './components/Header.svelte'
	import Footer from './components/Footer.svelte'

	import { Router, Link, Route } from "svelte-routing";
	import RecentGame from './components/RecentGame.svelte'

	export let url = "";
</script>

<Header/>
<main>
	<Router url="{url}">
		<nav>
		  <Link to="/">Home</Link>
		  <Link to="about">About</Link>
		  <Link to="blog">Blog</Link>
		</nav>
		<div>
		  <!-- <Route path="blog/:id" component="{BlogPost}" />
		  <Route path="blog" component="{Blog}" /> -->
		  <Route path="about" component="{RecentGame}" /> 
		  <Route path="/"><GameGrid/></Route>
		</div>
	  </Router>

	


</main>
<Footer/>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>