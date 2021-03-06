import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import VueMeta from 'vue-meta'
import Vuelidate from 'vuelidate'
import vueCustomScrollbar from 'vue-custom-scrollbar'

import './filters/date.filter'

// style
import './assets/scss/_mixins.scss'
import './assets/scss/_animation.scss'
import './assets/scss/common.scss'
import './assets/scss/form-element.scss'
import './assets/scss/buttons.scss'
import './assets/scss/fonts.scss'
import 'vue-custom-scrollbar/dist/vueScrollbar.css'

router.beforeEach((to, from, next) => {
	if(to.matched.some(record => record.meta.requiresAuth)) {
		if (store.getters.IS_LOGGED_IN) {
			next()
			return
		}
		next('/auth') 
	} 

	if(to.name === 'Auth' && store.getters.IS_LOGGED_IN){
		next('/')
	}

	next() 
})

Vue.prototype.$axios = Axios;
Vue.prototype.$store = store;

const token = localStorage.getItem('token')
if (token) {
	Vue.prototype.$axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

Vue.config.productionTip = false

// register global components
Vue.component('vue-custom-scrollbar', vueCustomScrollbar)

Vue.use(VueMeta)
Vue.use(Vuelidate)

Vue.directive('click-outside', {
    bind(el, binding) {
        el.addEventListener('click', e => e.stopPropagation());
        document.body.addEventListener('click', binding.value);
    },
    unbind(el, binding) {
        document.body.removeEventListener('click', binding.value);
    }
});

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
