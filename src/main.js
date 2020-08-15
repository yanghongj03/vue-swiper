import Vue from 'vue'
import App from './App.vue'

import Swiper from './components/swiper/index'
Vue.use(Swiper)
new Vue({
  render: h => h(App),
}).$mount('#app')
