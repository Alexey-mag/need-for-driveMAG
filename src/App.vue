<template>
  <div class="app">
    <component :is="layout" />
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout";
import { mapActions } from "vuex";

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
    this.fetchCity();
  },
  methods: {
    ...mapActions("order", ["fetchCity"])
  }
};
</script>

<style lang="scss">
.app {
}
</style>
