<template>
	<div id="app" class="app">
		<component :is="layout">
		<router-view/>
		</component>
	</div>
</template>

<script>
	import DefaulLayout from '@/layouts/DefaultLayout.vue'
	import HomeLayout from '@/layouts/HomeLayout.vue'
	import AuthLayout from '@/layouts/AuthLayout.vue'

	export default {
		name: 'App',
		computed: {
			layout () {
				return this.$route.meta.layout || 'DefaulLayout'
			}
		},
		components: {
			DefaulLayout, 
			HomeLayout, 
			AuthLayout
		}
	}
</script>

<style lang="scss">
	.app{
		width: 100%;
		min-height: 100vh;
	}
</style>
