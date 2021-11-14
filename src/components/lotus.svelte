<script>
  import { base } from "$app/paths";
	export let number;
</script>

<img src="./img/lotus.png" alt="lotus" />
<h2>{number}</h2>

<style>
	img {
		width: 100px;
		height: 100px;
		filter: contrast(2) invert();
	}

	h2 {
		margin: 0;
		font-size: 40px;
		text-align: center;
		line-height: 30px;
	}
</style>
