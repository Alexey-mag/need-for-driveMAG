<template>
  <div class="order__location">
    <div class="order__form_1">Form 1</div>
    <div class="order__map">Map</div>
  </div>
</template>

<script>
export default {
  name: "Location"
};
</script>

<style scoped lang="scss">
.order__location {
  grid-area: 5 / 1 / 26 / 33;
  display: grid;
  grid-template-columns: repeat(32, 1fr);
  grid-template-rows: repeat(21, 1fr);
}
.order__form_1 {
  grid-area: 1 / 3 / 6 / 13;
  background-color: chocolate;
}
.order__map {
  grid-area: 6 / 3 / 17 / 26;
  background-color: darkgoldenrod;
}
</style>
