<script>
	export let title = 'Ninja Gaming';
</script>

<header class="title">
	<img src="/controller.svg" alt="site logo" />
	<h1>{title}</h1>
</header>

<style>
	.title {
		display: flex;
	}
	.title img {
		display: inline-block;
		filter: invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(90%);
	}
	.title h1 {
		margin-left: 10px;
	}
</style>
