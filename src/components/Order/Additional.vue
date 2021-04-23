<template>
  <div class="order__additional">Additional</div>
</template>

<script>
export default {
  name: "Additional"
};
</script>

<style scoped lang="scss">
.order__additional {
  grid-area: 5 / 1 / 26 / 32;
  display: grid;
  grid-template-columns: repeat(32, 1fr);
  grid-template-rows: repeat(21, 1fr);
}
</style>
