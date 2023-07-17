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

<style lang="scss" scoped>
.AppMenu__link {
  display: inline-block;
  vertical-align: top;
  font-family: $FONT_EN;
  font-weight: $FONT_WEIGHT_EN_BOLD;
  font-size: em(63, 16);
  line-height: 1.4;
  color: #fff;
  text-decoration: none;
  @include md(max) {
    font-size: em(40, 16);
  }
}
</style>