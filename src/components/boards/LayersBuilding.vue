<template>
	<div style="width: 100%">
		<template v-for="list in getFilterLayers">
			<!-- <div :class="{'adding-board-building-layers-group': list.length > 1}" :key="list.id">
            </div> -->
            <template v-for="item in list">
                <div class="adding-board-building-layers-item" :key="item.id" v-if="item.card_material_type_id === 1">
                    <div class="adding-board-building-layers-item__block adding-board-building-layers-item__block_foil"></div>
                    <div class="adding-board-building-layers-item__text" v-if="item.material[0].name">{{ item.material[0].name }} (медь) {{ Number(item.material[0].upper_foil_width) }} мкм</div>
                </div>
            </template>

            <template v-for="item in list">
                <div class="adding-board-building-layers-item" :key="item.id" v-if="item.card_material_type_id === 2">
                    <div class="adding-board-building-layers-item__block adding-board-building-layers-item__block_prepreg" v-if="item.material[0].name">
                        {{ item.material[0].name }} мм
                    </div>
                    <div class="adding-board-building-layers-item__text"></div>
                </div>
            </template>

            <template v-for="item in list">
                <div class="adding-board-building-layers-item" :key="item.id" v-if="item.card_material_type_id === 3">
                    <div class="adding-board-building-layers-item__block adding-board-building-layers-item__block_base" v-if="item.material[0].name">
                        {{ item.material[0].name }} мм
                    </div>
                    <div class="adding-board-building-layers-item__text"></div>
                </div>
            </template>
			
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
				'GET_CARD_MATERIALS',
				'GET_CARD_MATERIAL_TYPES'
            ]),
			getFilterLayers() {
				if(this.GET_CARD_MPP_LAYERS) {
					const mppSetLayersList = {}
					const cardMppLayers = this.GET_CARD_MPP_LAYERS
					for(const item of cardMppLayers['mpp_set_layers']) {
						if(mppSetLayersList.hasOwnProperty(item.layer_group) === false){
							mppSetLayersList[item.layer_group] = []
						}
						item.materialType = this.getMaterialTypeId(item.card_material_type_id);
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
				'CARD_MATERIALS',
				'CARD_MATERIAL_TYPES'
            ]),
			getMaterialId(id) {
				const cardMaterial = this.GET_CARD_MATERIALS.filter(function(value, index, selfArr){
					return value.id === id
				});
				return cardMaterial;
			},
			getMaterialTypeId(id) {
				const cardMaterialType = this.GET_CARD_MATERIAL_TYPES.filter(function(value, index, selfArr){
					return value.id === id
				});
				return cardMaterialType;
			}
		}
	}
</script>
