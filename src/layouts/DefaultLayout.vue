<template>
  <div class="default__layout">
    <menu-app />
    <router-view :layout="layout" />
  </div>
</template>

<script>
import MenuApp from "@/components/MenuApp";

export default {
  name: "DefaultLayout",
  components: {
    MenuApp
  },
  data() {
    return {
      layout: this.$route.meta.layout
    };
  }
};
</script>

<style scoped>
.default__layout {
  display: flex;
  height: 100vh;
}
</style>
