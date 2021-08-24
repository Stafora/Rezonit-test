<template>
	<div class="auth-container" v-bind:class="{change: changePanel}">
		<div class="auth-container-login">
			<Login v-on:changeLoginOrRegistration="changeLoginOrRegistration" />
			<Possibilities />
		</div>
		<div class="auth-container-register">
			<Possibilities />
			<Registration v-on:changeLoginOrRegistration="changeLoginOrRegistration" />
		</div>
	</div>
</template>

<script>
	import Login from '../components/auth/Login'
	import Registration from '../components/auth/Registration'
	import Possibilities from '../components/auth/Possibilities'

	export default {
		name: 'Auth',
		data: () => ({ 
			changePanel: false
		}),
		components: {
			Login,
			Registration,
			Possibilities
		},
		methods: {
			changeLoginOrRegistration() {
				this.changePanel = !this.changePanel;
			}
		}
	}
</script>

<style lang="scss">
	.auth-container{
		width: 832px;
		max-width: 100%;
		height: 468px;
		display: flex;
		position: relative;

		$parent: &;

		&-login{
			display: flex;
			position:absolute;
			width: 100%;
			height: 100%;
			transform: rotate3d(1, 0, 0, 0deg);
			transition: 0.8s;
			opacity: 1;
			visibility: visible;
		}
		&-register{
			display: flex;
			position:absolute;
			width: 100%;
			height: 100%;
			transform: rotate3d(1, 0, 0, 180deg);
			transition: 0.8s;
			opacity: 0;
			visibility: hidden;
		}

		&.change{
			#{$parent}{
				&-login{
					transform: rotate3d(1, 0, 0, 180deg);
					transition: 0.8s;
					opacity: 0;
					visibility: hidden;
				}
				&-register{
					transform: rotate3d(1, 0, 0, 0deg);
					transition: 0.8s;
					opacity: 1;
					visibility: visible;
				}
			}
		}
	}

	@media(max-width: 980px){
		.auth-container{
			&-login{

			}
			&-register{
				
			}
		}
	}
</style>
