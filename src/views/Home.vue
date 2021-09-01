<template>
    <div class="boards">
        <div class="boards-header">
			<div class="boards-header-count">
				<div class="boards-header-count__title">Всего плат</div>
				<div class="boards-header-count__number">0</div>
			</div>

			<div class="boards-header-buttons">
				<div class="btn btn-border boards-header-buttons__btn disabled"><span>Черновик</span></div>
				<div class="btn btn-default boards-header-buttons__btn" v-on:click="openAddPopup"><span>Добавить</span></div>
			</div>
		</div>

		<div class="boards-list">
			<div class="boards-list-header">
				<div class="boards-list-header-col">
					Название
				</div>
				<div class="boards-list-header-col">
					Номер
				</div>
				<div class="boards-list-header-col">
					Создано
				</div>
				<div class="boards-list-header-col">
					Изменено
				</div>
				<div class="boards-list-header-col">
					
				</div>
			</div>
			<div class="boards-list-body scroll">
				<BoardItem />
				<BoardItem />
				<BoardItem />
				<BoardItem />
				<BoardItem />
				<BoardItem />
				<BoardItem />
				<BoardItem />
				<BoardItem />
				<BoardItem />
				<BoardItem />
				<BoardItem />
				<BoardItem />
				<BoardItem />
				<BoardItem />
				<BoardItem />
				<BoardItem />
				<BoardItem />
				<BoardItem />
				<BoardItem />
				<BoardItem />
				<BoardItem />
				<BoardItem />
				<BoardItem />
				<BoardItem />
			</div>
		</div>

		<AddingBoard v-on:openAddPopup="openAddPopup" v-bind:isOpenPopup="isOpenPopup"/>

    </div>
</template>

<script>
	import BoardItem from '@/components/boards/BoardItem'
	import AddingBoard from '@/components/boards/AddingBoard'

	export default {
		name: 'Home',
		metaInfo: {
			title: 'Список плат'
		},
		data: () => ({
			isOpenPopup: false
		}),
		components: {
			BoardItem,
			AddingBoard
		},
		methods: {
			openAddPopup() {
				this.isOpenPopup = !this.isOpenPopup
			}
		}
	}
</script>

<style lang="scss">
	.boards{
		&-header{
			padding: 16px 16px;
			display: flex;
			align-items: center;
			justify-content: space-between;

			&-count{
				display: flex;
				align-items: center;
				font-size: 14px;

				&__title{
					margin-right: 5px;
				}
				&__number{
					background: #E3EBE7;
					border-radius: 4px;
					height: 24px;
					padding: 0px 8px;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}	
			&-buttons{
				display: flex;
				align-items: center;
				&__btn{
					margin-left: 16px;
				}
			}
		}

		&-list{
			overflow: hidden;
			&-header{
				display: flex;
				border-top: 1px solid #E4E4E7;

				&-col{
					padding: 20px 0px;
					text-align: center;
					color: #A6B0AF;
					font-size: 12px;
					line-height: 1.3;
				}
			}
			&-body{
				position: relative;
				overflow: auto;
				height: calc(100vh - 202px);
			}

			&-header-col, &-item-col{
				min-width: 200px;
				width: 20%;
				padding: 17px 16px;
				display: flex;
				align-items: center;
				justify-content: center;

				&:nth-child(1){
					width: 35%;
				}
				&:last-child{
					width: 5%;
					min-width: 50px;
				}
			}
		}
	}

	@media(max-width: 980px){
		.boards{
			&-header{
				flex-direction: column;
			}
			&-list{
				&-body{

				}
			}
		}
	}
</style>
