<template>
  <div class="order">
    <router-link :to="{ name: 'Location' }">Location </router-link>
    <router-link :to="{ name: 'Model' }">Model </router-link>
    <router-link :to="{ name: 'Additional' }">Additional </router-link>
    <router-link :to="{ name: 'Total' }">Total </router-link>
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

<style scoped></style>
