import Vue from "vue";
import Vuex from "vuex";
import shared from "./shared";
import order from "@/store/order";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    shared,
    order
  }
});
