import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Order from "@/views/Order";

Vue.use(VueRouter);
const routes = [
  {
    path: "/order",
    name: "Order",
    component: Order,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
