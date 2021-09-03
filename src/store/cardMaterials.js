import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT

export default {
    state: {
		cardMaterials: null,
		cardMaterialMarks: null,
		cardMaterialTypes: null,
		cardMppSets: null,
		cardMppLayers: null
    },
    getters: {
		GET_CARD_MATERIALS(state){
			return state.cardMaterials
		},
		GET_CARD_MATERIAL_MARKS(state){
			return state.cardMaterialMarks
		},
		GET_CARD_MATERIAL_TYPES(state){
			return state.cardMaterialTypes
		},
		GET_CARD_MPP_SETS(state){
			return state.cardMppSets
		},
		GET_CARD_MPP_LAYERS(state){
			return state.cardMppLayers
		}
    },
    mutations: {
		SET_CARD_MATERIALS: (state, materials) => {
			state.cardMaterials = materials
		},
		SET_CARD_MATERIAL_MARKS: (state, materialMarks) => {
			state.cardMaterialMarks = materialMarks
		},
		SET_CARD_MATERIAL_TYPES: (state, materialTypes) => {
			state.cardMaterialTypes = materialTypes
		},
		SET_CARD_MPP_SETS: (state, mppSets) => {
			state.cardMppSets = mppSets
		},
		SET_CARD_MPP_LAYERS: (state, mppLayers) => {
			state.cardMppLayers = mppLayers
		}
    },
    actions: {
		CARD_MATERIALS({ commit }) {
			return axios.get('api/card_materials', {
				headers: {
					common: {
						Authorization: null
					}
				} 
			})
			.then((resp) => {
				commit('SET_CARD_MATERIALS', resp.data)
			})
			.catch((error) => {
				console.log(error)
			})
        },
		CARD_MATERIAL_MARKS({ commit }) {
			return axios.get('api/card_material_marks', {
				headers: {
					common: {
						Authorization: null
					}
				} 
			})
			.then((resp) => {
				commit('SET_CARD_MATERIAL_MARKS', resp.data)
			})
			.catch((error) => {
				console.log(error)
			})
        },
		CARD_MATERIAL_TYPES({ commit }) {
			return axios.get('api/card_material_types', {
				headers: {
					common: {
						Authorization: null
					}
				} 
			})
			.then((resp) => {
				commit('SET_CARD_MATERIAL_TYPES', resp.data)
			})
			.catch((error) => {
				console.log(error)
			})
        },
		CARD_MPP_SETS({ commit }) {
			return axios.get('api/card_mpp_sets', {
				headers: {
					common: {
						Authorization: null
					}
				} 
			})
			.then((resp) => {
				commit('SET_CARD_MPP_SETS', resp.data)
			})
			.catch((error) => {
				console.log(error)
			})
        },
		CARD_MPP_LAYERS({ commit }, setId) {
			if(setId){
				return axios.get(`/api/card_mpp_sets/${setId}/mppSetLayers`, {
					headers: {
						common: {
							Authorization: null
						}
					} 
				})
				.then((resp) => {
					commit('SET_CARD_MPP_LAYERS', resp.data)
				})
				.catch((error) => {
					console.log(error)
				})
			}
        }
    }
}
