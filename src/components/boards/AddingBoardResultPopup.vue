<template>
  <div class="adding-board-result-popup" v-bind:class="{active: isActive}">
		<div class="adding-board-result-popup-content">
			<div class="adding-board-result-popup-content__close">
				<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1.29183 1.29208C1.38473 1.19895 1.49508 1.12507 1.61657 1.07465C1.73806 1.02424 1.8683 0.998291 1.99983 0.998291C2.13137 0.998291 2.26161 1.02424 2.3831 1.07465C2.50459 1.12507 2.61494 1.19895 2.70783 1.29208L7.99983 6.58608L13.2918 1.29208C13.3848 1.1991 13.4952 1.12535 13.6167 1.07503C13.7381 1.02471 13.8683 0.998815 13.9998 0.998815C14.1313 0.998815 14.2615 1.02471 14.383 1.07503C14.5045 1.12535 14.6149 1.1991 14.7078 1.29208C14.8008 1.38505 14.8746 1.49543 14.9249 1.61691C14.9752 1.73839 15.0011 1.86859 15.0011 2.00008C15.0011 2.13157 14.9752 2.26177 14.9249 2.38325C14.8746 2.50472 14.8008 2.6151 14.7078 2.70808L9.41383 8.00008L14.7078 13.2921C14.8008 13.3851 14.8746 13.4954 14.9249 13.6169C14.9752 13.7384 15.0011 13.8686 15.0011 14.0001C15.0011 14.1316 14.9752 14.2618 14.9249 14.3832C14.8746 14.5047 14.8008 14.6151 14.7078 14.7081C14.6149 14.8011 14.5045 14.8748 14.383 14.9251C14.2615 14.9754 14.1313 15.0013 13.9998 15.0013C13.8683 15.0013 13.7381 14.9754 13.6167 14.9251C13.4952 14.8748 13.3848 14.8011 13.2918 14.7081L7.99983 9.41408L2.70783 14.7081C2.61486 14.8011 2.50448 14.8748 2.383 14.9251C2.26152 14.9754 2.13132 15.0013 1.99983 15.0013C1.86835 15.0013 1.73815 14.9754 1.61667 14.9251C1.49519 14.8748 1.38481 14.8011 1.29183 14.7081C1.19886 14.6151 1.12511 14.5047 1.07479 14.3832C1.02447 14.2618 0.99857 14.1316 0.99857 14.0001C0.99857 13.8686 1.02447 13.7384 1.07479 13.6169C1.12511 13.4954 1.19886 13.3851 1.29183 13.2921L6.58583 8.00008L1.29183 2.70808C1.19871 2.61519 1.12482 2.50484 1.07441 2.38335C1.024 2.26186 0.998047 2.13161 0.998047 2.00008C0.998047 1.86854 1.024 1.7383 1.07441 1.61681C1.12482 1.49532 1.19871 1.38497 1.29183 1.29208Z" fill="#E3EBE7"/>
				</svg>
			</div>

			<div class="adding-board-result-popup-content__title">Проверка печатной платы</div>
			<div class="adding-board-result-popup-content__description">Идет проверка печатной платы. Дождитесь ее завершения</div>

			<div class="adding-board-result-popup-content-left">
				<ul class="adding-board-result-popup-content-process">
					<li class="adding-board-result-popup-content-process-item success">Определение слоев</li>
					<li class="adding-board-result-popup-content-process-item success">Импорт файлов</li>
					<li class="adding-board-result-popup-content-process-item processing">Генерация стека</li>
					<li class="adding-board-result-popup-content-process-item processing">Создание контура</li>
				</ul>
			</div>
			<div class="adding-board-result-popup-content-right">
				<img src="../../assets/img/loader.png" alt="">
			</div>
		</div>
  </div>
</template>

<script>
	export default {
		name: 'AddingBoardResultPopup',
		data: () => ({
			isActive: false
		})
	}
</script>

<style lang="scss">
	.adding-board-result-popup{
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(82, 91, 83, 0.25);
		left: 0px;
		top: 0px;
		@include flex-center;
		z-index: 3;
		display: none;

		&.active{
			display: flex;
		}

		&-content{
			background: #FFFFFF;
			box-shadow: 0px 10px 92px rgba(60, 145, 179, 0.1), 0px 10px 20px rgba(60, 145, 179, 0.1), 0px 5px 10px rgba(60, 145, 179, 0.1), 0px 5px 5px rgba(60, 145, 179, 0.1), 0px 2px 3px rgba(60, 145, 179, 0.1);
			width: 480px;
			padding: 23px 23px;
			position: relative;
			display: flex;
			flex-wrap: wrap;
			align-items: center;

			&__close{
				position: absolute;
				right: 17px;
				top: 17px;
				cursor: pointer;
			}
			&__title{
				font-weight: 500;
				font-size: 20px;
				line-height: 23px;
				color: #2AA396;
				text-align: center;
				margin-bottom: 13px;
				width: 100%;
			}
			&__description{
				font-size: 10px;
				line-height: 1.3;
				color: #525B53;
				margin-bottom: 25px;
				width: 100%;
			}

			&-left{
				width: 50%;
			}
			&-right{
				width: 50%;
				@include flex-center;

				img{
					animation-name: loading;
					animation-duration: 3s;
					animation-timing-function: linear;
					animation-iteration-count: infinite;
				}
			}

			&-process{
				&-item{
					font-size: 12px;
					line-height: 1.3;
					color: #525B53;
					margin-bottom: 12px;
					position: relative;
					padding-left: 30px;

					&::before{
						content: '';
						position: absolute;
						width: 16px;
						height: 16px;
						left: 0px;
						top: 0px;
						background-repeat: no-repeat;
					}

					&.processing{
						&::before{
							background-image: url('../../assets/img/popup-result-processing.svg');
							animation-name: loading;
							animation-duration: 3s;
							animation-timing-function: linear;
							animation-iteration-count: infinite;
						}
					}
					&.success{
						&::before{
							background-image: url('../../assets/img/popup-result-success.svg');
						}
					}
				}
			}
		}
	}
</style>
