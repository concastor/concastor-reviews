<script>

import App from "../App.svelte";

</script>
<a class="rightArrow">Read More...</a>

<style>

a.rightArrow {
	position: relative;
	background: maroon;
	display: inline-block;
	padding: 10px;
	color: #FFF;
	text-decoration: none;
	border-radius: 6px;
}
a:hover.rightArrow {
	background: #000;
}
a.rightArrow:after {
	position: absolute;
	top: 50%;
	left: 100%;
	margin-top: -11px;
	content: ' ';
	width: 0;
	height: 0;
	border-left: 10px solid maroon;
	border-right: 10px solid transparent;
	border-bottom: 10px solid transparent;
	border-top: 10px solid transparent;
}
a:hover.rightArrow:after {
	border-left-color: #000;
}

</style>
