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
    meta: {
      layout: "DefaultLayout"
    },
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "DefaultLayout"
    }
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL
});

export default router;
