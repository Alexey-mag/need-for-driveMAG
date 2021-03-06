import Vue from "vue";
import Vuex from "vuex";
import shared from "./shared";
import order from "./order";
import model from "./model";
import additional from "./additional";
import total from "./total";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    shared,
    order,
    model,
    additional,
    total
  }
});
