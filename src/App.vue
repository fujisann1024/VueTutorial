<!--一旦読み込ませる-->
<script lang="ts">
  import { defineComponent } from "vue";
  import AppHeader from "@/components/AppHeader.vue";

  export default defineComponent({
    components: {
      AppHeader
    }
  });
</script>


<template>
  <div class = "site">

    <AppHeader />

    <main class = "main">

      <AppHero />
      <router-view />
    </main>

    <AppFooter />

  </div>
  <div id = "nav">
    <router-link to="/">Top</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/author">Author</router-link> |
    <router-link to="/production-note">ProductionNote</router-link> |
    <router-link to="/faq">Faq</router-link>
  </div>
</template>

<style lang="scss">
</style>
