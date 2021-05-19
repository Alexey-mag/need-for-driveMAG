<template>
  <div class="app">
    <component :is="layout" />
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout";
import { mapActions, mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    DefaultLayout
  },
  data() {
    return {
      layout: this.$route.meta.layout,
      windowWidth: window.innerWidth
    };
  },
  mounted() {
    this.fetchCity();
    this.setWindowWidth(this.windowWidth);
    window.onresize = () => {
      this.windowWidth = window.innerWidth
      this.setWindowWidth(this.windowWidth);
    }
  },
  methods: {
    ...mapActions("order", ["fetchCity"]),
    ...mapMutations('shared', ['setWindowWidth'])
  }
};
</script>

<style lang="scss">
.app {
}
</style>
