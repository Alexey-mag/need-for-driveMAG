import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "DefaultLayout"
    }
  },
  {
    path: "/order",
    name: "Order",
    component: () => import("@/views/Order"),
    meta: {
      layout: "DefaultLayout"
    },
    // children: [
    //   {
    //     path: "location",
    //     name: "Location",
    //     component: () => import("@/components/Order/Location/Location"),
    //   },
    //   {
    //     path: "model",
    //     name: "Model",
    //     component: () => import("@/components/Order/Model"),
    //   },
    //   {
    //     path: "additional",
    //     name: "Additional",
    //     component: () => import("@/components/Order/Additional"),
    //   },
    //   {
    //     path: "total",
    //     name: "Total",
    //     component: () => import("@/components/Order/Total"),
    //   }
    // ]
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL
});

export default router;
