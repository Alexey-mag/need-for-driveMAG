<template>
  <div class="app">
    <component :is="layout" />
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout";

export default {
  name: "App",
  components: {
    DefaultLayout
  },
  data() {
    return {
      layout: this.$route.meta.layout
    };
  }
};
</script>

<style lang="scss">
.app {
}
</style>
