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