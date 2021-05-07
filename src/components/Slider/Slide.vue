<template>
  <div class="slides">
    <img :src="slide.imgSrc" class="slider__image" alt="" />
    <div class="slider__content">
      <h1 class="slider__title">
        {{ slide.title }}
      </h1>
      <p class="slider__description">
        {{ slide.desc }}
      </p>
      <div class="slider__button" :style="slide.background">
        {{ slide.buttonText }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slide",
  props: {
    slide: Object
  }
};
</script>

<style scoped lang="scss">
.slides {
  display: flex;
  height: 100vh;
  width: 100%;
}
.slider__image {
  object-fit: cover;
  width: inherit;
  height: inherit;
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

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.8);
  }
}
@media screen and (max-width: $desktop-min) {
  .slider__content {
    left: 64px;
    right: 64px;
  }
}
</style>
