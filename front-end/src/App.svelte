<script lang="ts">
	import HomePage from './pages/homePage.svelte'
	import GamePage from './pages/GamePage.svelte'
	import Header from './components/Header.svelte'
	import Footer from './components/Footer.svelte'

	import { Router, Link, Route } from "svelte-routing";
	import RecentGame from './components/RecentGame.svelte'
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
		  <!-- <Route path="blog" component="{Blog}" />  -->
		  <Route path="about" component="{RightArrow}" /> 
		  <Route path="/"><HomePage/></Route>
		</div>
	  </Router>

	


</main>
<Footer/>

<style>
	main {
		/* text-align: center; */
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