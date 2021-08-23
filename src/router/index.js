import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		meta: {
			layout: 'HomeLayout'
		},
		component: function () {
			return import('../views/Home.vue')
		}
	},
	{
		path: '/auth',
		name: 'Auth',
		component: function () {
			return import('../views/Auth.vue')
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
