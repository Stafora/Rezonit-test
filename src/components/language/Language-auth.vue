<template>
	<div class="language-auth">
		<ul class="language-auth-list">
			<li class="language-auth-item"><div class="language-auth-link" :class="{active: CURRENT_LANGUAGE === LANG_EN}" v-on:click="changeLanguage(LANG_EN)">EN</div></li>
			<li class="language-auth-item"><div class="language-auth-link" :class="{active: CURRENT_LANGUAGE === LANG_RU}" v-on:click="changeLanguage(LANG_RU)">RU</div></li>
		</ul>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'
	import { LANG_RU, LANG_EN } from '@/services/languageService'

	export default {
		name: 'LanguageAuth',
		data: () => ({
			LANG_RU: LANG_RU,
			LANG_EN: LANG_EN
		}),
		computed: {
			...mapGetters([
                'CURRENT_LANGUAGE'
            ])
		},
		methods: {
			...mapActions([
                'SET_LANGUAGE'
            ]),
			changeLanguage(lang) {
				this.SET_LANGUAGE(lang)
			}
		}
	}
</script>

<style lang="scss">
	.language-auth{
		margin-top: 30px;
		&-list{
			display: flex;
			justify-content: flex-end;
		}
		&-item{
			margin-right: 14px;
			position: relative;

			&:first-child{
				&::before{
					display: none;
				}
			}

			&::before{
				content: '';
				width: 4px;
				height: 4px;
				position: absolute;
				left: -7px;
				top: 50%;
				background: #A6B0AF;
				border-radius: 4px;
				margin-top: -1px;
				margin-left: -2px;
			}
		}
		&-link{
			color: #A6B0AF;
			text-transform: uppercase;
			font-size: 12px;
			cursor: pointer;

			&.active{
				background-image: linear-gradient(to right, #14B775, #3D8FB4);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
			}
		}
	}
</style>
