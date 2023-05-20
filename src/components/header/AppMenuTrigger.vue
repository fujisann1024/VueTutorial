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