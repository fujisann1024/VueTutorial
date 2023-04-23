<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  //ESLintの警告のためコンポーネント名を一旦複数の単語で構成するようにした
  name: "AboutView"
});
</script>