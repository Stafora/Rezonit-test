<template>
	<div class="adding-board-building">
		<div class="adding-board-building-content">
			<div class="adding-board-row">
				<div class="adding-board-col adding-board-col-4">
					<div class="adding-board-params__title">Параметры сборки</div>
					<div class="adding-board-input" :class="{error: $v.form.currentLayer.$error, success: !$v.form.currentLayer.$invalid}">
						
						<input 
                            type="text" 
                            v-model="form.currentLayer" 
                            @blur="$v.form.currentLayer.$touch()"
                            :class="{'is-data': form.currentLayer}"
                        >
                        <div class="adding-board-input__title">Слоев, шт</div>
						<div class="adding-board-input__error" v-if="$v.form.currentLayer.$error">
							<template v-if="!$v.form.currentLayer.onlyThisParam">
								Доступные слои: {{getLayersListString}}
							</template>
						</div>
					</div>

					<div class="adding-board-select">
						<div class="adding-board-select__title">Тип материала базы</div>
						<select v-model="form.typeMaterial" @blur="$v.form.typeMaterial.$touch()" :disabled="!getTypeMaterial" :class="{success: form.typeMaterial}">
							<option value="">Выберите тип материала базы</option>
							<option v-for="item in getTypeMaterial" :key="item.id" :value="item.id">{{ item.name }}</option>
						</select>
					</div>

					<div class="adding-board-select">
						<div class="adding-board-select__title">Толщина платы</div>
						<select v-model="form.cardWidth" @blur="$v.form.cardWidth.$touch()" :disabled="!getCardWidth"  :class="{success: form.cardWidth}">
							<option value="">Выберите толщину платы</option>
							<option v-for="value in getCardWidth" :key="value" :value="value">{{ value }}</option>
						</select>
					</div>

					<div class="adding-board-select">
						<div class="adding-board-select__title">Толщина фольги</div>
						<select v-model="form.foilWidth" @blur="$v.form.foilWidth.$touch()" :disabled="!getFoilWidth" :class="{success: form.foilWidth}">
							<option value="">Выберите толщина фольги</option>
							<option v-for="value in getFoilWidth" :key="value" :value="value">{{ value }}</option>
						</select>
					</div>

				</div>
				<div class="adding-board-col adding-board-col-7">
					<div class="adding-board-params__title adding-board-params__title_center">Слои сборки</div>

					<vue-custom-scrollbar class="adding-board-building-layers">
						<LayersBuilding v-if="!$v.form.$invalid" v-bind:layerId="getMppSetLayersId" />
					</vue-custom-scrollbar>

				</div>
			</div>
		</div>

		<div class="adding-board-buttons">
			<div class="adding-board-buttons__btn btn btn-border" v-on:click="prevStep"><div class="btn-border__bg"><div class="btn-border__gradient-text">Назад</div></div></div>
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
			},
			reloadCardsListParent: {
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
				currentLayer: null,
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
			getLayersListString() {
				if(this.GET_CARD_MPP_SETS){
					const listLayers = []
					for(const item of this.GET_CARD_MPP_SETS){
						listLayers.push(item.layers)
					}
					const uniqueListLayers = listLayers.filter(function(value, index, selfArr){
						return selfArr.indexOf(value) === index
					});
					return uniqueListLayers.join()
				} else {
					return '';
				}
			},
			getTypeMaterial() {
				this.setTypeMaterialDefaultValie()
				if(this.form.currentLayer && this.GET_CARD_MPP_SETS){
					const fileteredMppSetsByLayer = this.GET_CARD_MPP_SETS.filter(function(obj, index, selfArr){
						return obj.layers === Number(this.form.currentLayer)
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
						return obj.layers === Number(this.form.currentLayer) && obj.material_mark_id === this.form.typeMaterial
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
						return obj.layers === Number(this.form.currentLayer) && obj.material_mark_id === this.form.typeMaterial && obj.card_width === this.form.cardWidth
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
						if(obj.layers === Number(this.form.currentLayer) && 
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
			getLayersList() {
				if(this.GET_CARD_MPP_SETS){
					const listLayers = []
					for(const item of this.GET_CARD_MPP_SETS){
						listLayers.push(item.layers)
					}
					const uniqueListLayers = listLayers.filter(function(value, index, selfArr){
						return selfArr.indexOf(value) === index
					});
					return uniqueListLayers
				} else {
					return [];
				}
			},
			finishStep() {
				if(this.isSuccessNextBtn) {
                    const data = {
						layers: this.form.mppSetLayer.layers,
						card_mpp_set_id: this.form.mppSetLayersId,
						card_material_mark_id: this.form.mppSetLayer.material_mark_id,
						card_thickness: this.form.cardWidth,
						base_foil: this.form.foilWidth
					}

                    AddingBoardStorageServices.setItem(AddingBoardStorageServices.STORAGE_KEY_BUILDING, data);
                    this.$emit('openResultPopup');
                    
                    /* const storageResult = AddingBoardStorageServices.getAll();
					
					const data = {
						file_id: storageResult.file.id,
						name: storageResult.param.name,
						x: storageResult.param.widthX,
						y: storageResult.param.heightY,
						is_panel: storageResult.param.isPanel ? 1 : 0,
						milling: storageResult.param.milling ? 1 : 0,
						scribing: storageResult.param.scribing ? 1 : 0,
						panel_x: storageResult.param.isPanel ? storageResult.param.panelX : null,
						panel_y: storageResult.param.isPanel ? storageResult.param.panelY : null,
						layers: this.form.mppSetLayer.layers,
						card_mpp_set_id: this.form.mppSetLayersId,
						card_material_mark_id: this.form.mppSetLayer.material_mark_id,
						card_thickness: this.form.cardWidth,
						base_foil: this.form.foilWidth
					}

					const result = this.CARD_ADD(data)
					result.then((resp) => {
						AddingBoardStorageServices.clearAll();
						this.$emit('finishPopupAllStep')
						this.$emit('reloadCardsListParent')
					}); */
				}
			}
		},
		validations: {
			form: {
				currentLayer: {
					required,
					onlyThisParam() {
						const layersArray = this.getLayersList();
						return layersArray.includes(Number(this.form.currentLayer));
					}
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
			display: block;
			background: linear-gradient(0deg, rgba(42, 163, 150, 0.03), rgba(42, 163, 150, 0.03)), #FFFFFF;
			border-radius: 4px;
			padding: 40px;
			height: 290px;
			overflow: auto;

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
					width: calc(100% - 140px);
					margin: 4px 0px;
					font-size: 12px;
					text-align: center;

					&_foil{
						height: 4px;
						background: #3D8FB4;
					}
					&_prepreg{
						background: #E5E5E5;
						color: #222;
						height: auto;
						padding: 4px 2px;
					}
					&_base{
						background: #0B7A6E;
						padding: 20px 0px;
						color: #fff;
					}
				}
				&__text{
					width: 130px;
					font-size: 9px;
                    line-height: 1.4;
				}
			}
		}
	}
</style>
