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
      layout: 'DefaultLayout'
    };
  }
};
</script>

<style lang="scss">
.app {
}
</style>
