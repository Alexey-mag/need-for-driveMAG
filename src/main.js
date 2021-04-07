import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import EasySlider from 'vue-easy-slider'

Vue.use(EasySlider)

Vue.config.productionTip = false

new Vue({
    store,
    VueRouter,
    render: h => h(App)
}).$mount('#app')
