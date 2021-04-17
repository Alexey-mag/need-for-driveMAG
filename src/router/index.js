import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home"),
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
    children: [
      {
        path: "location",
        name: "Location",
        component: import("@/components/Order/Location"),
        meta: {
          layout: "DefaultLayout"
        }
      },
      {
        path: "model",
        name: "Model",
        component: import("@/components/Order/Model"),
        meta: {
          layout: "DefaultLayout"
        }
      },
      {
        path: "/order/additional",
        name: "Additional",
        component: import("@/components/Order/Additional"),
        meta: {
          layout: "DefaultLayout"
        }
      },
      {
        path: "/order/total",
        name: "Total",
        component: import("@/components/Order/Total"),
        meta: {
          layout: "DefaultLayout"
        }
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
