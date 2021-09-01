import axios from 'axios'
import router from '../router'

axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT

export default {
    state: {
		token: localStorage.getItem('token') || '',
		loginErrors: '',
		registrationErrors: '',
		registrationSucces: false
    },
    getters: {
		IS_LOGGED_IN(state) {
			return !!state.token
		},
		LOGIN_ERRORS(state) {
			return state.loginErrors
		},
		REGISTRATION_ERRORS(state) {
			return state.registrationErrors
		},
		GET_TOKEN(state) {
			return state.token
		},
		CHEK_SUCCES_REGISTRATION(state) {
			return state.registrationSucces
		}
    },
    
    mutations: {
		LOGIN_ERROR: (state, errors) => {
			state.loginErrors = errors;
		},
		AUTH_SUCCESS: (state, token) => {
			state.token = token;
		},
		REGISTRATION_SUCCES: (state) => {
			state.registrationSucces = true;
		},
		REGISTRATION_ERROR: (state, errors) => {
			state.registrationErrors = errors;
		},
		LOGOUT: (state) => {
			state.token = ''
		}
    },
    
    actions: {
        LOGIN({ commit }, user) {
            return axios('api/login', {
				method: 'POST',
				data: user                
            })
            .then((resp) => {
				const token = resp.data.token;
				if(token){
					localStorage.setItem('token', token)
					axios.defaults.headers.common.Authorization = `Bearer ${token}`
					commit('AUTH_SUCCESS', token)
					router.push('/')
				}
            })
            .catch((error) => {
				localStorage.removeItem('token')
				if (error.response.data.errors) {
					commit('LOGIN_ERROR', error.response.data.errors);
				}
            })
        },
		REGISTRATION({ commit }, user) {
            return axios('api/register', {
				method: 'POST',
				data: user                
            })
            .then((resp) => {
				if(resp.data.email){
					commit('REGISTRATION_SUCCES');
				}
            })
            .catch((error) => {
				if (error.response.data.errors) {
					commit('REGISTRATION_ERROR', error.response.data.errors);
				}
            })
        },
		LOGOUT({ commit }) {
			return new Promise((resolve, reject) => {
				commit('LOGOUT')
				localStorage.removeItem('token')
				delete axios.defaults.headers.common.Authorization
			})
		}
    }
}
