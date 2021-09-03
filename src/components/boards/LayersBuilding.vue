<template>
	<div style="width: 100%">
		<template v-for="list in getFilterLayers">
			<div :class="{'adding-board-building-layers-group': list.length > 1}" :key="list.id">
				<div class="adding-board-building-layers-item" v-for="item in list" :key="item.id">
					<div class="adding-board-building-layers-item__block"></div>
					<div class="adding-board-building-layers-item__text">{{ item.material[0].name }} </div>
				</div>

				<div v-if="list.length > 1" class="adding-board-building-layers__text-group">Группа</div>
			</div>
		</template>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'

	export default {
		name: 'LayersBuilding',
		props: {
			layerId: {
				type: Number
			}
		},
		created: function (){
			this.CARD_MPP_LAYERS(this.layerId)
			this.CARD_MATERIALS()
		},
		watch: {
			layerId: function layerIdwatch(value) {
				this.CARD_MPP_LAYERS(value);
			}
		},
		computed: {
			...mapGetters([
				'GET_CARD_MPP_LAYERS',
				'GET_CARD_MATERIALS'
            ]),
			getFilterLayers() {
				if(this.GET_CARD_MPP_LAYERS) {
					const mppSetLayersList = {}
					const cardMppLayers = this.GET_CARD_MPP_LAYERS
					for(const item of cardMppLayers['mpp_set_layers']) {
						if(mppSetLayersList.hasOwnProperty(item.layer_group) === false){
							mppSetLayersList[item.layer_group] = []
						}
						item.material = this.getMaterialId(item.material_id);
						mppSetLayersList[item.layer_group].push(item)
					}
					return mppSetLayersList
				}
				
				return ''
			}
		},
		methods: {
			...mapActions([
				'CARD_MPP_LAYERS',
				'CARD_MATERIALS'
            ]),
			getMaterialId(id) {
				const cardMaterial = this.GET_CARD_MATERIALS.filter(function(value, index, selfArr){
					return value.id === id
				});
				return cardMaterial;
			}
		}
	}
</script>
