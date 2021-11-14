<script>
	import Lotus from './../components/lotus.svelte';

	const array = [];
	for (let i = 1; i < 22; i++) {
		array.push(i);
	}
</script>

<svelte:head>
	<title>21 days meditation</title>
</svelte:head>

<header class="header">
	<div class="header_number">21</div>
	<h1 class="header_text">день медитаций</h1>
	<div class="logo header_logo">
		<div class="logo_text">QWE</div>
	</div>
</header>

<ul class="lotus-list">
	{#each array as item}
		<li class="lotus">
			<Lotus number={item} />
		</li>
	{/each}
</ul>
<p class="description">
	Каждый день я медитирую. Несколько минут медитации помогают расслабиться и сконцентрироваться на
	важном.
</p>
<h3 class="app-heading">Приложение HeadSpace</h3>
<div class="apps">
	<div>
		<img class="app-qr" src="./img/qr_1.jpeg" alt="qr_code"/>
		<h3 class="app-title">IOS</h3>
	</div>
	<div>
		<img class="app-qr" src="./img/qr_2.png" alt="qr_code"/>
		<h3 class="app-title">Android</h3>
	</div>
</div>

<style>
	.logo {
		padding: 10px;
		width: 76px;
		height: 76px;
		background-color: green;
		line-height: 28px;
		border-radius: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.logo_text {
		font-weight: 700;
		border-bottom: honeydew 5px solid;
		font-size: 30px;
		display: inline;
		font-family: sans-serif;
	}

	.lotus-list {
		list-style-type: none;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		margin: 0;
		padding: 0;
		gap: 10px;
	}

	.header {
		display: flex;
		margin-bottom: 20px;
	}

	.header_number {
		font-size: 100px;
		font-weight: 600;
		line-height: 100px;
	}

	.header_text {
		color: #000000;
		width: 230px;
		margin-right: auto;
		margin-top: 0;
		margin-bottom: 0;
		font-size: 38px;
		line-height: 48px;
	}

	.description,
	.app-heading {
		text-align: center;
	}

	.app-qr {
		background-color: #ffffff;
		width: 150px;
		height: 150px;
	}

	.apps {
		display: flex;
		justify-content: space-around;
	}

	.app-title {
		text-align: center;
	}

	@media (max-width: 500px) {
		.header_logo {
			display: none;
		}
		.header_number {
			font-size: 50px;
			line-height: 50px;
		}
		.header_text {
			font-size: 19px;
			line-height: 24px;
		}
	}
</style>
