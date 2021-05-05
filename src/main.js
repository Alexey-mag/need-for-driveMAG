import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router/index";
import EasySlider from "vue-easy-slider";
import Loader from "./components/Loader";
import "./styles/theme/index.css";
import locale from "element-ui/lib/locale/lang/ru-RU";
import ElementUI from "element-ui";

Vue.use(EasySlider);
Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

new Vue({
  store,
  loader: Loader,
  router,
  render: h => h(App)
}).$mount("#app");
