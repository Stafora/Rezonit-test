<template>
    <div class="inner-card">
		<div class="document-top">
			<Header v-bind:title="getName" />
		</div>
		<div class="main-aside">
			<aside class="main-aside__aside inner-card__aside">
				<div class="inner-card-layers-settings">

					<div class="inner-card-layers-settings__title">Слои печатной платы</div>
					<label class="inner-card-layers-settings-checkbox">
						<input type="checkbox" value="1">
						<span class="inner-card-layers-settings-checkbox__text">Слой 1</span>
					</label>
					<label class="inner-card-layers-settings-checkbox">
						<input type="checkbox" value="1">
						<span class="inner-card-layers-settings-checkbox__text">Слой 2</span>
					</label>
					<label class="inner-card-layers-settings-checkbox">
						<input type="checkbox" value="1">
						<span class="inner-card-layers-settings-checkbox__text">Слой 3</span>
					</label>
					<label class="inner-card-layers-settings-checkbox">
						<input type="checkbox" value="1">
						<span class="inner-card-layers-settings-checkbox__text">Слой 4</span>
					</label>
					<label class="inner-card-layers-settings-checkbox">
						<input type="checkbox" value="1">
						<span class="inner-card-layers-settings-checkbox__text">Слой 5</span>
					</label>

					<div class="inner-card-layers-settings__title">Параметры платы</div>
					<div class="inner-card-layers-settings-params">
						<div class="inner-card-layers-settings-params__value">Номер</div>
						<div class="inner-card-layers-settings-params__value">{{ GET_CARD ? GET_CARD.id : "" }}</div>
					</div>
					<div class="inner-card-layers-settings-params">
						<div class="inner-card-layers-settings-params__value">Размеры (мм)</div>
						<div class="inner-card-layers-settings-params__value">{{ GET_CARD ? GET_CARD.x : "" }} х {{ GET_CARD ? GET_CARD.y : "" }}</div>
					</div>
				</div>
			</aside>
			<main class="main-aside__main">
				<div class="main-aside__content">
					<iframe class="inner-card-iframe" src="http://developcretewebs.rezonit.ru/indexTest11.html"></iframe>
				</div>
			</main>
		</div>
    </div>
</template>

<script>
	import Header from '@/components/common/Header'
    import { mapActions, mapGetters } from 'vuex'

	export default {
		name: 'DefaultLayout',
        metaInfo: {
            title: 'Список плат'
        },
        data: () => ({
            id: null
		}),
        created: function (){
            this.id = this.$route.params.id
            this.CARD(this.id)
        },
		components: {
			Header
		},
        computed: {
            ...mapGetters([
                'GET_CARD'
            ]),
            getName() {
                return this.GET_CARD.name
            }
        },
        methods: {
            ...mapActions([
                'CARD'
            ])
        }
	}
</script>

<style lang="scss">
	.inner-card{

        &-iframe{
            width: 100%;
            height: 100%;
        }

		&__aside{
			background: none;
			padding-left: 16px;
			padding-top: 16px;
			padding-bottom: 16px;
			border-radius: 0px;
		}

		&-layers-settings{
			background: #fff;
			box-shadow: 0px 4px 4px rgba(60, 145, 179, 0.1);
			width: 100%;
			height: 100%;
			border-radius: 4px;
			padding: 12px;

			&__title{
				margin-bottom: 20px;
				color: #525B53;
				font-size: 14px;
				line-height: 1.3;
				font-weight: 500;
				text-align: center;
				margin-top: 30px;

				&:first-child{
					margin-top: 0px;
				}
			}
			
			&-checkbox{
				display: block;
				padding: 0px;
				margin-bottom: 15px;
				cursor: pointer;

				$parent: &;

				input[type="checkbox"]{
					display: none;

					&:checked + #{$parent}__text{
						&::before{
							background-image: url('../assets/img/checkbox.svg');
						}
					}
				}
				&__text{
					padding-left: 40px;
					font-size: 14px;
					line-height: 1.4;
					color: #525B53;
					position: relative;

					&::before{
						position: absolute;
						content: '';
						width: 16px;
						height: 16px;
						border-radius: 4px;
						border: 1px solid #A6B0AF;
						left: 0px;
						top: 0px;
						background-position: center;
						background-repeat: no-repeat;
					}
				}
			}

			&-params{
				font-size: 14px;
				display: flex;
				justify-content: space-between;
				margin-bottom: 15px;
				width: 100%;

				&__value{
					max-width: 48%;
				}
			}
		}

	}
</style>
