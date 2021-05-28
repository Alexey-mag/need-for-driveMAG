import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import EasySlider from "vue-easy-slider";
import Loader from "./components/Loader";
import "./styles/theme/index.css";
import locale from "element-ui/lib/locale/lang/ru-RU";
import ElementUI from "element-ui";
import Location from "@/components/Order/Location/Location";
import Model from "@/components/Order/Model";
import Additional from "@/components/Order/Additional";
import Total from "@/components/Order/Total";

Vue.component(Location)
Vue.component(Model)
Vue.component(Additional)
Vue.component(Total)

Vue.use(EasySlider);
Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

new Vue({
  store,
  loader: Loader,
  router,
  render: h => h(App)
}).$mount("#app");
