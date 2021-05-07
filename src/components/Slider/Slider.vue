<template>
  <slider :v-model="slides.length" class="slider">
    <slider-item v-for="slide in slides" :key="slide.id">
      <slide :slide="slide" />
    </slider-item>
    <!--    Проверяем, открыто ли меню, чтобы применить оверлей-->
    <div :class="{ slider__overlay: isMenuOpen }" />
  </slider>
</template>

<script>
import { mapGetters } from "vuex";
import Slide from "@/components/Slider/Slide";

export default {
  name: "SliderVue",
  computed: {
    ...mapGetters("shared", ["slides", "isMenuOpen"])
  },
  components: {
    Slide
  }
};
</script>

<style lang="scss">
.slider {
  position: relative;
  width: 50vw !important;
  height: 100vh !important;
  display: flex;
}

.slider__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 250;
  display: block;
  background-color: rgba(0, 0, 0, 0.8);
}

.slider-btn {
  width: 64px !important;
  transition: none !important;
  z-index: 200 !important;
}

.slider-btn:hover {
  background-color: rgba($main-green, 0.2) !important;
}

.slider-icon {
  z-index: 200 !important;
  color: white !important;
  width: 8px !important;
  height: 18px !important;
  background: url("~@/assets/prevArrow.svg") no-repeat center !important;
  opacity: 1 !important;
  cursor: pointer !important;
  transform: none !important;
  border-left: none !important;
  border-bottom: none !important;
  transition: none !important;
}

.slider-icon-right {
  transform: rotate(180deg) !important;
}

.slider-indicator-icon {
  z-index: 200 !important;
  width: 8px !important;
  height: 8px !important;
  margin-right: 8px !important;
  margin-bottom: 12px !important;
  background: #eeeeee !important;
}

.slider-indicator-active {
  background: #0ec261 !important;
}

.slider-indicators {
  z-index: 200 !important;
}

// --------------------------------1340------------------------------------
@media screen and (max-width: $desktop-min) {
  .slider-btn {
    width: 32px !important;
  }
  .slider {
    width: 40vw !important;
  }
}

// ---------------------------------1023-------------------------------------
@media screen and (max-width: $tablet) {
  .slider {
    display: none;
  }
}
</style>
