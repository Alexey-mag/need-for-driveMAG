<template>
  <slider
    :v-model="slides.length"
    class="slider"
  >
    <slider-item
      v-for="slide in slides"
      :key="slide.id"
    >
      <img :src="slide.imgSrc">
      <div class="slider__content">
        <h1 class="slider__title">
          {{ slide.title }}
        </h1>
        <p class="slider__description">
          {{ slide.desc }}
        </p>
        <div
          class="slider__button"
          :style="slide.background"
        >
          {{ slide.buttonText }}
        </div>
      </div>
    </slider-item>
    <div :class="{slider__overlay: getBurgerStatus}" />
  </slider>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'SliderVue',
    computed: {
        ...mapGetters('shared', ['slides', 'getBurgerStatus'])
    }
}
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
    color:white !important;
    width: 8px !important;
    height: 18px !important;
    background: url('~@/assets/prevArrow.svg') no-repeat center !important;
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
    background: #EEEEEE !important;
  }
  .slider-indicator-active {
    background: #0EC261 !important;
  }
  .slider-indicators {
      z-index: 200 !important;
  }
    .slider__title {
      color: white;
      font-style: normal;
      font-weight: 500;
      font-size: 40px;
      line-height: 47px;
    }
    .slider__content {
      position: absolute;
      top: 237px;
      left: 96px;
      right: 97px;
      display: flex;
      justify-content: right;
      flex-direction: column;
    }

    .slider__description {
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 22px;
      color: $main-light-gray;
      margin-top: 8px;
    }
    .slider__title {
      color: white;
      font-style: normal;
      font-weight: 500;
      font-size: 40px;
      line-height: 47px;
    }
  .slider__button {
    width: 164px;
    height: 48px;
    border-radius: 4px;
    margin-top: 32px;
    border: none;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: $main-light-gray;
    cursor: pointer !important;
  }
    .slider__button:hover {
      filter: brightness(0.9);
    }
    .slider__button:active {
      filter: brightness(0.8);
    }
</style>
