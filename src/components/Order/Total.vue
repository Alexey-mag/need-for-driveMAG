<template>
  <div class="order__total">
      <div v-if="getConfirmedOrder" class="total__container">
        <div class="total__info">
          <p class="total__info_title">Ваш заказ подтвержден</p>
          <p class="total__car_name">{{ getConfirmedOrder.carId.name }}</p>
          <p class="total__car_number">{{ getConfirmedOrder.carId.number }}</p>
          <p v-if="getConfirmedOrder.isFullTank" class="total__option">
            <b>Топливо </b>100%
          </p>
          <p v-if="getConfirmedOrder.isNeedChildChair" class="total__option">
            <b>Детское кресло</b>
          </p>
          <p v-if="getConfirmedOrder.isRightWheel" class="total__option">
            <b>Правый руль</b>
          </p>
          <p class="total__option">
            <b>Доступна с </b
            >{{ new Date(getConfirmedOrder.dateFrom).toLocaleString() }}
          </p>
        </div>
        <img
          class="total__img"
          alt=""
          :src="
            'https://api-factory.simbirsoft1.com' +
              getConfirmedOrder.carId.thumbnail.path
          "
          @error="defaultImage"
        />
      </div>
      <div v-else class="total__container">
        <div class="total__info">
          <p class="total__car_name">{{ getOrder.carId.name }}</p>
          <p class="total__car_number">{{ getOrder.carId.number }}</p>
          <p v-if="getOrder.isFullTank" class="total__option">
            <b>Топливо </b>100%
          </p>
          <p v-if="getOrder.isNeedChildChair" class="total__option">
            <b>Детское кресло</b>
          </p>
          <p v-if="getOrder.isRightWheel" class="total__option">
            <b>Правый руль</b>
          </p>
          <p class="total__option">
            <b>Доступна с </b>{{ new Date(getOrder.dateFrom).toLocaleString() }}
          </p>
        </div>
        <img
          class="total__img"
          alt=""
          :src="
            'https://api-factory.simbirsoft1.com' +
              getOrder.carId.thumbnail.path
          "
          @error="defaultImage"
        />
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Total",
  computed: {
    ...mapGetters("total", ["getOrder", "getConfirmedOrder"])
  },
  methods: {
    defaultImage(e) {
      e.target.src = "/images/default-car.jpg";
    }
  }
};
</script>

<style lang="scss">
.order__total {
  grid-area: 5 / 1 / 26 / 32;
  display: grid;
  grid-template-columns: repeat(32, 1fr);
  grid-template-rows: repeat(21, 1fr);
  border-right: 1px solid $main-light-gray;
}
.total__container {
  grid-area: 2 / 3 / 8 / 26;
  display: flex;
  justify-content: space-between;
}
.total__img {
  width: 256px;
  height: 116px;
}
.total__info {
  display: flex;
  flex-direction: column;
}
.total__car_name {
  font-size: 18px;
  line-height: 21px;
}
.total__car_number {
  width: fit-content;
  padding: 4px 8px;
  font-size: 14px;
  line-height: 16px;
  border: 1px solid $main-gray;
  border-radius: 4px;
  margin-top: 8px;
}
.total__option {
  font-size: 14px;
  line-height: 16px;
  margin-top: 8px;
}
.total__info_title {
  font-size: 24px;
  line-height: 28px;
}
</style>
