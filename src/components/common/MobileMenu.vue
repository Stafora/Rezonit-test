<template>
	<div>
		<div class="mobile-menu scroll" :class="{active: isOpenMobileMenu}">
			<div class="mobile-menu__close" v-on:click="closeMobileMenu()">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1.29208 1.29208C1.38497 1.19895 1.49532 1.12507 1.61681 1.07465C1.7383 1.02424 1.86854 0.998291 2.00008 0.998291C2.13161 0.998291 2.26186 1.02424 2.38335 1.07465C2.50484 1.12507 2.61519 1.19895 2.70808 1.29208L8.00008 6.58608L13.2921 1.29208C13.3851 1.1991 13.4954 1.12535 13.6169 1.07503C13.7384 1.02471 13.8686 0.998815 14.0001 0.998815C14.1316 0.998815 14.2618 1.02471 14.3832 1.07503C14.5047 1.12535 14.6151 1.1991 14.7081 1.29208C14.8011 1.38505 14.8748 1.49543 14.9251 1.61691C14.9754 1.73839 15.0013 1.86859 15.0013 2.00008C15.0013 2.13157 14.9754 2.26177 14.9251 2.38325C14.8748 2.50472 14.8011 2.6151 14.7081 2.70808L9.41408 8.00008L14.7081 13.2921C14.8011 13.3851 14.8748 13.4954 14.9251 13.6169C14.9754 13.7384 15.0013 13.8686 15.0013 14.0001C15.0013 14.1316 14.9754 14.2618 14.9251 14.3832C14.8748 14.5047 14.8011 14.6151 14.7081 14.7081C14.6151 14.8011 14.5047 14.8748 14.3832 14.9251C14.2618 14.9754 14.1316 15.0013 14.0001 15.0013C13.8686 15.0013 13.7384 14.9754 13.6169 14.9251C13.4954 14.8748 13.3851 14.8011 13.2921 14.7081L8.00008 9.41408L2.70808 14.7081C2.6151 14.8011 2.50472 14.8748 2.38325 14.9251C2.26177 14.9754 2.13157 15.0013 2.00008 15.0013C1.86859 15.0013 1.73839 14.9754 1.61691 14.9251C1.49543 14.8748 1.38505 14.8011 1.29208 14.7081C1.1991 14.6151 1.12535 14.5047 1.07503 14.3832C1.02471 14.2618 0.998815 14.1316 0.998815 14.0001C0.998815 13.8686 1.02471 13.7384 1.07503 13.6169C1.12535 13.4954 1.1991 13.3851 1.29208 13.2921L6.58608 8.00008L1.29208 2.70808C1.19895 2.61519 1.12507 2.50484 1.07465 2.38335C1.02424 2.26186 0.998291 2.13161 0.998291 2.00008C0.998291 1.86854 1.02424 1.7383 1.07465 1.61681C1.12507 1.49532 1.19895 1.38497 1.29208 1.29208Z" fill="#E3EBE7"/>
				</svg>
			</div>

			<h3 class="mobile-menu__title">Меню</h3>

			<ul class="mobile-menu-list">
				<li class="mobile-menu-item" v-for="item in menu" :key="item.title">
					<a href="#" class="mobile-menu-link" :class="{active: item.active}">
						<span class="mobile-menu-link__icon"><img :src="item.icon" alt=""></span>
						<span class="mobile-menu-link__title">{{ item.title }}</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="mobile-menu-bg" :class="{active: isOpenMobileMenu}"></div>
	</div>
</template>

<script>
	export default {
		name: 'Header',
		props: {
			isOpenMobileMenu: {
				type: Boolean
			},
			toggleMobileMenu: {
				type: Function
			}
		},
		data: () => ({
			menu: [
				{
					icon: require('@/assets/img/menu-ico-1.svg'),
					title: 'Платы',
					active: true
				},
				{
					icon: require('@/assets/img/menu-ico-2.svg'),
					title: 'Трафареты',
					active: false
				},
				{
					icon: require('@/assets/img/menu-ico-3.svg'),
					title: 'Монтаж',
					active: false
				},
				{
					icon: require('@/assets/img/menu-ico-4.svg'),
					title: 'Заказы',
					active: false
				},
				{
					icon: require('@/assets/img/menu-ico-5.svg'),
					title: 'Счета',
					active: false
				},
				{
					icon: require('@/assets/img/menu-ico-6.svg'),
					title: 'Позиции',
					active: false
				},
				{
					icon: require('@/assets/img/menu-ico-7.svg'),
					title: 'Группы',
					active: false
				}
			]
		}),
		methods: {
			closeMobileMenu() {
				this.$emit('toggleMobileMenu')
			}
		}
	}
</script>

<style lang="scss">
	.mobile-menu{
		position: absolute;
		left: 0px;
		top: 0px;
		width: 300px;
		height: 100vh;
		background: #fff;
		z-index: 4;
		box-shadow: 0px 10px 92px rgba(60, 145, 179, 0.1), 0px 10px 20px rgba(60, 145, 179, 0.1), 0px 5px 10px rgba(60, 145, 179, 0.1), 0px 5px 5px rgba(60, 145, 179, 0.1), 0px 2px 3px rgba(60, 145, 179, 0.1);
		background: linear-gradient(174.1deg, #14B775 0%, #3D8FB4 100%);
		overflow: auto;
		left: -320px;
		transition: 0.4s;

		&.active{
			left: 0px;
		}

		&__close{
			position: absolute;
			right: 10px;
			top: 10px;
		}

		&-bg{
			content: '';
			position: fixed;
			background: #000;
			left: 0px;
			top: 0px;
			width: 100%;
			height: 100%;
			z-index: 2;
			opacity: 0.5;
			transition: 0.3s;
			left: -100%;

			&.active{
				left: 0px;
			}
		}

		&__title{
			text-align: center;
			color: #fff;
		}

		&-list{

		}
		&-item{

		}
		&-link{
				display: flex;
				align-items: center;
				padding: 7px 32px;
				margin-bottom: 15px;
				position: relative;

				$parent: &;

				&:hover{
					text-decoration: none;

					&::before{
						left: 0px;
						opacity: 1;
						visibility: visible;
					}
				}

				&::before{
					content: '';
					width: 4px;
					height: 100%;
					position: absolute;
					left: 0px;
					top: 0px;
					transition: 0.3s;
					opacity: 0;
					visibility: hidden;
					background: #fff;
					z-index: 1;
					left: -4px;
				}
				&::after{
					content: '';
					position: absolute;
					width: 100%;
					height: 100%;
					background: rgba(255, 255, 255, 0.25);
					left: 0px;
					top: 0px;
					transition: 0.3s;
					opacity: 0;
					visibility: hidden;
					z-index: 1;
				}
				&.active{
					&::before{
						opacity: 1;
						visibility: visible;
						left: 0px;
					}
					&::after{
						opacity: 1;
						visibility: visible;
					}
				}

				&__icon{
					width: 16px;
					margin-right: 16px;
					position: relative;
					z-index: 2;
				}
				&__title{
					font-size: 14px;
					line-height: 1.4;
					color: #fff;
					position: relative;
					z-index: 2;
				}
			}
	}
</style>
