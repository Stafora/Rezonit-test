<template>
    <header class="header">
        <div class="header__logo">
			<img :src="logo" alt="">
		</div>
		<div class="header__page-name">{{ getMetaTitle }}</div>

		<div class="header-profile">
			<div class="header-profile__img" v-on:click="toggleUserInfo">
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
    </header>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'
	import router from '../../router'

	export default {
		name: 'Header',
		data: () => ({
			logo: require('@/assets/img/cabinet-logo.svg'),
			isOpenUserInfo: false
		}),
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
			toggleUserInfo() {
				this.isOpenUserInfo = !this.isOpenUserInfo
			},
			logout: function () {
				this.LOGOUT()
				this.toggleUserInfo()
				router.push('/auth');
			}
		},
		created: function () {
			this.USER()
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
				}
			}
		}
	}

	@media(max-width: 980px){
		.header{
			padding: 0px 15px;

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
