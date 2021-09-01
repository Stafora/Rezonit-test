import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT

export default {
    state: {
		cardMaterials: null,
		cardMaterialMarks: null,
		cardMaterialTypes: null
    },
    getters: {
		GET_CARD_MATERIALS(state){
			return state.materials
		},
		GET_CARD_MATERIAL_MARKS(state){
			return state.cardMaterialMarks
		}
    },
    mutations: {
		SET_CARD_MATERIALS: (state, materials) => {
			state.cardMaterials = materials
		},
		SET_CARD_MATERIAL_MARKS: (state, materialMarks) => {
			state.cardMaterialMarks = materialMarks
		},
		ET_CARD_MATERIAL_TYPES: (state, materialTypes) => {
			state.cardMaterialTypes = materialTypes
		}
    },
    actions: {
		CARD_MATERIALS({ commit }) {
			return axios('api/card_materials', {
				method: 'GET'              
			})
			.then((resp) => {
				commit('SET_CARD_MATERIALS', resp.data.result)
			})
			.catch((error) => {
				console.log(error)
			})
        },
		CARD_MATERIAL_MARKS({ commit }) {
			return axios('api/card_material_marks', {
				method: 'GET'              
			})
			.then((resp) => {
				commit('SET_CARD_MATERIAL_MARKS', resp.data.result)
			})
			.catch((error) => {
				console.log(error)
			})
        },
		CARD_MATERIAL_TYPES({ commit }) {
			return axios('api/card_material_types', {
				method: 'GET'              
			})
			.then((resp) => {
				commit('SET_CARD_MATERIAL_TYPES', resp.data.result)
			})
			.catch((error) => {
				console.log(error)
			})
        },
		TEST({ commit }) {
			return axios('api/card_mpp_sets', {
				method: 'GET'              
			})
			.then((resp) => {
				console.log(resp);
			})
			.catch((error) => {
				console.log(error)
			})
        }
    }
}
