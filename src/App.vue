<template>
	<div id="app" class="app">
		<component :is="layout">
			<router-view/>
		</component>
	</div>
</template>

<script>
	import DefaulLayout from '@/layouts/DefaultLayout.vue'
	import EmptyLayout from '@/layouts/EmptyLayout.vue'
	import AuthLayout from '@/layouts/AuthLayout.vue'
	import store from './store'

	export default {
		name: 'App',
		metaInfo: {
			title: 'Кабинет',
			titleTemplate: '%s | Резонит'
		},
		computed: {
			layout () {
				return this.$route.meta.layout || 'DefaulLayout'
			},
			headerTitle () {
				return this.$route.meta.title || 'Стандартный заголовок'
			}
		},
		components: {
			DefaulLayout, 
			EmptyLayout, 
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
		opacity: 0;
		animation-name: visibleApp;
		animation-duration: 0.5s;
		animation-play-state: initial;
		animation-delay: 0.3s;
		animation-fill-mode: forwards;
	}
	@keyframes visibleApp {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
