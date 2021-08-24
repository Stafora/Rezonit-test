import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// style
import './assets/scss/fonts.scss'
import './assets/scss/common.scss'
import './assets/scss/form-element.scss'
import './assets/scss/buttons.scss'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
