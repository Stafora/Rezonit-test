<template>
	<div>
		<form class="adding-board-file" ref="fileform">

			<!-- Добавление файла -->
			<label v-if="!form.fileBoard && !isEndLoadingFile" class="adding-board-file-preload">
				<input type="file" v-on:change="fileBoardChange">

				<div class="adding-board-file-preload__text">
					Перетащите файл .svg в эту область<br> 
					или нажмите сюда для выбора файла
				</div>
				<div class="adding-board-file-preload__ico">
					<svg width="48" height="32" viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg">
						<path d="M38.7 12.08C38.0282 8.67544 36.1952 5.60972 33.5141 3.40649C30.8331 1.20327 27.4702 -0.000784485 24 3.83473e-07C18.22 3.83473e-07 13.2 3.28 10.7 8.08C7.76047 8.39766 5.04201 9.79042 3.06698 11.9906C1.09194 14.1909 -0.000343404 17.0434 8.09855e-08 20C8.09855e-08 26.62 5.38 32 12 32H38C43.52 32 48 27.52 48 22C48 16.72 43.9 12.44 38.7 12.08ZM28 18V26H20V18H14L24 8L34 18H28Z" fill="#2AA396"/>
					</svg>
				</div>
			</label>

			<!-- Ошибки -->
			<div v-if="form.fileBoard" class="adding-board-file-progress">
				<div class="adding-board-file-progress__ico">
					<svg v-show="$v.form.fileBoard.$invalid" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="32" height="32" rx="4" fill="#ED1C24"/>
						<path d="M14.5 20.5C14.5 20.1022 14.658 19.7206 14.9393 19.4393C15.2206 19.158 15.6022 19 16 19C16.3978 19 16.7794 19.158 17.0607 19.4393C17.342 19.7206 17.5 20.1022 17.5 20.5C17.5 20.8978 17.342 21.2794 17.0607 21.5607C16.7794 21.842 16.3978 22 16 22C15.6022 22 15.2206 21.842 14.9393 21.5607C14.658 21.2794 14.5 20.8978 14.5 20.5Z" fill="white"/>
						<path d="M15.016 10.82C15.0577 10.5894 15.1791 10.3809 15.359 10.2307C15.5388 10.0804 15.7657 9.99817 16 9.99817C16.2343 9.99817 16.4612 10.0804 16.641 10.2307C16.8209 10.3809 16.9423 10.5894 16.984 10.82L17 11V16L16.984 16.18C16.9423 16.4106 16.8209 16.6191 16.641 16.7694C16.4612 16.9196 16.2343 17.0018 16 17.0018C15.7657 17.0018 15.5388 16.9196 15.359 16.7694C15.1791 16.6191 15.0577 16.4106 15.016 16.18L15 16V11L15.016 10.82Z" fill="white"/>
						<path d="M26 16C26 18.6522 24.9464 21.1957 23.0711 23.0711C21.1957 24.9464 18.6522 26 16 26C13.3478 26 10.8043 24.9464 8.92893 23.0711C7.05357 21.1957 6 18.6522 6 16C6 13.3478 7.05357 10.8043 8.92893 8.92893C10.8043 7.05357 13.3478 6 16 6C18.6522 6 21.1957 7.05357 23.0711 8.92893C24.9464 10.8043 26 13.3478 26 16ZM24 16C24 13.8783 23.1571 11.8434 21.6569 10.3431C20.1566 8.84285 18.1217 8 16 8C13.8783 8 11.8434 8.84285 10.3431 10.3431C8.84285 11.8434 8 13.8783 8 16C8 18.1217 8.84285 20.1566 10.3431 21.6569C11.8434 23.1571 13.8783 24 16 24C18.1217 24 20.1566 23.1571 21.6569 21.6569C23.1571 20.1566 24 18.1217 24 16Z" fill="white"/>
					</svg>
					<svg v-show="!$v.form.fileBoard.$invalid" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="32" height="32" rx="4" fill="#2AA396"/>
						<path d="M26.5 21.25H22C21.6022 21.25 21.2206 21.092 20.9393 20.8107C20.658 20.5294 20.5 20.1478 20.5 19.75V12.25C20.5 11.8522 20.658 11.4706 20.9393 11.1893C21.2206 10.908 21.6022 10.75 22 10.75H26.5V12.25H22V19.75H25V16.75H23.5V15.25H26.5V21.25Z" fill="white"/>
						<path d="M17.5 10.75L16 20.5L14.5 10.75H13L14.89 21.25H17.11L19 10.75H17.5Z" fill="white"/>
						<path d="M10 21.25H5.5V19.75H10V16.75H7C6.60218 16.75 6.22064 16.592 5.93934 16.3107C5.65804 16.0294 5.5 15.6478 5.5 15.25V12.25C5.5 11.8522 5.65804 11.4706 5.93934 11.1893C6.22064 10.908 6.60218 10.75 7 10.75H11.5V12.25H7V15.25H10C10.3978 15.25 10.7794 15.408 11.0607 15.6893C11.342 15.9706 11.5 16.3522 11.5 16.75V19.75C11.5 20.1478 11.342 20.5294 11.0607 20.8107C10.7794 21.092 10.3978 21.25 10 21.25Z" fill="white"/>
					</svg>
				</div>
				<div class="adding-board-file-progress-info">
					<div class="adding-board-file-progress__file-name">{{ form.fileBoard.name }}</div>
					<div class="adding-board-file-progress-bar" v-show="isLoadProcessImage && percentLoadFile >= 0 && !$v.form.fileBoard.$invalid">
						<div class="adding-board-file-progress-bar-percent" :style="{width: percentLoadFile+'%'}"></div>
					</div>
					<div class="adding-board-file-progress__succes-text" v-if="isEndLoadingFile">
						Файл загружен, можете переходить к следующему шагу
					</div>
					<div class="adding-board-file-progress__succes-text" v-if="!$v.form.fileBoard.$invalid && !isEndLoadingFile">
						Файл прошёл валидацию, идёт загрузка ...
					</div>
					<div class="adding-board-file-progress__error-text" v-if="!$v.form.fileBoard.chekFile">
						Файл не загружен
					</div>
					<div class="adding-board-file-progress__error-text" v-if="!$v.form.fileBoard.checkSize">
						Размер файла превышает {{ MAX_SIZE_FILE }} мб
					</div>
					<div class="adding-board-file-progress__error-text" v-if="!$v.form.fileBoard.checkSVG">
						Формат файла не соответстует требованиям, загрузите svg файл
					</div>
				</div>
				<div class="adding-board-file-progress-cancel" v-on:click="deleteFileBoard">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10 0.25C4.624 0.25 0.25 4.624 0.25 10C0.25 15.376 4.624 19.75 10 19.75C15.376 19.75 19.75 15.376 19.75 10C19.75 4.624 15.376 0.25 10 0.25ZM10 1.75C14.5653 1.75 18.25 5.43475 18.25 10C18.25 14.5653 14.5653 18.25 10 18.25C5.43475 18.25 1.75 14.5653 1.75 10C1.75 5.43475 5.43475 1.75 10 1.75ZM7.165 6.085L6.085 7.165L8.923 10L6.0865 12.835L7.1665 13.915L10 11.0778L12.835 13.9127L13.915 12.835L11.0778 10L13.9127 7.165L12.835 6.085L10 8.923L7.165 6.0865V6.085Z" />
					</svg>
				</div>
			</div>

			<!-- Ошибки -->
			<div v-if="isEndLoadingFile && fileBoardStore" class="adding-board-file-progress">
				<div class="adding-board-file-progress__ico">
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="32" height="32" rx="4" fill="#2AA396"/>
						<path d="M26.5 21.25H22C21.6022 21.25 21.2206 21.092 20.9393 20.8107C20.658 20.5294 20.5 20.1478 20.5 19.75V12.25C20.5 11.8522 20.658 11.4706 20.9393 11.1893C21.2206 10.908 21.6022 10.75 22 10.75H26.5V12.25H22V19.75H25V16.75H23.5V15.25H26.5V21.25Z" fill="white"/>
						<path d="M17.5 10.75L16 20.5L14.5 10.75H13L14.89 21.25H17.11L19 10.75H17.5Z" fill="white"/>
						<path d="M10 21.25H5.5V19.75H10V16.75H7C6.60218 16.75 6.22064 16.592 5.93934 16.3107C5.65804 16.0294 5.5 15.6478 5.5 15.25V12.25C5.5 11.8522 5.65804 11.4706 5.93934 11.1893C6.22064 10.908 6.60218 10.75 7 10.75H11.5V12.25H7V15.25H10C10.3978 15.25 10.7794 15.408 11.0607 15.6893C11.342 15.9706 11.5 16.3522 11.5 16.75V19.75C11.5 20.1478 11.342 20.5294 11.0607 20.8107C10.7794 21.092 10.3978 21.25 10 21.25Z" fill="white"/>
					</svg>
				</div>
				<div class="adding-board-file-progress-info">
					<div class="adding-board-file-progress__file-name">{{ fileBoardStore.file_name }}</div>
					<div class="adding-board-file-progress__succes-text">
						Файл загружен, можете переходить к следующему шагу
					</div>
				</div>
				<div class="adding-board-file-progress-cancel" v-on:click="deleteFileBoard">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10 0.25C4.624 0.25 0.25 4.624 0.25 10C0.25 15.376 4.624 19.75 10 19.75C15.376 19.75 19.75 15.376 19.75 10C19.75 4.624 15.376 0.25 10 0.25ZM10 1.75C14.5653 1.75 18.25 5.43475 18.25 10C18.25 14.5653 14.5653 18.25 10 18.25C5.43475 18.25 1.75 14.5653 1.75 10C1.75 5.43475 5.43475 1.75 10 1.75ZM7.165 6.085L6.085 7.165L8.923 10L6.0865 12.835L7.1665 13.915L10 11.0778L12.835 13.9127L13.915 12.835L11.0778 10L13.9127 7.165L12.835 6.085L10 8.923L7.165 6.0865V6.085Z" />
					</svg>
				</div>
			</div>

		</form>
		<div class="adding-board-buttons">
			<div class="adding-board-buttons__btn btn btn-default" :class="{disabled: !isSuccessNextBtn}" v-on:click="nextStep"><span>Далее</span></div>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'
	import { AddingBoardStorageServices } from '../../services/AddingBoardStorageServices';

	export default {
		name: 'AddingBoardFile',
		params: {
			setStep: {
				type: Function
			}
		},
		data: () => ({
			form: {
				fileBoard: null
			},
			CURRENT_STEP: 1,
			MAX_SIZE_FILE: 5,
			isSuccessNextBtn: false,
			isLoadProcessImage: false,
			percentLoadFile: null,
			LOAD_IMAGE_PERCENT_STEP_ONE: 30,
			LOAD_IMAGE_PERCENT_STEP_TWO: 100,
			isEndLoadingFile: false,
			fileBoardStore: AddingBoardStorageServices.getItem('file') || null,
			dragAndDropCapable: false
		}),
		created: function (){
			if(this.fileBoardStore){
				this.isEndLoadingFile = true
				this.$emit('setStep', this.CURRENT_STEP + 1)
				this.isSuccessNextBtn = true
			}
		},
		mounted(){
			// check browser for drag/drop and load image
			this.dragAndDropCapable = this.determineDragAndDropCapable();
			if(this.dragAndDropCapable){
				['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach(function(evt) {
					this.$refs.fileform.addEventListener(evt, function(e){
						e.preventDefault()
						e.stopPropagation()
					}, false)
				}.bind(this))

				this.$refs.fileform.addEventListener('drop', function(e){
					this.form.fileBoard = e.dataTransfer.files[0]
				}.bind(this))
			}
		},
		watch: {
			'$v.form.fileBoard.$invalid': function _watch$vFileBoard$invalid (value) {
				this.loadFileToServer();
			}
		},
		computed: {
            ...mapGetters([
                'GET_BOARD_FILE'
            ])
        },
		methods: {
			...mapActions([
                'LOAD_BOARD_FILE',
				'DELETE_BOARD_FILE'
            ]),
			fileBoardChange(e) {
				const files = e.target.files || e.dataTransfer.files;
				if (!files.length){
					return;
				}
				this.form.fileBoard = files[0]
			},
			deleteFileBoard() {
				this.form.fileBoard = null
				this.isLoadProcessImage = false
				this.fileBoardStore = null
				this.isEndLoadingFile = false

				const file = AddingBoardStorageServices.getItem('file');
				if(file){
					this.DELETE_BOARD_FILE(file.id)
					AddingBoardStorageServices.deleteItem('file')
				}
				this.isSuccessNextBtn = false
			},
			loadFileToServer() {
				if(!this.$v.$invalid){
					this.setProcesLoadingImage(this.LOAD_IMAGE_PERCENT_STEP_ONE)
					
					const file = this.form.fileBoard
					const formData = new FormData()
					formData.append('file', file)

					const result = this.LOAD_BOARD_FILE(formData)
					
					result.then((resp) => {
						this.setProcesLoadingImage(this.LOAD_IMAGE_PERCENT_STEP_TWO)
						this.setProcesLoadingImage(null)
						this.isEndLoadingFile = true
						this.isSuccessNextBtn = true
					})
				}
			},
			setProcesLoadingImage(percent) {
				const self = this;

				if(this.percentLoadFile == null){
					this.percentLoadFile = 0;
				}
				if(percent == null){
					setTimeout(function() {
						self.percentLoadFile = null;
						self.isLoadProcessImage = false;
					}, 400)
					return
				}
				this.isLoadProcessImage = true;
				
				setTimeout(function() {
					self.percentLoadFile = percent;
				}, 200)
			},
			nextStep() {
				if(this.isSuccessNextBtn){
					this.$emit('setStep', this.CURRENT_STEP + 1)
				}
			},

			// dragan drop file
			determineDragAndDropCapable(){
				var div = document.createElement('div');
				return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
			}
		},
		validations: {
			form: {
				fileBoard: {
					chekFile() {
						if(this.form.fileBoard){
							return this.form.fileBoard.length !== 0
						}
						return false;
					},
					checkSize() {
						if(this.form.fileBoard){
							return ((this.form.fileBoard.size / 1024) / 1024) < this.MAX_SIZE_FILE
						}
						return false;
					},
					checkSVG() {
						if(this.form.fileBoard){
							return this.form.fileBoard.type === 'image/svg+xml'
						}
						return false;
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	.adding-board-file{
		width: 100%;
		height: 288px;
		background: linear-gradient(0deg, rgba(42, 163, 150, 0.03), rgba(42, 163, 150, 0.03)), #FFFFFF;
		border: 1px dashed #2AA396;
		box-sizing: border-box;
		border-radius: 4px;
		@include flex-center;
		flex-direction: column;
		padding: 38px;

		&-preload{
			width: 100%;
			height: 100%;
			@include flex-center;
			flex-direction: column;
			
			&__text{
				font-size: 14px;
				line-height: 24px;
				color: #222222;
				margin-bottom: 15px;
			}
			&__ico{

			}

			input{
				display: none;
			}
		}

		&-progress{
			display: flex;
			align-items: center;
			width: 100%;
			margin: 10px 0px;

			&__ico{
				width: 32px;
				display: flex;
			}
			&-info{
				width: calc(100% - 62px);
				padding-left: 6px;
			}
			&__file-name{
				font-size: 14px;
				line-height: 1.3;
				margin-bottom: 5px;
			}
			&-bar{
				height: 6px;
				width: 100%;
				background: #E3EBE7;
				border-radius: 4px;
				position: relative;
				overflow: hidden;
				margin-bottom: 5px;

				&-percent{
					background: #15B776;
					position: absolute;
					left: 0px;
					top: 0px;
					height: 100%;
					transition: 0.4s;
				}
			}
			&__succes-text{
				font-size: 10px;
				line-height: 1.3;
				color: #3C91B3;
			}
			&__error-text{
				font-size: 10px;
				line-height: 1.3;
				color: #ED1C24;
			}
			&-cancel{
				margin-left: auto;
				cursor: pointer;
				
				svg{
					fill: #E3EBE7;
					transition: 0.3s;
				}

				&:hover{
					svg{
						fill: #2AA396;
					}
				}
			}
		}

	}
</style>
