<script lang="ts">
import { defineComponent } from "vue";
import AppMenuTrigger from "@/components/header/AppMenuTrigger.vue";
import AppMenu from "@/components/AppMenu.vue";

export default defineComponent({
    //コンポーネント名
    name: "AppHeader",
    components: {
    //メニューボタン・メニューコンポーネントを追加
    AppMenuTrigger,
    AppMenu
  }
})
</script>

<!-- ヘッダーコンポーネント -->
<template>
    <header class="AppHeader">
        <nav class="AppHeader__nav" aria-label="グローバルメニュー">
            <AppMenuTrigger />

            <div class="AppHeader__list" role="list">
                <!-- TOP画面へのリンク先と画面の表示内容 -->
                <div class="AppHeader__home" role="listitem">
                    <router-link to="/" class="AppHeader__homeLink">
                        <span class="AppHeader__homeLogo">  
                            <img src="@/assets/images/logo-vue.svg" alt="ロゴ:Vue.js" />
                        </span>

                        <span class="AppHeader__homeText">
                            <span class="AppHeader__homeTextMain">
                                <span>現場で使える</span>
                                <span>Vue.js 3.X</span>
                            </span>
                            <span class="AppHeader__homeTextSub">実践ガイド</span>
                        </span>

                        <span class="_VisuallyHidden">ホーム</span>                      
                    </router-link>
                </div>

                <!-- ProductNote画面のリンク先と表示内容 -->
                <div class="AppHeader__note" role="listitem">
                    <router-link to="/production-note" class="AppHeader__noteLink">
                        <em class="AppHeader__noteText">Production note</em>
                    </router-link>
                </div>

                <!-- メニュー機能 -->
                <div>
                    <AppMenu />
                </div>
            </div>

            <div class="AppHeader__bg">
                <svg class="AppHeader__bgImage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 50">
                    <path
                        class="AppHeader__bgMorph"
                        style="transform:rotate(180deg) scaleX(1.2);transform-origin:41% 40%;"
                        d="M 19.499615,1.5030295 C 15.341558,11.017856 5.4243459,
                        31.217087 1.2037966,39.132841 10.361482,39.005187 29.91693,
                        39.467197 38.833611,39.035804 34.978274,30.942616 24.624859,
                        11.418574 20.165144,1.5845618 18.73688,1.6665173 20.913606,
                        1.4728946 19.499615,1.5030295 Z"
                    />
                </svg>
            </div>

        </nav>
    </header>
</template>