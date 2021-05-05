<template>
  <div class="order__price">
    <div class="price__container">
      <p class="price__title">Ваш заказ:</p>
      <div v-if="getPoint" class="price__menu_step">
        <p class="price__menu_step__name">Пункт выдачи</p>
        <div class="price__dots"></div>
        <div class="price__menu_step__value">
          {{ getPoint.cityId.name }},<br />{{ getPoint.address }}
        </div>
      </div>
      <div v-if="getCar" class="price__menu_step">
        <p class="price__menu_step__name">Модель</p>
        <div class="price__dots"></div>
        <div class="price__menu_step__value">
          {{ getCar.name }}
        </div>
      </div>
      <div v-if="getColor" class="price__menu_step">
        <p class="price__menu_step__name">Цвет</p>
        <div class="price__dots"></div>
        <div class="price__menu_step__value">
          {{ getColor }}
        </div>
      </div>
      <div v-if="getCar" class="price__total">
        <b>Цена:</b> от{{ getCar.priceMin }} до {{ getCar.priceMax }} ₽
      </div>
      <button
        class="price__button"
        :class="{
          price__button_disabled:
            orderComponents[currentComponent.id].isDisabled
        }"
        :disabled="orderComponents[currentComponent.id].isDisabled"
        @click="toNextStep"
      >
        {{ currentComponent.buttonText }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Price",
  computed: {
    ...mapGetters("order", ["getCity", "getPoint", "getPoints"]),
    ...mapGetters("model", ["getCar", "getColor"]),
    ...mapGetters("shared", ["currentComponent", "orderComponents"])
  },
  methods: {
    toNextStep() {
      // console.log(this.currentComponent);
      // console.log(this.getCar);
      this.$store.dispatch("shared/toNextStep");
    }
  }
};
</script>

<style scoped lang="scss">
.order__price {
  grid-area: 6 / 33 / 21 / 42;
}
.price__container {
}
.price__menu_step {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 15px;
}
.price__button {
  background: linear-gradient(90deg, #0ec261 2.61%, #039f67 112.6%);
  background-blend-mode: darken;
  border-radius: 8px;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  color: $main-light-gray;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  margin-top: 60px;
  border: none;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.8);
  }
}
.price__button_disabled {
  background: $main-light-gray !important;
  color: white;
  cursor: initial !important;
}
.price__title {
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: right;
  color: $main-black;
  margin-bottom: 26px;
}
.price__dots {
  width: auto;
  flex-grow: 1;
  content: "";
  margin: 0 11px;
  height: auto;
  border-bottom: 1px dotted $main-gray;
}
.price__menu_step__name {
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $main-black;
}
.price__menu_step__value {
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: $main-gray;
}
  .price__total {
    margin-top: 32px;
    margin-bottom: 32px;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
  }
</style>
