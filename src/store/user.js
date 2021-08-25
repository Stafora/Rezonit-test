import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT

export default {
    state: {
		user: ''
    },
    getters: {
		GET_USER(state) {
			return state.user
		}
    },
    
    mutations: {
		SET_USER: (state, user) => {
			state.user = user
		}
    },
    
    actions: {
        USER({ commit }) {
            return axios('api/user', {
				method: 'GET'               
            })
            .then((resp) => {
				console.log(resp)
            })
            .catch((error) => {
				console.log(error)
            })
        }
    }
}
