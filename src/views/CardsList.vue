<template>
    <div class="boards">
        <div class="boards-header">
            <div class="boards-header-count">
                <div class="boards-header-count__title">Всего плат</div>
                <div class="boards-header-count__number">{{ getCountCards }}</div>
            </div>

            <div class="boards-header-buttons">
                <div class="btn btn-border boards-header-buttons__btn" :class="{disabled: isDisaledBtnDraft}" v-on:click="openPopupDraft"><div class="btn-border__bg"><div class="btn-border__gradient-text">Черновик</div></div></div>
                <div class="btn btn-default boards-header-buttons__btn" v-on:click="openPopup"><span>Добавить</span></div>
            </div>
        </div>

        <div class="boards-list">
            <div v-if="getCountCards" class="boards-list-header">
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
                <BoardItem v-for="(card, index) in GET_CARDS" :key="card.id" v-bind:card="card" v-bind:index="index" v-on:reloadCardsList="reloadCardsList" />

                <div v-if="getCountCards < 1" class="boards-list-body-empty">
                    <div class="btn btn-default boards-list-body-empty__btn" v-on:click="openPopup"><span>Добавить</span></div>
                </div>
            </div>
        </div>

        <AddingBoard 
            v-if="isOpenPopup" 
            v-on:openAddPopup="openAddPopup" 
            v-on:reloadCardsList="reloadCardsList"
            v-on:changeIssetDraft="changeIssetDraft"
            v-on:finishPopupAllStep="finishPopupAllStep"
            v-bind:isOpenPopup="isOpenPopup"
        />
        <ConfirmDialogue ref="confirmDialogue"></ConfirmDialogue>

    </div>
</template>

<script>
    import BoardItem from '@/components/boards/BoardItem'
    import AddingBoard from '@/components/boards/AddingBoard'
    import { AddingBoardStorageServices } from '@/services/AddingBoardStorageServices'
    import ConfirmDialogue from '@/components/popup/ConfirmDialogue.vue'
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'CardsList',
        metaInfo: {
            title: 'Список плат'
        },
        data: () => ({
            isOpenPopup: false,
            isDisaledBtnDraft: true,
            issetDraft: false
        }),
        created: function (){
            this.issetDraft = AddingBoardStorageServices.getItem(AddingBoardStorageServices.STORAGE_KEY_FILE) !== null
            if(this.issetDraft) {
                this.changeDisabledBtnDraft()
            }
            this.CARDS()
        },
        computed: {
            ...mapGetters([
                'GET_CARDS'
            ]),
            getCountCards() {
                if(this.GET_CARDS){
                    return this.GET_CARDS.length
                } else {
                    return 0;
                }
            }
        },
        components: {
            BoardItem,
            AddingBoard,
            ConfirmDialogue
        },
        methods: {
            ...mapActions([
                'CARDS'
            ]),
            finishPopupAllStep() {
                this.isOpenPopup = false;
                this.changeDisabledBtnDraft(true);
                this.issetDraft = false;
            },
            openAddPopup() {
                this.isOpenPopup = !this.isOpenPopup
                this.changeIssetDraft();
            },
            changeDisabledBtnDraft(bool) {
                if(bool){
                    this.isDisaledBtnDraft = bool
                } else {
                    this.isDisaledBtnDraft = false
                }
            },
            changeIssetDraft() {
                this.issetDraft = AddingBoardStorageServices.getItem(AddingBoardStorageServices.STORAGE_KEY_FILE) !== null
                if(this.issetDraft) {
                    this.changeDisabledBtnDraft();
                }
            },
            async openPopup() {
                if(this.issetDraft){
                    const ok = await this.$refs.confirmDialogue.show({
                        title: '',
                        message: 'Хотите продолжить редактировать сохраненную плату?',
                        okButton: 'Да'
                    })
                    if (ok) {
                        this.isOpenPopup = !this.isOpenPopup
                    } else {
                        AddingBoardStorageServices.clearAll()
                        this.openAddPopup();
                        this.changeDisabledBtnDraft(true);
                    }
                } else {
                    this.openAddPopup();
                }
            },
            openPopupDraft() {
                if(!this.isDisaledBtnDraft){
                    this.isOpenPopup = true
                }
            },
            reloadCardsList() {
                this.CARDS();
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

                &-empty{
                    height: 100%;
                    width: 100%;
                    @include flex-center;
                }
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
                padding: 8px 8px;

                &-count{
                    margin-bottom: 15px;
                }
                &-buttons{
                    &__btn{
                        width: 120px;
                        margin-left: 10px;
                        margin-right: 10px;
                    }
                }
            }
            &-list{
                &-header-col, &-item-col{
                    padding: 6px 10px;
                }
                &-header{
                    display: none;
                }
                &-body{
                    height: calc(100vh - 175px);
                }
            }
        }
    }
</style>
