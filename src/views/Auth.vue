<template>
	<div class="auth-container" v-bind:class="{change: changePanel}">
		<div class="auth-container-login">
			<Login v-on:changeLoginOrRegistration="changeLoginOrRegistration" v-bind:registrationMessage="registrationMessage" />
			<Possibilities />
		</div>
		<div class="auth-container-register">
			<Possibilities />
			<Registration v-on:changeLoginOrRegistration="changeLoginOrRegistration" v-on:successRegistrationMessage="successRegistrationMessage" />
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
			changePanel: false,
			registrationMessage: ''
		}),
		components: {
			Login,
			Registration,
			Possibilities
		},
		methods: {
			changeLoginOrRegistration() {
				this.changePanel = !this.changePanel
			},
			successRegistrationMessage(message) {
				this.changePanel = !this.changePanel
				this.registrationMessage = message
			}
		}
	}
</script>

<style lang="scss">
	.auth-container{
		width: 832px;
		max-width: 100%;
		display: flex;
		align-items: center;
		position: relative;

		$parent: &;

		&-login{
			display: flex;
			position:absolute;
			width: 100%;
			transform: rotate3d(0, 1, 0, 0deg);
			transition: 0.8s;
			opacity: 1;
			visibility: visible;
		}
		&-register{
			display: flex;
			position:absolute;
			width: 100%;
			transform: rotate3d(0, 1, 0, 180deg);
			transition: 0.8s;
			opacity: 0;
			visibility: hidden;
		}

		&.change{
			#{$parent}{
				&-login{
					transform: rotate3d(0, 1, 0, 180deg);
					transition: 0.8s;
					opacity: 0;
					visibility: hidden;
				}
				&-register{
					transform: rotate3d(0, 1, 0, 0deg);
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
