<script lang="ts">
import { defineComponent } from 'vue';
import AppMenuLink from '@/components/AppMenuLink.vue';
//拡張子つけるとエラー
import { menuRoutes } from '@/router/index';

export default defineComponent({
    //コンポーネント名
    name: "AppMenu",

    //データの定義
    data(){
        return {
            href: "",
            //Topページだけ省いたルートオブジェクト
            pages: menuRoutes
        };
    },
    components: {
    //メニューコンポーネントの追加
    AppMenuLink
    }
});
</script>

<!-- メニューコンポーネント -->
<template>
    <div class="AppMenu">
        <div class="AppMenu__inner">

            <div class="AppMenu__list">
                <!-- ルーティング情報からページ名とリンク先を取得し、ループでリンク付きテキストを生成-->
                <div class="AppMenu__item" role="listitem" v-for="page in pages" :key="page">
                    <AppMenuLink :href="page.path">
                        {{ page.name}}
                    </AppMenuLink>
                </div>
            </div>

            <!--ロゴ-->
            <div class="AppMenu__logo">
                <div class="AddMenu__logoImage">
                    <img src="@/assets/images/logo-vue.svg" alt="ロゴ:Vue.js"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    //画面上に固定し、中央揃えで非表示にする
    .AppMenu{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        display: flex;
        align-items: center;
        visibility: hidden;

        //-open要素を付与すると表示
        .AppHeader.-open & {
            visibility: visible;
        }
    }

    .AppMenu__inner {
        position: relative;
        z-index: 2;
        padding-left: vw(700, $XL);
        @include md(max) {
            width: 100%;
            height: 100%;
            padding: 278px 0 0;
            box-sizing: border-box;
        }
    }

    .AppMenu__list{

    }

    .AppMenu__item{
        @include md(max){
            text-align: center;
        }
    }

    //ロゴに対してレスポンシブ対応
    .AppMenu__logo{
        position: absolute;
        top: 50%;
        left: vm(170, $XL);
        transform: translateY(-50%);
        width: vm(420, $XL);
        height: vm(420, $XL);
        display: flex;
        justify-content: center;
        background-color: #fff;
        border-radius: 50%;
        @include md(max){
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            width: 158px;
            height: 158px;
        }
    }

    .AppMenu__logoImage {
        width: vw(322, $XL);
        padding-top: vw(106, $XL);
        @include md(max) {
        width: 120px;
        padding-top: 38px;
    }
}
</style>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  