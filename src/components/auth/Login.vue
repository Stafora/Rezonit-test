<template>
    <div class="login">

        <div class="login__logo">
			<img :src="logo" alt="">
		</div>

		<form action="" class="login-form">
			<div class="login__title">
				Вход в Личный кабинет
			</div>

			<div class="form-element">
				<div class="form-element-input-wrapper">
					<input type="email" name="email" class="form-element__input" placeholder="Email" autocomplete="off">
				</div>
			</div>
			<div class="form-element">
				<div class="form-element-input-wrapper">
					<input type="password" name="password" class="form-element__input" placeholder="Пароль" autocomplete="off">

					<div class="form-element__visible-password">
						<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.5 6C10.5 6.66304 10.2366 7.29893 9.76777 7.76777C9.29893 8.23661 8.66304 8.5 8 8.5C7.33696 8.5 6.70107 8.23661 6.23223 7.76777C5.76339 7.29893 5.5 6.66304 5.5 6C5.5 5.33696 5.76339 4.70107 6.23223 4.23223C6.70107 3.76339 7.33696 3.5 8 3.5C8.66304 3.5 9.29893 3.76339 9.76777 4.23223C10.2366 4.70107 10.5 5.33696 10.5 6V6Z" fill="#A6B0AF"/>
							<path d="M0 6C0 6 3 0.5 8 0.5C13 0.5 16 6 16 6C16 6 13 11.5 8 11.5C3 11.5 0 6 0 6ZM8 9.5C8.92826 9.5 9.8185 9.13125 10.4749 8.47487C11.1313 7.8185 11.5 6.92826 11.5 6C11.5 5.07174 11.1313 4.1815 10.4749 3.52513C9.8185 2.86875 8.92826 2.5 8 2.5C7.07174 2.5 6.1815 2.86875 5.52513 3.52513C4.86875 4.1815 4.5 5.07174 4.5 6C4.5 6.92826 4.86875 7.8185 5.52513 8.47487C6.1815 9.13125 7.07174 9.5 8 9.5V9.5Z" fill="#A6B0AF"/>
						</svg>
					</div>
				</div>
			</div>

			<a href="#" class="login__forget-password">Забыли пароль?</a>

			<div class="login-buttons">
				<div class="btn btn-border" v-on:click="changeLoginPanel"><span>Регистрация</span></div>
				<button class="btn btn-default"><span>Войти</span></button>
			</div>

		</form>

		<LanguageAuth />

    </div>
</template>

<script>
	import LanguageAuth from '../language/Language-auth.vue'

	export default {
		name: 'Login',
		props: {
			changeLoginOrRegistration: {
				type: Function
			}
		},
		data: () => ({ 
			logo: require('@/assets/img/logo.svg')
		}),
		components: {
			LanguageAuth
		},
		methods: {
			changeLoginPanel: function () {
				this.$emit('changeLoginOrRegistration')
			}
		}
	}
</script>

<style lang="scss">
	.login{
		width: 468px;
		max-width: 100%;
		padding: 15px 28px;
		background: #fff;

		&__logo{
			margin-bottom: 40px;

			img{
				max-width: 100%;
			}
		}
		&__title{
			color: #2AA396;
			font-weight: 500;
			font-size: 20px;
			line-height: 1.3;
			margin-bottom: 40px;
			text-align: center;
		}
		&-form{
			width: 320px;
			max-width: 100%;
			margin-left: auto;
			margin-right: auto;
		}
		&-buttons{
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 80px;
		}
		&__forget-password{
			font-size: 12px;
			color: #2AA396;
			line-height: 1.2;
			text-align: right;
			display: flex;
			justify-content: flex-end;
		}

	}
</style>
