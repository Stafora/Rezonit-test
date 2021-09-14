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

		<div v-if="!isBack" class="header-profile" v-click-outside="closeUserInfo">
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

        <div v-if="isBack" v-on:click="backPage" class="header__close-page">
            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.29183 1.29208C1.38473 1.19895 1.49508 1.12507 1.61657 1.07465C1.73806 1.02424 1.8683 0.998291 1.99983 0.998291C2.13137 0.998291 2.26161 1.02424 2.3831 1.07465C2.50459 1.12507 2.61494 1.19895 2.70783 1.29208L7.99983 6.58608L13.2918 1.29208C13.3848 1.1991 13.4952 1.12535 13.6167 1.07503C13.7381 1.02471 13.8683 0.998815 13.9998 0.998815C14.1313 0.998815 14.2615 1.02471 14.383 1.07503C14.5045 1.12535 14.6149 1.1991 14.7078 1.29208C14.8008 1.38505 14.8746 1.49543 14.9249 1.61691C14.9752 1.73839 15.0011 1.86859 15.0011 2.00008C15.0011 2.13157 14.9752 2.26177 14.9249 2.38325C14.8746 2.50472 14.8008 2.6151 14.7078 2.70808L9.41383 8.00008L14.7078 13.2921C14.8008 13.3851 14.8746 13.4954 14.9249 13.6169C14.9752 13.7384 15.0011 13.8686 15.0011 14.0001C15.0011 14.1316 14.9752 14.2618 14.9249 14.3832C14.8746 14.5047 14.8008 14.6151 14.7078 14.7081C14.6149 14.8011 14.5045 14.8748 14.383 14.9251C14.2615 14.9754 14.1313 15.0013 13.9998 15.0013C13.8683 15.0013 13.7381 14.9754 13.6167 14.9251C13.4952 14.8748 13.3848 14.8011 13.2918 14.7081L7.99983 9.41408L2.70783 14.7081C2.61486 14.8011 2.50448 14.8748 2.383 14.9251C2.26152 14.9754 2.13132 15.0013 1.99983 15.0013C1.86835 15.0013 1.73815 14.9754 1.61667 14.9251C1.49519 14.8748 1.38481 14.8011 1.29183 14.7081C1.19886 14.6151 1.12511 14.5047 1.07479 14.3832C1.02447 14.2618 0.99857 14.1316 0.99857 14.0001C0.99857 13.8686 1.02447 13.7384 1.07479 13.6169C1.12511 13.4954 1.19886 13.3851 1.29183 13.2921L6.58583 8.00008L1.29183 2.70808C1.19871 2.61519 1.12482 2.50484 1.07441 2.38335C1.024 2.26186 0.998047 2.13161 0.998047 2.00008C0.998047 1.86854 1.024 1.7383 1.07441 1.61681C1.12482 1.49532 1.19871 1.38497 1.29183 1.29208Z" fill="#E3EBE7"/>
            </svg>
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
        props: {
            title: {
                type: String
            },
            isBack: {
                type: Boolean
            }
        },
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
				return this.title ? this.title : this.$route.meta.headerTitle
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
			},
            backPage() {
                this.$emit('backPage');
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

        &__close-page{
            margin-left: auto;
            cursor: pointer;
        }

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
                    border-radius: 4px;

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
