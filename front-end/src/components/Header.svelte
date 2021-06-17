<script>
	import { Router, Link } from "svelte-routing";

</script>

<header>
    <div class ="title-bar">

        <img src="./images/coolcastor.png" alt="">
        Concastor Reviews Games
          
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="blog">All Reviews</Link>
                <Link to="blog">Top 10</Link>
                <Link to="about">About</Link>
                <Link to="Create">Create</Link>
            </nav>
        </Router>
    </div>

</header>


<style>
    header{
        background: #f7f7f7;
        padding: 15px 0;
        width: auto
    }
    
    .title-bar{
        margin : auto;
        max-width: 60%;
        font-size: 40px;
        text-align: left;
    }

    nav{
        font-size: 20px;
        vertical-align: middle;
        padding-top: 1em;
        float: right;
    }
    

    img{
        float: left;
        max-width: 2.5vw;
        margin-right: 10px;
    }

</style>