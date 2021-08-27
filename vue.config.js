module.exports = {
	css: {
		loaderOptions: {
			scss: {
				prependData: `
					@import "@/assets/scss/_mixins.scss";
					@import "@/assets/scss/_animation.scss";
					@import "@/assets/scss/common.scss";
					@import "@/assets/scss/form-element.scss";
					@import "@/assets/scss/buttons.scss";
				`
			}
		}
	}
}