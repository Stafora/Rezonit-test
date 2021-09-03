import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT

export default {
    state: {
		cards: null
    },
    getters: {
		GET_CARDS(state){
			return state.cards
		}
    },
    mutations: {
		SET_CARDS: (state, cards) => {
			state.cards = cards
		}
    },
    actions: {
		CARD_ADD({ commit }, param) {
			return axios('/api/cards', {
				method: 'POST',
				data: param                
            })
            .then((resp) => {
				console.log(resp);
            })
            .catch((error) => {
				console.log(error);
            })
        },
		CARDS({ commit }) {
			return axios('/api/cards', {
				method: 'GET'             
			})
			.then((resp) => {
				console.log(resp.data);
				commit('SET_CARDS', resp.data)
			})
			.catch((error) => {
				console.log(error);
			})
        }
    }
}
