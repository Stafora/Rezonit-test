import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT

export default {
    state: {
		isValidateName: false
    },
    getters: {
		GET_BOARD_PARAM_NAME(state){
			return state.isValidateName
		}
    },
    mutations: {
		ERROR_BOARD_PARAM_NAME: (state, boolean) => {
			state.isValidateName = boolean
		}
    },
    actions: {
		CHECK_BOARD_PARAM_NAME({ commit }, name) {
			if(name) {
				return axios('/api/cards/check_name', {
					method: 'POST',
					data: {
						name: name
					}                
				})
				.then((resp) => {
					commit('ERROR_BOARD_CHECK_FILE_NAME', resp.data.result)
				})
				.catch((error) => {
					console.log(error)
					commit('ERROR_BOARD_CHECK_FILE_NAME', false)
				})
			}
        }
    }
}
