<template>
    <div class="registration">

        <div class="registration__logo">
			<img :src="logo" alt="">
		</div>

		<form @submit.prevent="registration" class="registration-form">
			<div class="registration__title">
				{{ CURRENT_LANGUAGE === LANG_RU ? 'Регистрация в Личном кабинете' : 'Create New Account' }}
			</div>

			<div class="form-element" :class="{error: REGISTRATION_ERRORS.name || $v.registrationName.$error, success: !$v.registrationName.$invalid}">
				<div class="form-element-input-wrapper">
					<input 
						type="text" 
						v-model="registrationName" 
						class="form-element__input" 
						:placeholder="CURRENT_LANGUAGE === LANG_RU ? 'Ваше имя' : 'Your name'"
						autocomplete="off"
						@blur="$v.registrationName.$touch()"
					>
				</div>
				<div class="form-element__error">
					<template v-for="error in REGISTRATION_ERRORS.name">
						{{ error }}
					</template>
					<template v-if="$v.registrationName.$error">
						<template v-if="!$v.registrationName.required">
							{{ CURRENT_LANGUAGE === LANG_RU ? 'Поле обязательно к заполнению' : 'The field must be filled in' }}
						</template>
						<template v-if="!$v.registrationName.minLength">
							{{ CURRENT_LANGUAGE === LANG_RU ? `Имя должно содержать минимум ${$v.registrationName.$params.minLength.min} символов` : `The name must contain at least ${$v.registrationName.$params.minLength.min} characters` }}
						</template>
					</template>
				</div>
			</div>

			<div class="form-element" :class="{error: REGISTRATION_ERRORS.email || $v.registrationEmail.$error, success: !$v.registrationEmail.$invalid}">
				<div class="form-element-input-wrapper">
					<input 
						v-model="registrationEmail" 
						class="form-element__input"
						:placeholder="CURRENT_LANGUAGE === LANG_RU ? 'Введите email' : 'Enter Email'" 
						autocomplete="off"
						@blur="$v.registrationEmail.$touch()"
					>
				</div>
				<div class="form-element__error">
					<template v-for="error in REGISTRATION_ERRORS.email">
						{{ error }}
					</template>
					<template v-if="$v.registrationEmail.$error">
						<template v-if="!$v.registrationEmail.required">
							{{ CURRENT_LANGUAGE === LANG_RU ? 'Поле обязательно к заполнению' : 'The field must be filled in' }}
						</template>
						<template v-if="!$v.registrationEmail.email">
							{{ CURRENT_LANGUAGE === LANG_RU ? 'Поле должно содержать email адрес' : 'The field must contain an email address' }}
						</template>
					</template>
				</div>
			</div>

			<div class="form-element" :class="{error: REGISTRATION_ERRORS.password || $v.registrationPassword.$error, success: !$v.registrationPassword.$invalid}">
				<div class="form-element-input-wrapper">
					<input
						:type="passwordVisible ? 'text' : 'password'"
						v-model="registrationPassword" 
						class="form-element__input" 
						:placeholder="CURRENT_LANGUAGE === LANG_RU ? 'Придумайте пароль' : 'Create Password'" 
						autocomplete="off"
						@blur="$v.registrationPassword.$touch()"
					>

					<div class="form-element__visible-password" v-on:click="changeVisiblePassword">
						<svg v-if="!passwordVisible" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.5 6C10.5 6.66304 10.2366 7.29893 9.76777 7.76777C9.29893 8.23661 8.66304 8.5 8 8.5C7.33696 8.5 6.70107 8.23661 6.23223 7.76777C5.76339 7.29893 5.5 6.66304 5.5 6C5.5 5.33696 5.76339 4.70107 6.23223 4.23223C6.70107 3.76339 7.33696 3.5 8 3.5C8.66304 3.5 9.29893 3.76339 9.76777 4.23223C10.2366 4.70107 10.5 5.33696 10.5 6V6Z" fill="#A6B0AF"/>
							<path d="M0 6C0 6 3 0.5 8 0.5C13 0.5 16 6 16 6C16 6 13 11.5 8 11.5C3 11.5 0 6 0 6ZM8 9.5C8.92826 9.5 9.8185 9.13125 10.4749 8.47487C11.1313 7.8185 11.5 6.92826 11.5 6C11.5 5.07174 11.1313 4.1815 10.4749 3.52513C9.8185 2.86875 8.92826 2.5 8 2.5C7.07174 2.5 6.1815 2.86875 5.52513 3.52513C4.86875 4.1815 4.5 5.07174 4.5 6C4.5 6.92826 4.86875 7.8185 5.52513 8.47487C6.1815 9.13125 7.07174 9.5 8 9.5V9.5Z" fill="#A6B0AF"/>
						</svg>
						<svg v-if="passwordVisible" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.79 11.912L9.176 10.297C8.55184 10.5202 7.87715 10.5615 7.23042 10.4162C6.58369 10.2709 5.99153 9.94489 5.52282 9.47618C5.05411 9.00747 4.72814 8.41531 4.58283 7.76858C4.43752 7.12185 4.47885 6.44716 4.702 5.823L2.642 3.763C0.938 5.278 0 7 0 7C0 7 3 12.5 8 12.5C8.9604 12.4967 9.90994 12.2965 10.79 11.912V11.912ZM5.21 2.088C6.09005 1.70342 7.03959 1.50331 8 1.5C13 1.5 16 7 16 7C16 7 15.061 8.721 13.359 10.238L11.297 8.176C11.5202 7.55184 11.5615 6.87715 11.4162 6.23042C11.2709 5.58369 10.9449 4.99153 10.4762 4.52282C10.0075 4.05411 9.41531 3.72814 8.76858 3.58283C8.12185 3.43752 7.44716 3.47885 6.823 3.702L5.21 2.089V2.088Z" fill="#A6B0AF"/>
							<path d="M5.525 6.646C5.46999 7.03031 5.50524 7.42215 5.62796 7.79047C5.75068 8.15879 5.95749 8.49347 6.23201 8.76799C6.50653 9.0425 6.8412 9.24931 7.20953 9.37203C7.57785 9.49475 7.96969 9.53 8.354 9.475L5.524 6.646H5.525ZM10.475 7.354L7.646 4.524C8.03031 4.46899 8.42215 4.50424 8.79047 4.62696C9.15879 4.74968 9.49347 4.95649 9.76799 5.23101C10.0425 5.50553 10.2493 5.8402 10.372 6.20853C10.4948 6.57685 10.53 6.96869 10.475 7.353V7.354ZM13.646 13.354L1.646 1.354L2.354 0.645996L14.354 12.646L13.646 13.354Z" fill="#A6B0AF"/>
						</svg>
					</div>
				</div>
				<div class="form-element__error">
					<template v-for="error in REGISTRATION_ERRORS.password">
						{{ error }}
					</template>
					<template v-if="$v.registrationPassword.$error">
						<template v-if="!$v.registrationPassword.required">
							{{ CURRENT_LANGUAGE === LANG_RU ? 'Поле обязательно к заполнению' : 'The field must be filled in' }}
						</template>
                        <template v-else-if="!$v.registrationPassword.minLength">
							{{ CURRENT_LANGUAGE === LANG_RU ? `Пароль должен содержать минимум ${$v.registrationName.$params.minLength.min} символа` : `The password must contain at least ${$v.registrationName.$params.minLength.min} characters` }}
						</template>
					</template>
				</div>
			</div>
			<div class="form-element" :class="{error: REGISTRATION_ERRORS.password_confirmation || $v.registrationPasswordRepeat.$error, success: !$v.registrationPasswordRepeat.$invalid}">
				<div class="form-element-input-wrapper">
					<input 
						:type="passwordVisible ? 'text' : 'password'"
						v-model="registrationPasswordRepeat" 
						class="form-element__input" 
						:placeholder="CURRENT_LANGUAGE === LANG_RU ? 'Повторите пароль' : 'Reenter Password'" 
						autocomplete="off"
						@blur="$v.registrationPasswordRepeat.$touch()"
					>

					<div class="form-element__visible-password" v-on:click="changeVisiblePassword">
						<svg v-if="!passwordVisible" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.5 6C10.5 6.66304 10.2366 7.29893 9.76777 7.76777C9.29893 8.23661 8.66304 8.5 8 8.5C7.33696 8.5 6.70107 8.23661 6.23223 7.76777C5.76339 7.29893 5.5 6.66304 5.5 6C5.5 5.33696 5.76339 4.70107 6.23223 4.23223C6.70107 3.76339 7.33696 3.5 8 3.5C8.66304 3.5 9.29893 3.76339 9.76777 4.23223C10.2366 4.70107 10.5 5.33696 10.5 6V6Z" fill="#A6B0AF"/>
							<path d="M0 6C0 6 3 0.5 8 0.5C13 0.5 16 6 16 6C16 6 13 11.5 8 11.5C3 11.5 0 6 0 6ZM8 9.5C8.92826 9.5 9.8185 9.13125 10.4749 8.47487C11.1313 7.8185 11.5 6.92826 11.5 6C11.5 5.07174 11.1313 4.1815 10.4749 3.52513C9.8185 2.86875 8.92826 2.5 8 2.5C7.07174 2.5 6.1815 2.86875 5.52513 3.52513C4.86875 4.1815 4.5 5.07174 4.5 6C4.5 6.92826 4.86875 7.8185 5.52513 8.47487C6.1815 9.13125 7.07174 9.5 8 9.5V9.5Z" fill="#A6B0AF"/>
						</svg>
						<svg v-if="passwordVisible" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.79 11.912L9.176 10.297C8.55184 10.5202 7.87715 10.5615 7.23042 10.4162C6.58369 10.2709 5.99153 9.94489 5.52282 9.47618C5.05411 9.00747 4.72814 8.41531 4.58283 7.76858C4.43752 7.12185 4.47885 6.44716 4.702 5.823L2.642 3.763C0.938 5.278 0 7 0 7C0 7 3 12.5 8 12.5C8.9604 12.4967 9.90994 12.2965 10.79 11.912V11.912ZM5.21 2.088C6.09005 1.70342 7.03959 1.50331 8 1.5C13 1.5 16 7 16 7C16 7 15.061 8.721 13.359 10.238L11.297 8.176C11.5202 7.55184 11.5615 6.87715 11.4162 6.23042C11.2709 5.58369 10.9449 4.99153 10.4762 4.52282C10.0075 4.05411 9.41531 3.72814 8.76858 3.58283C8.12185 3.43752 7.44716 3.47885 6.823 3.702L5.21 2.089V2.088Z" fill="#A6B0AF"/>
							<path d="M5.525 6.646C5.46999 7.03031 5.50524 7.42215 5.62796 7.79047C5.75068 8.15879 5.95749 8.49347 6.23201 8.76799C6.50653 9.0425 6.8412 9.24931 7.20953 9.37203C7.57785 9.49475 7.96969 9.53 8.354 9.475L5.524 6.646H5.525ZM10.475 7.354L7.646 4.524C8.03031 4.46899 8.42215 4.50424 8.79047 4.62696C9.15879 4.74968 9.49347 4.95649 9.76799 5.23101C10.0425 5.50553 10.2493 5.8402 10.372 6.20853C10.4948 6.57685 10.53 6.96869 10.475 7.353V7.354ZM13.646 13.354L1.646 1.354L2.354 0.645996L14.354 12.646L13.646 13.354Z" fill="#A6B0AF"/>
						</svg>
					</div>
				</div>
				<div class="form-element__error">
					<template v-for="error in REGISTRATION_ERRORS.password_confirmation">
						{{ error }}
					</template>
					<template v-if="$v.registrationPasswordRepeat.$error">
						<template v-if="!$v.registrationPasswordRepeat.required">
							{{ CURRENT_LANGUAGE === LANG_RU ? 'Поле обязательно к заполнению' : 'The field must be filled in' }}
						</template>
						<template v-if="!$v.registrationPasswordRepeat.coincidences">
							{{ CURRENT_LANGUAGE === LANG_RU ? 'Поле Пароль и Повторите пароль должно совпадать' : 'The Password and Repeat password field must match' }}
						</template>
					</template>
				</div>
			</div>

			<div class="registration-buttons">
				<div class="btn btn-border" v-on:click="changeRegistrationPanel"><div class="btn-border__bg"><div class="btn-border__gradient-text">{{ CURRENT_LANGUAGE === LANG_RU ? 'Войти' : 'Log In' }}</div></div></div>
				<button class="btn btn-default" :disabled="isDisabledRegistrationBtn"><span>{{ CURRENT_LANGUAGE === LANG_RU ? 'Регистрация' : 'Sign Up' }}</span></button>
			</div>

		</form>

		<LanguageAuth />

    </div>
</template>

<script>
	import LanguageAuth from '../language/Language-auth.vue'
	import { mapActions, mapGetters } from 'vuex'
	import { required, minLength, email } from 'vuelidate/lib/validators'
	import { LANG_RU, LANG_EN } from '@/services/languageService'

	export default {
		name: 'Registration',
		props: {
			changeLoginOrRegistration: {
				type: Function
			}
		},
		data: () => ({ 
			logo: require('@/assets/img/logo.svg'),
			registrationMessage: 'Регистрация прошла успешно, войдите в кабинет',
			isDisabledRegistrationBtn: true,
			passwordVisible: false,
			registrationName: '',
			registrationEmail: '',
			registrationPassword: '',
			registrationPasswordRepeat: '',
			LANG_RU: LANG_RU,
			LANG_EN: LANG_EN
		}),
		components: {
			LanguageAuth
		},
		watch: {
			'$v.$invalid': function _watch$v$invalid (value) {
				if(value === false) {
					this.isDisabledRegistrationBtn = false
				} else {
					this.isDisabledRegistrationBtn = true
				}
			}
		},
		computed: {
            ...mapGetters([
                'CHEK_SUCCES_REGISTRATION',
				'REGISTRATION_ERRORS',
				'CURRENT_LANGUAGE'
            ])
        },
		methods: {
			...mapActions([
                'REGISTRATION',
				'LOGIN'
            ]),
			changeVisiblePassword(){
				this.passwordVisible = !this.passwordVisible
			},
			changeRegistrationPanel: function () {
				this.$emit('changeLoginOrRegistration')
			},
			registration: function(){
				const resultRegister = this.REGISTRATION({
					email: this.registrationEmail,
					name: this.registrationName,
					password: this.registrationPassword,
					password_confirmation: this.registrationPasswordRepeat
				});
				
				resultRegister.then((resp) => {
					if(this.CHEK_SUCCES_REGISTRATION) {
						this.LOGIN({
							email: this.registrationEmail,
							password: this.registrationPassword
						});
					}
				})
			}
		},
		validations: {
			registrationName: {
				required,
				minLength: minLength(3)
			},
			registrationEmail: {
				required,
				email
			},
			registrationPassword: {
				required,
                minLength: minLength(3)
			},
			registrationPasswordRepeat: {
				required,
				coincidences() {
					if(this.registrationPassword === this.registrationPasswordRepeat) {
						return true
					}
					return false;
				}
			}
		}
	}
</script>

<style lang="scss">
	.registration{
		width: 468px;
		max-width: 100%;
		padding: 22px 16px;
		background: #fff;

		.language-auth-list{
			justify-content: flex-start;
		}

		&__logo{
			margin-bottom: 35px;
			display: flex;
			justify-content: flex-end;

			img{
				max-width: 100%;
			}
		}
		&__title{
			color: #2AA396;
			font-weight: 500;
			font-size: 20px;
			line-height: 1.3;
			margin-bottom: 20px;
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
			margin-top: 10px;
		}
	}
	@media(max-width: 980px){
		.registration{
			width: 100%;
		}
	}
</style>
