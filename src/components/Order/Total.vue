<template>
  <div class="order__total">Total</div>
</template>

<script>
export default {
  name: "Total"
};
</script>

<style scoped>
.order__total {
  grid-area: 5 / 1 / 26 / 32;
  display: grid;
  grid-template-columns: repeat(32, 1fr);
  grid-template-rows: repeat(21, 1fr);
}
</style>
