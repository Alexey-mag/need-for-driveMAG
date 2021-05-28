<template>
  <div class="app">
    <menu-app />
    <router-view />
  </div>
</template>

<script>
import MenuApp from './components/MenuApp';
import { mapActions, mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    MenuApp
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
  display: flex;
  height: 100vh;
}
</style>
