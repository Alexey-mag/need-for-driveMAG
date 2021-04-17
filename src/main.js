import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from '@/router/index'
import EasySlider from 'vue-easy-slider'

Vue.use(EasySlider)

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
