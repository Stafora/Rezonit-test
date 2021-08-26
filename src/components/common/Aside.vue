<template>
    <aside class="main-aside__aside aside">
        <ul class="aside-menu">
			<li class="aside-menu-item" v-for="item in menu" :key="item.title">
				<a href="#" class="aside-menu-link" :class="{active: item.active}">
					<span class="aside-menu-link__icon"><img :src="item.icon" alt=""></span>
					<span class="aside-menu-link__title">{{ item.title }}</span>
				</a>
			</li>
		</ul>
    </aside>
</template>

<script>
	export default {
		name: 'Aside',
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
		})
	}
</script>

<style lang="scss">
	.aside{
		&-menu{
			padding-top: 25px;
			padding-bottom: 25px;
			width: 100%;

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
	}
</style>
