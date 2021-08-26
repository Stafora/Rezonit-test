import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import VueMeta from 'vue-meta'

// style
import './assets/scss/fonts.scss'
import './assets/scss/common.scss'
import './assets/scss/form-element.scss'
import './assets/scss/buttons.scss'

Vue.prototype.$axios = Axios;
Vue.prototype.$store = store;

const token = localStorage.getItem('token')
if (token) {
	Vue.prototype.$axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

Vue.config.productionTip = false

Vue.use(VueMeta)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
