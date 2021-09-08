export default {
	state: {
		lang: 'ru'
    },
	getters: {
		CURRENT_LANGUAGE(state) {
			return state.lang
		}
	},
	mutations: {
		REGISTRATION_SUCCES: (state, lang) => {
			state.lang = lang
		}
	},
	actions: {
		SET_LANGUAGE({ commit }, lang) {
            commit('REGISTRATION_SUCCES', lang)
        }
	}
}
