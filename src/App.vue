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
  },
  mounted() {
    this.$store.dispatch("order/fetchCity");
    this.$store.dispatch("order/fetchPoints");
  }
};
</script>

<style lang="scss">
.app {
}
</style>
