<template>
  <div class="home__container">
    <main-page />
    <slider-vue />
  </div>
</template>

<script>
import MainPage from "@/components/MainPage";
import SliderVue from "@/components/Slider/Slider";

export default {
  components: {
    MainPage,
    SliderVue
  }
};
</script>

<style lang="scss">
.home__container {
  display: flex;
  margin: 0;
  justify-content: space-between;
}
</style>
