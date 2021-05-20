import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Order from "../views/Order";
import Location from "../components/Order/Location/Location";
import Model from "../components/Order/Model";
import Additional from "../components/Order/Additional";
import Total from "../components/Order/Total";

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
    component: Order,
    meta: {
      layout: "DefaultLayout"
    },
    children: [
      {
        path: "location",
        name: "Location",
        component: Location,
        meta: {
          layout: "DefaultLayout"
        }
      },
      {
        path: "model",
        name: "Model",
        component: Model,
        meta: {
          layout: "DefaultLayout"
        }
      },
      {
        path: "additional",
        name: "Additional",
        component: Additional,
        meta: {
          layout: "DefaultLayout"
        }
      },
      {
        path: "total",
        name: "Total",
        component: Total,
        meta: {
          layout: "DefaultLayout"
        }
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL
});

export default router;