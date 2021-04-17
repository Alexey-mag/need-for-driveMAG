<template>
  <div class="default__layout">
    <menu-app />
    <router-view :layout.sync="layout" />
  </div>
</template>

<script>
import MenuApp from "@/components/MenuApp";

export default {
  name: "DefaultLayout",
  data() {
    return {
      layout: this.$route.meta.layout
    };
  },
  components: {
    MenuApp
  }
};
</script>

<style scoped>
.default__layout {
  display: flex;
  height: 100vh;
}
</style>
