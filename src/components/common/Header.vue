<template>
	<header class="header">
		<div class="header-open-mobile-menu" v-on:click="toggleMobileMenu">
			<svg version="1.1" width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 341.333 341.333" style="enable-background:new 0 0 341.333 341.333;" xml:space="preserve">
				<rect y="277.333" width="341.333" height="42.667"/>
				<rect y="149.333" width="341.333" height="42.667"/>
				<rect y="21.333" width="341.333" height="42.667"/>
			</svg>
		</div>

		<div class="header__logo">
			<img :src="logo" alt="">
		</div>
		<div class="header__page-name">{{ getMetaTitle }}</div>

		<div class="header-profile" v-click-outside="closeUserInfo">
			<div class="header-profile__img" v-on:click="openUserInfo">
				<img :src="GET_USER.photo_url" alt="">				
			</div>
			<div class="header-profile-panel" :class="{active: isOpenUserInfo}">
				<div class="header-profile-panel__img">
					<img :src="GET_USER.photo_url" alt="">	
				</div>
				<div class="header-profile-panel__name">
					{{ GET_USER.name }}
				</div>
				<div class="header-profile-panel__email">{{ GET_USER.email }}</div>
				<div class="header-profile-panel__logout" v-on:click="logout">Выйти</div>
			</div>
		</div>

		<MobileMenu v-bind:isOpenMobileMenu="isOpenMobileMenu" v-on:toggleMobileMenu="toggleMobileMenu" />

	</header>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'
	import MobileMenu from './MobileMenu'

	export default {
		name: 'Header',
		data: () => ({
			logo: require('@/assets/img/cabinet-logo.svg'),
			isOpenUserInfo: false,
			isOpenMobileMenu: false
		}),
		created: function () {
			this.USER()
		},
		mounted() {
			document.addEventListener('click', this.outsideClickHeaderProfile)
		},
		components: {
			MobileMenu
		},
		computed: {
			...mapGetters([
                'GET_USER'
            ]),
			getMetaTitle: function() {
				return this.$route.meta.headerTitle
			}
		},
		methods: {
			...mapActions([
                'USER',
				'LOGOUT'
            ]),
			toggleMobileMenu() {
				this.isOpenMobileMenu = !this.isOpenMobileMenu
			},
			openUserInfo() {
				this.isOpenUserInfo = true
			},
			closeUserInfo() {
				this.isOpenUserInfo = false
			},
			logout: function () {
				this.LOGOUT()
				this.closeUserInfo()
				window.location.reload();
			}
		}
	}
</script>

<style lang="scss">
	.header{
		height: 100%;
		padding: 0px 30px;
		display: flex;
		align-items: center;
		background: #FFFFFF;
		box-shadow: 0px 10px 92px rgba(60, 145, 179, 0.1), 0px 10px 20px rgba(60, 145, 179, 0.1), 0px 5px 10px rgba(60, 145, 179, 0.1), 0px 5px 5px rgba(60, 145, 179, 0.1), 0px 2px 3px rgba(60, 145, 179, 0.1);
		position: relative;
		z-index: 3;

		&-open-mobile-menu{
			margin-right: 10px;
			display: none;

			svg{
				fill: #14B775;
			}
		}

		&__logo{
			display: flex;
			margin-right: 90px;

			img{
				max-width: 100%;
			}
		}
		&__page-name{
			font-weight: 500;
			font-size: 20px;
			line-height: 1.3;
			color: #525B53;
			
		}

		&-profile{
			margin-left: auto;
			position: relative;

			&__img{
				width: 32px;
				height: 32px;
				overflow: hidden;
				border-radius: 32px;
				cursor: pointer;
				display: flex;
				align-items: center;
				justify-content: center;

				img{
					height: 100%;
					width: auto;
				}
			}
			&-panel{
				width: 180px;
				height: auto;
				background: #FFFFFF;
				box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
				border-radius: 4px;
				padding: 15px 20px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				position: absolute;
				top: 100px;
				right: 0px;
				opacity: 0;
				visibility: hidden;
				transition: 0.3s;
				
				&.active{
					top: 43px;
					opacity: 1;
					visibility: visible;
				}

				&__img{
					width: 32px;
					height: 32px;
					overflow: hidden;
					border-radius: 32px;
					cursor: pointer;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-bottom: 16px;

					img{
						height: 100%;
						width: auto;
					}
				}
				&__name{
					font-size: 12px;
					line-height: 1.3;
					width: 100%;
					text-align: center;
					color: #A6B0AF;
				}
				&__email{
					font-size: 8px;
					line-height: 1.3;
					color: #A6B0AF;
					margin-bottom: 10px;
				}
				&__logout{
					font-size: 10px;
					line-height: 1.3;
					color: #A6B0AF;
					cursor: pointer;
					width: 68px;
					height: 16px;
					@include flex-center;
					transition: 0.4s;

					&:hover{
						background: rgba(196, 196, 196, 0.1);
					}
				}
			}
		}
	}

	@media(max-width: 980px){
		.header{
			padding: 0px 15px;

			&-open-mobile-menu{
				display: flex;
			}

			&__logo{
				width: 90px;
				margin-right: 20px;
			}
			&__page-name{
				font-size: 14px;
			}
			&-profile{
				&-panel{
					width: 140px;
				}
			}
			
		}
	}
</style>
