<template>
  <div class="order">
    <footer class="order__footer">Footer</footer>
    <div class="order__nav">
    <router-link :to="{ name: 'Location' }">Location /</router-link>
    <router-link :to="{ name: 'Model' }">Model /</router-link>
    <router-link :to="{ name: 'Additional' }">Additional /</router-link>
    <router-link :to="{ name: 'Total' }">Total /</router-link>
    </div>
    <router-view></router-view>
    <price />
  </div>
</template>

<script>
import Price from "@/components/Order/Price";
export default {
  name: "Order",
  components: { Price }
};
</script>

<style scoped lang="scss">
  .order {
    display: grid;
    grid-template-columns: repeat(43, 1fr);
    grid-template-rows: repeat(25, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 100vh;
    width: calc(100vw - 64px);
  }
  .order__footer {
    grid-area: 1 / 3 / 4 / 44;
    border-bottom: 1px solid $main-light-gray;
    background-color: aqua;
  }
  .order__nav {
    grid-area: 4 / 3 / 5 / 44;
    border-bottom: 1px solid $main-light-gray;
    background-color: bisque;
  }

</style>
