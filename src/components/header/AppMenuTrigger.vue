<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    //コンポーネント名
    name: "AppMenuTrigger",

    //メソッドの定義
    methods: {
        onClickMenuToggle() {
            //一旦クリックされているかをコンソール上で確認するようにする
            console.log("onClickMenuToggle");
        }
    }
})
</script>

<!--メニューボタンコンポーネント-->
<template>
    <button class="AppHeader__trigger" @click="onClickMenuToggle">
        <span class="_VisuallyHidden">メニューを開く</span>
        <span class="AppHeader__triggerBar -top"></span>
        <span class="AppHeader__triggerBar -center"></span>
        <span class="AppHeader__triggerBar -bottom"></span>
    </button>
</template>

<style lang="scss" scoped>

    .AppHeader__trigger{
        position: fixed;
        top: 0;
        right: 28px;
        z-index: 10;
        width: 94px;
        height: 78px;
        padding: 0;
        //背景色を透明
        background-color: transparent;
        //要素の境界を設定せず、ボーダーを非表示にする
        border: 0 none;
        cursor: pointer;
        @include md(max){
            right: 0;
            width: 72px;
            height: 60px;
        }

        &:focus {
            outline: 2px solid $COLOR_MAIN;
            outline-offset: -2px;
        }
    }

    .AppHeader__triggerBar{
        position: absolute;
        left: 50%;
        height: 3px;
        border-radius: 2px;
        background-color: #fff;
        @include md(max){
            height: 2px;
        }

        &.-top {
            top: 19px;
            transform: translateX(-50%);
            width: 32px;
            @include md(max){
                top: 19px;
                width: 20px;
            }

            .AppHeader.-open & {
                top: 32px;
                transform: translateX(-50%) rotate(45deg);
                @include md(max){
                    top: 27px;
                }
            }
        }

        &.-center {
            top: 32px;
            transform: translateX(-50%);
            width: 20px;
            @include md(max){
                top: 27px;
                width: 14px;
            }

            .AppHeader.-open & {
                opacity: 0;
            }
        }

        &.-bottom {
            top: 45px;
            transform: translateX(-50%);
            width: 32px;
            @include md(max){
                top: 35px;
                width: 20px;
            }

            .AppHeader.-open & {
                top: 32px;
                transform: translateX(-50%) rotate(-45deg);
                @include md(max) {
                    top: 27px;
                }
            }
        }
    }

</style>