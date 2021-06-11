<script>
	import { Router, Link } from "svelte-routing";

</script>

<header>
    <div class ="title-bar">

        <img src="./images/coolcastor.png" alt="">
        Concastor Reviews Games
          
        <Router>
            <nav style="float: right;">
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="blog">Blog</Link>
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
    

    img{
        float: left;
        max-width: 2.5vw;
        vertical-align: middle;
        margin-right: 10px;
    }

</style>