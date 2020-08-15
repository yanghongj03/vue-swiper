import Swiper from './Swiper'
import SwiperItem from './SwiperItem'

Swiper.install = Vue => {
  Vue.component(Swiper.name, Swiper);
  Vue.component(SwiperItem.name, SwiperItem)
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Swiper)
  window.Vue.use(SwiperItem)
}
export default Swiper