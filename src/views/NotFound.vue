<template>
	<div class="not-found">
		
		<h2 class="not-found__title">404</h2>
		<p class="not-found__text">Страница не найдена!</p>
		<p class="not-found__text">Вернитесь <router-link to="/">на главную </router-link></p>

	</div>
</template>

<script>
    export default {
        name: '404'
    }
</script>

<style lang="scss">
	.not-found{
		width: 100%;
		height: 100vh;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		&__title{
			font-size: 100px;
			line-height: 0.2;
			color: #2AA396;
		}
		&__text{
			margin-bottom: 15px;
			margin-top: 0px;
		}
	}
</style>
