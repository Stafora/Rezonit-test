import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import user from './user'
import addingBoard from './addingBoard'
import addingParam from './addingParam'
import cardMaterials from './cardMaterials'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		auth,
		user,
		addingBoard,
		addingParam,
		cardMaterials
	}
})
