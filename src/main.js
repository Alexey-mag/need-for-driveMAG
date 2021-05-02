import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router/index";
import EasySlider from "vue-easy-slider";
import Loader from './components/Loader';

Vue.use(EasySlider);

Vue.config.productionTip = false;

new Vue({
  store,
  loader:Loader,
  router,
  render: h => h(App)
}).$mount("#app");
