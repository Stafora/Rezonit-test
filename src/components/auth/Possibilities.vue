<template>
    <div class="auth-possibilities">
		<div class="auth-possibilities-bg" :style="{ backgroundImage: `url('${imgBg}')` }"></div>
        <div class="auth-possibilities__title">{{ getTitle }}</div>
		
		<ul class="auth-possibilities-list">
			<li v-for="item in getItems" class="auth-possibilities-item" :key="item">
				<img :src="icoPossibilitie" :alt="item" class="auth-possibilities-item__ico">
				{{ item }}
			</li>
		</ul>
    </div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { LANG_RU, LANG_EN } from '@/services/languageService'

	export default {
		name: 'Possibilities',
		data: () => ({ 
			imgBg: require('@/assets/img/possibilities-bg.png'), 
			icoPossibilitie: require('@/assets/img/possibilities-ico.svg'), 
			LANG_RU: LANG_RU,
			LANG_EN: LANG_EN,
			title: 'Возможности',
			titleEn: 'Features',
			items: [
				'Предварительный расчет стоимости',
				'On-line DRC и DFM проверка плат',
				'Оформление и оплата заказов',
				'Мониторинг состояния заказов',
				'Просмотр и скачивание документов'
			],
			itemsEn: [
				'Preliminary cost calculation',
				'Online DRC и DFM PCB testing',
				'Ordering and payment',
				'Online order tracking',
				'View and download docs'
			]
		}),
		computed: {
			...mapGetters([
                'CURRENT_LANGUAGE'
            ]),
			getItems() {
				if(this.CURRENT_LANGUAGE === this.LANG_EN){
					return this.itemsEn;
				}
				return this.items
			},
			getTitle() {
				if(this.CURRENT_LANGUAGE === this.LANG_EN){
					return this.titleEn;
				}
				return this.title
			}
		}
	}
</script>

<style lang="scss">
	.auth-possibilities{
		padding: 50px 36px;
		width: 364px;
		max-width: 100%;
		background: linear-gradient(90deg, #14B775 0%, #3D8FB4 100%);
		color: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;

		& > *{
			z-index: 2;
		}

		&-bg{
			z-index: 1;
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0px;
			top: 0px;
			opacity: 0.5;
		}

		&__title{
			font-weight: 500;
			font-size: 20px;
			line-height: 1.3;
			margin-bottom: 40px;
		}
		&-list{
			
		}
		&-item{
			margin-bottom: 20px;
			position: relative;
			font-size: 14px;
			line-height: 1.3;
			display: flex;
			align-items: center;

			&__ico{
				margin-right: 10px;
			}
		}
	}

	@media(max-width: 980px){
		.auth-possibilities{
			width: 100%;
			order: 2;
		}
	}
</style>
