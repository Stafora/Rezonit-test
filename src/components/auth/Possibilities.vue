<template>
    <div class="auth-possibilities">
		<div class="auth-possibilities-bg" :style="{ backgroundImage: `url('${imgBg}')` }"></div>
        <div class="auth-possibilities__title">Возможности</div>
		
		<ul class="auth-possibilities-list">
			<li v-for="item in items" class="auth-possibilities-item" :key="item">
				<img :src="icoPossibilitie" :alt="item" class="auth-possibilities-item__ico">
				{{ item }}
			</li>
		</ul>
    </div>
</template>

<script>
	export default {
		name: 'Possibilities',
		data: () => ({ 
			imgBg: require('@/assets/img/possibilities-bg.png'), 
			icoPossibilitie: require('@/assets/img/possibilities-ico.svg'), 
			items: [
				'Предварительный расчет стоимости',
				'On-line DRC и DFM проверка плат',
				'Оформление и оплата заказов',
				'Мониторинг состояния заказов',
				'Просмотр и скачивание документов'
			]
		})

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
			margin-bottom: 16px;
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
</style>
