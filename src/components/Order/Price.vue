<template>
  <div class="order__price">
    <p>Ваш заказ</p>
    <div v-if="getPoint">
      {{ getPoint.cityId.name }}<br />{{ getPoint.address }}
    </div>
    <button @click="lookAtPoints">Click</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Price",
  computed: {
    ...mapGetters("order", ["getCity", "getPoint", "getPoints"])
  },
  methods: {
    lookAtPoints() {
      console.log(this.getPoints);
      console.log(this.getPoint);
    }
  }
};
</script>

<style scoped lang="scss">
.order__price {
  grid-area: 6 / 33 / 21 / 42;
}
</style>
