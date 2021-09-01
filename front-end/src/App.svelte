<script lang="ts">
	// require("dotenv").config()

	import HomePage from './pages/homePage.svelte'
	import GamePage from './pages/GamePage.svelte'
	import CreatePage from './pages/createPage.svelte'
	import Header from './components/Header.svelte'
	import Footer from './components/Footer.svelte'
	import AllPage from './pages/AllPage.svelte';

	import { Router, Link, Route } from "svelte-routing";
	import RightArrow from './shared/rightArrow.svelte'

	export let url = "";
</script>


<Header/>
<main>
	<Router url="{url}">
		<div>
		  <Route path="Review/:title" let:params >
				<GamePage title={params.title}/>
		  </Route>
		  <Route path="All" component="{AllPage}" /> 
		  <Route path="Create" component="{CreatePage}" /> 
		  <Route path="about" component="{RightArrow}" /> 
		  <Route path="/"><HomePage/></Route>
		</div>
	</Router>
</main>
<Footer/>

<style>
	main {
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