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
	import store from './store'

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
		},
		created: function () {
			this.$axios.interceptors.response.use('Unauthorized', function (err) {
				return new Promise(function (resolve, reject) {
					if (err.response.status === 401 && err.response.statusText === 'Unauthorized') {
						store.dispatch('LOGOUT')
					}
					throw err;
				})
			});
		}
	}
</script>

<style lang="scss">
	.app{
		width: 100%;
		min-height: 100vh;
	}
</style>
