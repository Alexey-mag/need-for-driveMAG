<template>
  <div class="order__model">Model</div>
</template>

<script>
export default {
  name: "Model"
};
</script>

<style scoped lang="scss">
.order__model {
  grid-area: 5 / 1 / 26 / 32;
  display: grid;
  grid-template-columns: repeat(32, 1fr);
  grid-template-rows: repeat(21, 1fr);
}
</style>
