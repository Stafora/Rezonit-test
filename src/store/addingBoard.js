import axios from 'axios'
import { AddingBoardStorageServices } from '../services/AddingBoardStorageServices'

axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT

export default {
    state: {
		boardFile: null,
		uploadPercentage: 0
    },
    getters: {
		GET_BOARD_FILE(state){
			return state.boardFile
		}
    },
    mutations: {
		SET_BOARD_CHECK_FILE_NAME: (state, file) => {
			state.boardFile = file
		},
		DELETE_BOARD_FILE: (state) => {
			state.boardFile = null
		}
    },
    actions: {
		LOAD_BOARD_FILE({ commit }, formData) {
			if(formData) {
				return axios.post('/api/upload/files/cards', formData, {
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				})
				.then((resp) => {
					AddingBoardStorageServices.setItem('file', resp.data);
					commit('SET_BOARD_CHECK_FILE_NAME', resp.data)
				})
				.catch((error) => {
					console.log(error)
				})
			}
        },
		DELETE_BOARD_FILE({ commit }, id) {
			if(id) {
				return axios(`/api/files/${id}`, {
					method: 'DELETE'            
				})
				.then((resp) => {
					localStorage.removeItem('boardFile')
					commit('DELETE_BOARD_FILE')
				})
				.catch((error) => {
					console.log(error)
				})
			}
        }
    }
}
