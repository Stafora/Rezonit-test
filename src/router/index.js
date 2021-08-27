import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		meta: {
			requiresAuth: true,
			headerTitle: 'Список плат'
		},
		component: function () {
			return import('../views/Home.vue')
		}
	},
	{
		path: '/auth',
		name: 'Auth',
		meta: {
			layout: 'AuthLayout'
		},
		component: function () {
			return import('../views/Auth.vue')
		}
	},
	{
		path: '/add',
		name: 'Add',
		component: function () {
			return import('../views/Add.vue')
		}
	},
	{ 
		path: '/404', 
		name: '404', 
		meta: {
			headerTitle: 'Страница не найдена'
		},
		component: function () {
			return import('../views/NotFound.vue')
		}
	}, 
	{ 
		path: '*', 
		redirect: '/404' 
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
