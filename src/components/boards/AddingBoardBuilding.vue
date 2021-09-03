<template>
	<div class="adding-board-building">
		<div class="adding-board-building-content">
			<div class="adding-board-row">
				<div class="adding-board-col adding-board-col-4">
					<div class="adding-board-params__title">Параметры сборки</div>

					<!-- <label class="adding-board-input">
						<div class="adding-board-input__title">Слоев, шт</div>
						<input type="text">
						<div class="adding-board-input__tooltip" data-tooltip="">
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0ZM8 1.116C6.17425 1.116 4.42328 1.84128 3.13228 3.13228C1.84128 4.42328 1.116 6.17425 1.116 8C1.116 9.82575 1.84128 11.5767 3.13228 12.8677C4.42328 14.1587 6.17425 14.884 8 14.884C9.82575 14.884 11.5767 14.1587 12.8677 12.8677C14.1587 11.5767 14.884 9.82575 14.884 8C14.884 6.17425 14.1587 4.42328 12.8677 3.13228C11.5767 1.84128 9.82575 1.116 8 1.116ZM7.884 5.768C8.192 5.768 8.4416 6.0184 8.4416 6.3264V12.3728C8.43613 12.5171 8.37495 12.6537 8.27091 12.7539C8.16686 12.8541 8.02804 12.9101 7.8836 12.9101C7.73916 12.9101 7.60034 12.8541 7.4963 12.7539C7.39225 12.6537 7.33107 12.5171 7.3256 12.3728V6.3256C7.3256 6.0176 7.5752 5.7672 7.884 5.7672V5.768ZM7.9064 3.536C8.10372 3.536 8.29296 3.61439 8.43249 3.75391C8.57201 3.89344 8.6504 4.08268 8.6504 4.28C8.6504 4.47732 8.57201 4.66656 8.43249 4.80609C8.29296 4.94561 8.10372 5.024 7.9064 5.024C7.70908 5.024 7.51984 4.94561 7.38031 4.80609C7.24079 4.66656 7.1624 4.47732 7.1624 4.28C7.1624 4.08268 7.24079 3.89344 7.38031 3.75391C7.51984 3.61439 7.70908 3.536 7.9064 3.536Z" fill="#A6B0AF"/>
							</svg>
						</div>
					</label> -->
					<div class="adding-board-select">
						<div class="adding-board-select__title">Слоев, шт</div>
						<select v-model="form.currentLayer" @blur="$v.form.currentLayer.$touch()">
							<option value="">Выберите слой</option>
							<option v-for="item in getLayersList" :key="item" :value="item">{{ item }}</option>
						</select>
					</div>

					<div class="adding-board-select" v-if="getTypeMaterial">
						<div class="adding-board-select__title">Тип материала базы</div>
						<select v-model="form.typeMaterial" @blur="$v.form.typeMaterial.$touch()">
							<option value="">Выберите тип материала базы</option>
							<option v-for="item in getTypeMaterial" :key="item.id" :value="item.id">{{ item.name }}</option>
						</select>
					</div>

					<div class="adding-board-select" v-if="getCardWidth">
						<div class="adding-board-select__title">Толщина платы</div>
						<select v-model="form.cardWidth" @blur="$v.form.cardWidth.$touch()">
							<option value="">Выберите толщину платы</option>
							<option v-for="value in getCardWidth" :key="value" :value="value">{{ value }}</option>
						</select>
					</div>

					<div class="adding-board-select" v-if="getFoilWidth">
						<div class="adding-board-select__title">Толщина фольги</div>
						<select v-model="form.foilWidth" @blur="$v.form.foilWidth.$touch()">
							<option value="">Выберите толщина фольги</option>
							<option v-for="value in getFoilWidth" :key="value" :value="value">{{ value }}</option>
						</select>
					</div>

				</div>
				<div class="adding-board-col adding-board-col-6">
					<div class="adding-board-params__title adding-board-params__title_center">Слои сборки</div>

					<div class="adding-board-building-layers">
						<LayersBuilding v-if="!$v.form.$invalid" v-bind:layerId="getMppSetLayersId" />
					</div>

				</div>
			</div>
		</div>

		<div class="adding-board-buttons">
			<div class="adding-board-buttons__btn btn btn-border" v-on:click="prevStep"><span>Назад</span></div>
			<div class="adding-board-buttons__btn btn btn-default" :class="{disabled: !isSuccessNextBtn}" v-on:click="finishStep"><span>Завершить</span></div>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'
	import { required } from 'vuelidate/lib/validators'
	import LayersBuilding from '@/components/boards/LayersBuilding'
	import { AddingBoardStorageServices } from '@/services/AddingBoardStorageServices'

	export default {
		name: 'AddingBoardBuilding',
		params: {
			setStep: {
				type: Function
			},
			closePopup: {
				type: Function
			}
		},
		components: {
			LayersBuilding
		},
		data: () => ({
			isSuccessNextBtn: false,
			CURRENT_STEP: 3,
			form: {
				mppSetLayer: null,
				mppSetLayersId: null,
				layersBuilding: null,
				currentLayer: '',
				typeMaterial: '',
				cardWidth: '',
				foilWidth: ''
			}
		}),
		created: function (){
			this.CARD_MPP_SETS();
			this.CARD_MATERIAL_MARKS();
			this.CARD_MATERIAL_TYPES();
			this.CARD_MATERIALS();
		},
		watch: {
			'$v.form.$invalid': function _watch$vForm$invalid (value) {
				if(!this.$v.$invalid){
					this.isSuccessNextBtn = true;
				} else {
					this.isSuccessNextBtn = false;
				}
			}
		},
		computed: {
			...mapGetters([
                'GET_CARD_MPP_SETS',
				'GET_CARD_MATERIAL_MARKS',
				'GET_CARD_MATERIAL_TYPES',
				'GET_CARD_MATERIALS',
				'GET_CARD_MPP_LAYERS'
            ]),
			getLayersList() {
				if(this.GET_CARD_MPP_SETS){
					const listLayers = []
					for(const item of this.GET_CARD_MPP_SETS){
						listLayers.push(item.layers)
					}
					const uniqueListLayers = listLayers.filter(function(value, index, selfArr){
						return selfArr.indexOf(value) === index
					});
					return uniqueListLayers;
				} else {
					return [];
				}
			},
			getTypeMaterial() {
				this.setTypeMaterialDefaultValie()

				if(this.form.currentLayer && this.GET_CARD_MPP_SETS){
					const fileteredMppSetsByLayer = this.GET_CARD_MPP_SETS.filter(function(obj, index, selfArr){
						return obj.layers === this.form.currentLayer
					}.bind(this));
					
					// get material_mark_id
					const listMaterialMarkId = []
					for(const item of fileteredMppSetsByLayer){
						listMaterialMarkId.push(item.material_mark_id)
					}
					const uniqueListMaterialMarkId = listMaterialMarkId.filter(function(value, index, selfArr){
						return selfArr.indexOf(value) === index
					});
					const materialMarks = [];
					for(const item of this.GET_CARD_MATERIAL_MARKS) {
						if(uniqueListMaterialMarkId.indexOf(item.id) !== -1){
							materialMarks.push(item);
						}
					}

					return (materialMarks.length) ? materialMarks : null;
				}

				return null;
			},
			getCardWidth() {
				this.setCardWidthDefaultValue()

				if(this.form.currentLayer && this.GET_CARD_MPP_SETS){
					const fileteredMppSetsByLayer = this.GET_CARD_MPP_SETS.filter(function(obj, index, selfArr){
						return obj.layers === this.form.currentLayer && obj.material_mark_id === this.form.typeMaterial
					}.bind(this));

					// get all material_mark_id
					const listCardWidth = []
					for(const item of fileteredMppSetsByLayer){
						listCardWidth.push(item.card_width)
					}

					const uniquelistCardWidth = listCardWidth.filter(function(value, index, selfArr){
						return selfArr.indexOf(value) === index
					});

					return (uniquelistCardWidth.length) ? uniquelistCardWidth : null;
				}
				return null;
			},
			getFoilWidth() {
				this.setFoilWidthDefaultValue()

				if(this.form.currentLayer && this.GET_CARD_MPP_SETS){
					const fileteredMppSetsByLayer = this.GET_CARD_MPP_SETS.filter(function(obj, index, selfArr){
						return obj.layers === this.form.currentLayer && obj.material_mark_id === this.form.typeMaterial && obj.card_width === this.form.cardWidth
					}.bind(this));

					// get all material_mark_id
					const listFoilWidth = []
					for(const item of fileteredMppSetsByLayer){
						listFoilWidth.push(item.foil_width)
					}

					const uniquelistFoilWidth = listFoilWidth.filter(function(value, index, selfArr){
						return selfArr.indexOf(value) === index
					});

					return (uniquelistFoilWidth.length) ? uniquelistFoilWidth : null;
				}
				return null;
			},
			getMppSetLayersId() {
				this.setMppSetLayersDefaultValue()

				if(this.form.currentLayer && this.GET_CARD_MPP_SETS){
					this.GET_CARD_MPP_SETS.filter(function(obj, index, selfArr){
						if(obj.layers === this.form.currentLayer && 
							obj.material_mark_id === this.form.typeMaterial && 
							obj.card_width === this.form.cardWidth && 
							obj.foil_width === this.form.foilWidth){
							this.form.mppSetLayersId = obj.id;
							this.form.mppSetLayer = obj;
						}
					}.bind(this));

					return this.form.mppSetLayersId;
				}

				return '';
			}
		},
		methods: {
			...mapActions([
                'CARD_MPP_SETS',
				'CARD_MATERIAL_MARKS',
				'CARD_MATERIAL_TYPES',
				'CARD_MATERIALS',
				'CARD_MPP_LAYERS',
				'CARD_ADD'
            ]),
			prevStep() {
				this.$emit('setStep', this.CURRENT_STEP - 1)
			},
			setCardWidthDefaultValue() {
				this.form.cardWidth = ''
			},
			setFoilWidthDefaultValue() {
				this.form.foilWidth = ''
			},
			setMppSetLayersDefaultValue() {
				this.form.mppSetLayersId = ''
			},
			setTypeMaterialDefaultValie() {
				this.form.typeMaterial = ''
			},
			finishStep() {
				if(this.isSuccessNextBtn) {
					const storageResult = AddingBoardStorageServices.getAll();
					
					const data = {
						file_id: storageResult.file.id,
						name: storageResult.param.name,
						x: storageResult.param.widthX,
						y: storageResult.param.heightY,
						is_panel: storageResult.param.isPanel ? 1 : 0,
						milling: storageResult.param.milling ? 1 : 0,
						scribing: storageResult.param.scribing ? 1 : 0,
						panel_x: storageResult.param.panelX,
						panel_y: storageResult.param.panelY,
						layers: this.form.mppSetLayer.layers,
						card_mpp_set_id: this.form.mppSetLayersId,
						card_material_mark_id: this.form.mppSetLayer.material_mark_id,
						card_thickness: this.form.cardWidth,
						base_foil: this.form.mppSetLayer.id
					}

					const result = this.CARD_ADD(data)
					result.then((resp) => {
						AddingBoardStorageServices.clearAll();
						this.$emit('closePopup')
					});
				}
			}
		},
		validations: {
			form: {
				currentLayer: {
					required
				},
				typeMaterial: {
					required
				},
				cardWidth: {
					required
				},
				foilWidth: {
					required
				}
			}
		}
	}
</script>

<style lang="scss">
	.adding-board-building{
		&-content{
			min-height: 300px;
		}
		&-layers{
			@include flex-center;
			background: linear-gradient(0deg, rgba(42, 163, 150, 0.03), rgba(42, 163, 150, 0.03)), #FFFFFF;
			border-radius: 4px;
			padding: 40px;
			flex-direction: column;

			&__text-group{
				font-size: 12px;
				position: absolute;
				right: 0px;
				top: 0px;
				writing-mode: vertical-rl;
				width: auto;
				height: 100%;
				text-align: center;
				color: #2ba396;
			}

			&-group{
				width: 100%;
				margin: 6px 0px;
				background: #f1f1f1;
				padding: 6px 0px;
				position: relative;
			}

			&-item{
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				padding: 0px 10px;

				&__block{
					width: calc(100% - 160px);
					height: 4px;
					margin: 4px 0px;
					background: #3D8FB4;
					color: #fff;
					font-size: 12px;
				}
				&__text{
					width: 140px;
					font-size: 10px;
				}
			}
		}
	}
</style>
