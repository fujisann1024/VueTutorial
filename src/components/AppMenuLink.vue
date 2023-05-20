<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name:"AppMenuLink",
    //親コンポーネントのデータ
    props: {
        href: {
            type: String,
            required: true,
            default: "/"
        }
    },
    methods: {
        //ページ遷移時にかならず閉じるようにする
        onClickMenuClose(){
            console.log(">>onClickMenuClose");
        }
    }
});
</script>

<!-- ナビゲーションコンポーネント
     コンポーネントにすることで冗長化を防ぐ-->
<template>
    <router-link class="AppMenu__link" :to="href">
        <span @click="onClickMenuClose">
            <slot />
        </span>
    </router-link>
</template>
