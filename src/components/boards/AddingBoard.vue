<template>
    <div class="adding-board" :class="{active: isOpenPopup}">
		<div class="adding-board-content">
			<div class="adding-board__close" v-on:click="closePopup">
				<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1.29183 1.29208C1.38473 1.19895 1.49508 1.12507 1.61657 1.07465C1.73806 1.02424 1.8683 0.998291 1.99983 0.998291C2.13137 0.998291 2.26161 1.02424 2.3831 1.07465C2.50459 1.12507 2.61494 1.19895 2.70783 1.29208L7.99983 6.58608L13.2918 1.29208C13.3848 1.1991 13.4952 1.12535 13.6167 1.07503C13.7381 1.02471 13.8683 0.998815 13.9998 0.998815C14.1313 0.998815 14.2615 1.02471 14.383 1.07503C14.5045 1.12535 14.6149 1.1991 14.7078 1.29208C14.8008 1.38505 14.8746 1.49543 14.9249 1.61691C14.9752 1.73839 15.0011 1.86859 15.0011 2.00008C15.0011 2.13157 14.9752 2.26177 14.9249 2.38325C14.8746 2.50472 14.8008 2.6151 14.7078 2.70808L9.41383 8.00008L14.7078 13.2921C14.8008 13.3851 14.8746 13.4954 14.9249 13.6169C14.9752 13.7384 15.0011 13.8686 15.0011 14.0001C15.0011 14.1316 14.9752 14.2618 14.9249 14.3832C14.8746 14.5047 14.8008 14.6151 14.7078 14.7081C14.6149 14.8011 14.5045 14.8748 14.383 14.9251C14.2615 14.9754 14.1313 15.0013 13.9998 15.0013C13.8683 15.0013 13.7381 14.9754 13.6167 14.9251C13.4952 14.8748 13.3848 14.8011 13.2918 14.7081L7.99983 9.41408L2.70783 14.7081C2.61486 14.8011 2.50448 14.8748 2.383 14.9251C2.26152 14.9754 2.13132 15.0013 1.99983 15.0013C1.86835 15.0013 1.73815 14.9754 1.61667 14.9251C1.49519 14.8748 1.38481 14.8011 1.29183 14.7081C1.19886 14.6151 1.12511 14.5047 1.07479 14.3832C1.02447 14.2618 0.99857 14.1316 0.99857 14.0001C0.99857 13.8686 1.02447 13.7384 1.07479 13.6169C1.12511 13.4954 1.19886 13.3851 1.29183 13.2921L6.58583 8.00008L1.29183 2.70808C1.19871 2.61519 1.12482 2.50484 1.07441 2.38335C1.024 2.26186 0.998047 2.13161 0.998047 2.00008C0.998047 1.86854 1.024 1.7383 1.07441 1.61681C1.12482 1.49532 1.19871 1.38497 1.29183 1.29208Z" fill="#E3EBE7"/>
				</svg>
			</div>

			<div class="adding-board__title">Файл печатной платы</div>
			<div class="adding-board-progress">
				<div class="adding-board-progress__step" v-bind:class="{current: currentStep == STEP_IMAGE, passed: currentStep > STEP_IMAGE}"></div>
				<div class="adding-board-progress__step" v-bind:class="{current: currentStep == STEP_PARAMS, passed: currentStep > STEP_PARAMS}"></div>
				<div class="adding-board-progress__step" v-bind:class="{current: currentStep == STEP_BUILDING}"></div>
			</div>

			<div class="adding-board-step" v-bind:class="{active: currentStep == STEP_IMAGE}">
				<AddingBoardFile
					v-on:setStep="setStep"
					v-on:closePopup="closePopup"
				/>
			</div>
			<div class="adding-board-step" v-bind:class="{active: currentStep == STEP_PARAMS}">
				<AddingBoardParams 
					v-on:setStep="setStep"
				/>
			</div>
			<div class="adding-board-step" v-bind:class="{active: currentStep == STEP_BUILDING}">
				<AddingBoardBuilding 
					v-on:setStep="setStep"
					v-on:closePopup="closePopup"
					v-on:reloadCardsListParent="reloadCardsListParent"
					v-on:finishPopupAllStep="finishPopupAllStep"
                    v-on:openResultPopup="openResultPopup"
				/>
			</div>

			<AddingBoardResultPopup
                v-if="isActiveResultPopup"
                v-on:closePopup="closePopup"
                v-on:closeResultPopup="closeResultPopup"
            />

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
		data: () => ({
			currentStep: 1,
			STEP_IMAGE: 1,
			STEP_PARAMS: 2,
			STEP_BUILDING: 3,
            isActiveResultPopup: false
		}),
		props: {
			isOpenPopup: {
				type: Boolean,
				default: false
			},
			openAddPopup: {
				type: Function
			},
			reloadCardsList: {
				type: Function
			},
			changeIssetDraft: {
				type: Function
			}
		},
		components: {
			AddingBoardFile,
			AddingBoardParams,
			AddingBoardBuilding,
			AddingBoardResultPopup
		},
		methods: {
            openResultPopup() {
                this.isActiveResultPopup = true
            },
            closeResultPopup() {
                this.isActiveResultPopup = false
            },
			closePopup() {
				this.$emit('openAddPopup')
				this.$emit('changeIssetDraft')
			},
			changeStep() {
				switch(this.currentStep) {
					case this.STEP_IMAGE:
						break;
					case this.STEP_PARAMS:
						break;
					case this.STEP_BUILDING:
						break;
				}
			},
			// inner function
			setStep(step) {
				this.currentStep = step
				this.changeStep()
			},
			reloadCardsListParent() {
				this.$emit('reloadCardsList')
			},
			finishPopupAllStep() {
				this.$emit('finishPopupAllStep')
			}
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
		align-items: center;
		justify-content: center;
		flex-direction: center;
		display: none;
		
		&.active{
			display: flex;
		}

		&__close{
			position: absolute;
			right: 17px;
			top: 17px;
			cursor: pointer;
		}

		&-content{
			position: relative;
			background: #FFFFFF;
			box-shadow: 0px 10px 92px rgba(60, 145, 179, 0.1), 0px 10px 20px rgba(60, 145, 179, 0.1), 0px 5px 10px rgba(60, 145, 179, 0.1), 0px 5px 5px rgba(60, 145, 179, 0.1), 0px 2px 3px rgba(60, 145, 179, 0.1);
			width: 960px;
			height: auto;
			padding: 24px 32px;
			min-height: 540px;
			max-height: 600px;
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
					background: #fff;
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

            &-stepTwo{
                margin-top: 24px;
            }

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
            &-7{
				width: 58.333333%;
			}
			&-8{
				width: 66.666666%;
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

			&-wrapper{
				position: relative
			}

			&__error{
				font-size: 10px;
				color: red;
				position: absolute;
				top: 37px;
			}

			$parent: &;
            
            &.success{
				input{
					border-color: #15B776 !important;
				}
			}
            &.disabled{
				opacity: 0.3;

				&:hover, &:focus-within{
					#{$parent}{
						&__title{
							font-size: 14px !important;
							padding-left: 14px !important;
							padding-right: 14px !important;
							padding-left: 14px !important;
							padding-right: 14px !important;
							height: 100% !important;
                            background: none !important;
							left: 0px !important;
							top: 0px !important;
						}
					}
                    &.is-data{
                        #{$parent}{
                            &__title{
                                font-size: 10px !important;
                                padding-left: 8px !important;
                                padding-right: 8px !important;
                                height: 14px !important;
                                top: -8px !important;
                                left: 10px !important;
                                background: #fff !important;
                            }
                        }
                    }
				}
				#{$parent}{
					&-info-error{
						svg{
							fill: #A6B0AF !important;
						}
					}
				}
				input{
					border-color: #A6B0AF !important;
				}
			}
            
			&.error{
				input{
					border-color: red !important;
				}
			}
			&.success, &.error{
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
                            z-index: 2;
						}
					}
				}
			}

			&:hover, &:focus-within {
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
                input{
                    border-color: #3C91B3;
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
				order: -1;
			}
			input{
				width: 100%;
				height: 100%;
				height: 36px;
				padding-left: 14px;
				padding-right: 24px;
				border: 1px solid #A6B0AF;
				border-radius: 4px;
				-webkit-appearance: none;
				-moz-appearance:textfield;
                caret-color: #3C91B3;

				&::-webkit-outer-spin-button,
				&::-webkit-inner-spin-button{
					-webkit-appearance: none;
				}

				&.is-data ~ #{$parent}__title{
					font-size: 10px;
					padding-left: 8px;
					padding-right: 8px;
					height: 14px;
					top: -8px;
					left: 10px;
					background: #fff;
				}
			}
			&__tooltip{
				width: 16px;
				height: 16px;
				position: absolute;
				top: 50%;
				right: 8px;
				margin-top: -8px;
			}
			&-info{
				&-error{
					width: 16px;
					height: 16px;
					position: absolute;
					top: 50%;
					right: 8px;
					margin-top: -8px;
					cursor: pointer;

					$parent: &;

					&.active{
						#{$parent}__message{
							opacity: 1;
							visibility: visible;
						}
					}
					&.error{
						svg{
							fill: red;
						}
					}

					svg{
						fill: #A6B0AF;
					}

					&__message{
						position: absolute;
						top: 23px;
						background: red;
						color: #fff;
						width: 160px;
						left: -75px;
						font-size: 11px;
						z-index: 2;
						text-align: center;
						border-radius: 2px;
						padding: 3px;
						opacity: 0;
						visibility: hidden;
						transition: 0.3s;
						
						&::before{
							content: '';
							position: absolute;
							border: 6px solid transparent; 
							border-bottom: 6px solid red;
							top: -11px;
							left: 50%;
							margin-left: -3px;
						}
					}
				}
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
						left: 11px;
					}
				}
				&:disabled + #{$parent}-toggle{
					background: #fff;

					&::before{
						background: #E3EBE7;
					}
				}
			}
			&-toggle{
				width: 30px;
				height: 18px;
				border-radius: 18px;
				border: 1px solid #2AA396;
				position: relative;
				background: #fff;
				transition: 0.2s;

				&::before{
					content: '';
					width: 16px;
					height: 16px;
					position: absolute;
					top: 0px;
					left: 0px;
					background: #2AA396;
					border-radius: 18px;
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
			&-hint{
				font-size: 12px;
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

                &:hover{
                    border-color: #3C91B3;
                }

				&:disabled{
					opacity: 0.3;
				}
				&.success{
					border-color: #15B776;
					color: #222;
				}
			}
			input[type="range"]{
				-webkit-appearance: none;
				margin: 14px 0;
				width: 100%;

				&:focus {
					outline: none;
				}
				&::-webkit-slider-runnable-track {
					width: 100%;
					height: 8.4px;
					cursor: pointer;
					background: #2AA396;
					border-radius: 1.3px;
				}
				&::-webkit-slider-thumb {
					border: 1px solid #000000;
					height: 16px;
					width: 16px;
					border-radius: 3px;
					background: #ffffff;
					cursor: pointer;
					-webkit-appearance: none;
					margin-top: -4px;
				}
				&:focus::-webkit-slider-runnable-track {
					background: #2AA396;
				}
				&::-moz-range-track {
					width: 100%;
					height: 8.4px;
					cursor: pointer;
					background: #2AA396;
					border-radius: 1.3px;
				}
				&::-moz-range-thumb {
					height: 36px;
					width: 16px;
					border-radius: 3px;
					background: #ffffff;
					cursor: pointer;
				}
				&::-ms-track {
					width: 100%;
					height: 8.4px;
					cursor: pointer;
					background: transparent;
					border-color: transparent;
					border-width: 16px 0;
					color: transparent;
				}
				&::-ms-fill-lower {
					background: #2AA396;
					border-radius: 2.6px;
				}
				&::-ms-fill-upper {
					background: #2AA396;
					border-radius: 2.6px;
				}
				&::-ms-thumb {
					height: 36px;
					width: 16px;
					border-radius: 3px;
					background: #ffffff;
					cursor: pointer;
				}
				&:focus::-ms-fill-lower {
					background: #2AA396;
				}
				input[type=range]:focus::-ms-fill-upper {
					background: #2AA396;
				}
			}
		}
	}

	@media(max-width: 980px) {
		.adding-board{
			&-content{
				padding: 20px 15px;
				height: 100vh;
				overflow: scroll;
			}
			&-col{
				width: 100%;
			}
			&-input{
				margin-bottom: 15px;

				&-info{
					&-error{
						&__message{
							right: 25px;
							top: -20px;
							left: auto;

							&::before{
								top: 22px;
								left: auto;
								right: -10px;
								margin-left: -3px;
								transform: rotate(90deg);
							}
						}
					}
				}
			}
			&-checkbox{
				padding: 5px 15px;
			}
		}
	}
</style>
