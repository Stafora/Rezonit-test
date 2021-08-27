<template>
    <div class="adding-board">
		<div class="adding-board-content">
			<div class="adding-board__title">Файл печатной платы</div>
			<div class="adding-board-progress">
				<div class="adding-board-progress__step passed"></div>
				<div class="adding-board-progress__step current"></div>
				<div class="adding-board-progress__step"></div>
			</div>

			<div class="adding-board-step">
				<AddingBoardFile />
			</div>
			<div class="adding-board-step">
				<AddingBoardParams />
			</div>
			<div class="adding-board-step active">
				<AddingBoardBuilding />
			</div>

			<AddingBoardResultPopup />

			<div class="adding-board-buttons">
				<div class="adding-board-buttons__btn btn btn-border">Назад</div>
				<div class="adding-board-buttons__btn btn btn-default disabled">Далее</div>
			</div>

		</div>
	</div>
</template>

<script>
	import AddingBoardFile from './AddingBoardFile'
	import AddingBoardParams from './AddingBoardParams'
	import AddingBoardBuilding from './AddingBoardBuilding'
	import AddingBoardResultPopup from './AddingBoardResultPopup'

	export default {
		name: 'AddingBoard',
		components: {
			AddingBoardFile,
			AddingBoardParams,
			AddingBoardBuilding,
			AddingBoardResultPopup
		}
	}
</script>

<style lang="scss">
	.adding-board{
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(82, 91, 83, 0.25);
		left: 0px;
		top: 0px;
		z-index: 9;
		@include flex-center;
		flex-direction: center;

		&-content{
			background: #FFFFFF;
			box-shadow: 0px 10px 92px rgba(60, 145, 179, 0.1), 0px 10px 20px rgba(60, 145, 179, 0.1), 0px 5px 10px rgba(60, 145, 179, 0.1), 0px 5px 5px rgba(60, 145, 179, 0.1), 0px 2px 3px rgba(60, 145, 179, 0.1);
			width: 960px;
			height: auto;
			padding: 24px 32px;
			min-height: 540px;
		}

		&__title{
			font-weight: 500;
			font-size: 20px;
			color: #2AA396;
			width: 100%;
			text-align: center;
			margin-bottom: 23px;
		}

		&-progress{
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom: 60px;

			&__step{
				margin: 0px 8px;
				background: #E3EBE7;
				height: 4px;
				width: 27%;

				&.passed{
					background: #2AA396;
				}
				&.current{
					border: 1px solid #2AA396;
				}
			}
		}

		&-step{
			width: 100%;
			display: none;

			&.active{
				display: block;
			}
		}

		&-buttons{
			margin-top: 64px;
			display: flex;
			align-items: center;

			&__btn{
				&.btn-default{
					margin-left: auto;
				}
			}
		}

		&-row{
			margin-left: -8px;
			margin-right: -8px;
			width: calc(100% + 16px);
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}
		&-col{
			padding-left: 8px;
			padding-right: 8px;

			&-4{
				width: 33.333333%;
			}
			&-6{
				width: 50%;
			}
		}

		&-input{
			position: relative;
			width: 100%;
			margin-bottom: 30px;
			display: block;

			$parent: &;

			&.disabled{
				opacity: 0.3;

				&:hover, &:focus-within{
					#{$parent}{
						&__title{
							font-size: 14px;
							padding-left: 14px;
							padding-right: 14px;
							padding-left: 14px;
							padding-right: 14px;
							height: 100%;
							background: none;
							left: 0px;
							top: 0px;
						}
					}
				}
			}
			&.success{
				input{
					border-color: #15B776;
				}
			}

			&:hover, &:focus-within{
				#{$parent}{
					&__title{
						font-size: 10px;
						padding-left: 8px;
						padding-right: 8px;
						height: 14px;
						top: -8px;
						left: 10px;
						background: #fff;
					}
				}
			}

			&__title{
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0px;
				left: 0px;
				padding-left: 14px;
				padding-right: 14px;
				z-index: 1;
				display: flex;
				align-items: center;
				font-size: 14px;
				line-height: 1.3;
				transition: 0.3s;
				width: fit-content;
				color: #A6B0AF;
			}
			input{
				width: 100%;
				height: 100%;
				height: 36px;
				padding-left: 14px;
				padding-right: 24px;
				border: 1px solid #A6B0AF;
				border-radius: 4px;
			}
			&__tooltip{
				width: 16px;
				height: 16px;
				position: absolute;
				top: 50%;
				right: 8px;
				margin-top: -8px;
			}
		}

		&-checkbox{
			padding: 10px 16px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			cursor: pointer;
			margin-bottom: 10px;

			$parent: &;

			&.disabled{
				#{$parent}{
					&__title{
						color: #E3EBE7;
					}
					&-toggle{
						border-color: #E3EBE7;

						&::before{
							background: #E3EBE7;
						}
					}
				}
			}

			&__title{
				color: #525B53;
				font-size: 14px;
				line-height: 1.3;
				width: calc(100% - 28px);
			}
			input{
				display: none;

				&:checked + #{$parent}-toggle{
					background: #2AA396;

					&::before{
						background: #fff;
						left: 12px;
					}
				}
			}
			&-toggle{
				width: 28px;
				height: 16px;
				border-radius: 16px;
				border: 1px solid #2AA396;
				position: relative;
				background: #fff;
				transition: 0.2s;

				&::before{
					content: '';
					width: 14px;
					height: 14px;
					position: absolute;
					top: 0px;
					left: 0px;
					background: #2AA396;
					border-radius: 16px;
					transition: 0.2s;
				}
			}
		}

		&-select{
			margin-bottom: 30px;
			position: relative;

			&__title{
				position: absolute;
				font-size: 10px;
				line-height: 1.3;
				padding-left: 8px;
				padding-right: 8px;
				height: 14px;
				top: -8px;
				left: 10px;
				background: #fff;
				width: fit-content;
				color: #A6B0AF;
				transition: 0.3s;
				z-index: 2;
			}
			select{
				width: 100%;
				height: 100%;
				height: 36px;
				padding-left: 14px;
				padding-right: 24px;
				border: 1px solid #A6B0AF;
				border-radius: 4px;
				font-size: 14px;
				line-height: 24px;
				color: #A6B0AF;
				appearance: none;
				position: relative;
				background-image: url('../../assets/img/select.svg');
				background-repeat: no-repeat;
				background-position: center right 15px;
				cursor: pointer;
				z-index: 1;
			}
		}

	}
</style>
