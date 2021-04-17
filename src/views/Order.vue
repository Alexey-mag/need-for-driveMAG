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
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100vh;
  }
  .order__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 10%;
    border-bottom: 1px solid $main-light-gray;
  }
  .order__nav {
    display: flex;
    width: 100%;
    height: fit-content;
    border-bottom: 1px solid $main-light-gray;
  }
</style>
