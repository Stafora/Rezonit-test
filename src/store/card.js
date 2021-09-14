import resource from 'resource-axios'
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT

export default {
    state: {
		cards: null,
        card: null
    },
    getters: {
		GET_CARDS(state){
			return state.cards
		},
        GET_CARD(state){
			return state.card
		}
    },
    mutations: {
		SET_CARDS: (state, cards) => {
			state.cards = cards
		},
        SET_CARD: (state, card) => {
			state.card = card
		}
    },
    actions: {
		CARD_ADD({ commit }, param) {
			return axios('/api/cards', {
				method: 'POST',
				data: param                
            })
            .then((resp) => {
                return resp
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
				commit('SET_CARDS', resp.data)
			})
			.catch((error) => {
				console.log(error);
			})
        },
		CARD_REMOVE({ commit }, id) {
			if(id) {
				return resource('/api/cards', axios)
				.delete({
					id: id
				})
				.then((resp) => {
					
				})
				.catch((error) => {
					console.log(error);
				})
			}
        },
        CARD({ commit }, id) {
			return resource('/api/cards', axios)
            .get({
                id: id
            })
			.then((resp) => {
				commit('SET_CARD', resp.data)
			})
			.catch((error) => {
				console.log(error);
			})
        }
    }
}
