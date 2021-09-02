<template>
    <popup-modal ref="popup">
        <div class="popup__title">{{ title }}</div>
        <div class="popup__message">{{ message }}</div>
        <div class="popup__btns">
			<div class="ok-btn btn btn-border" @click="_confirm"><span>{{ okButton }}</span></div>
            <div class="cancel-btn btn btn-border" @click="_cancel"><span>{{ cancelButton }}</span></div>
        </div>
    </popup-modal>
</template>

<script>
	import PopupModal from './PopupModal.vue'

	export default {
		name: 'ConfirmDialogue',
		/**
		 * DATA
		 */
		data: () => ({
			title: undefined,
			message: undefined,
			okButton: 'Да', 
			cancelButton: 'Нет',
			resolvePromise: undefined,
			rejectPromise: undefined
		}),
		/**
		 * COMPONENTS
		 */
		components: { 
			PopupModal 
		},
		/**
		 * METHODS
		 */
		methods: {
			/**
			 * @param {Object} opts with title, message, okButton - string
			 */
			show(opts = {}) {
				this.title = opts.title
				this.message = opts.message
				this.okButton = opts.okButton
				if (opts.cancelButton) {
					this.cancelButton = opts.cancelButton
				}
				this.$refs.popup.open()
				return new Promise((resolve, reject) => {
					this.resolvePromise = resolve
					this.rejectPromise = reject
				})
			},
			_confirm() {
				this.$refs.popup.close()
				this.resolvePromise(true)
			},
			_cancel() {
				this.$refs.popup.close()
				this.resolvePromise(false)
			}
		}
	}
</script>

<style scoped>
	.ok-btn, .cancel-btn{
		margin: 0px 8px;
		width: 56px;
	}
	.popup__title{
		font-size: 16px;
		font-weight: 500;
		line-height: 1.4;
		color: #525B53;
		text-align: center;
	}
	.popup__message{
		font-size: 14px;
		line-height: 1.6;
		color: #525B53;
		text-align: center;
	}
	.popup__btns{
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 15px
	}
</style>
