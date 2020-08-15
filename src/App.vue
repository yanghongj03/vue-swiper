<template>
  <div id="app">
   <swiper>
      <swiper-item v-for="(item,index) in list" :key="index">
        <a>
          <img :src="item"/>
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>

import {Swiper, SwiperItem} from './components/swiper/index'
export default {
  name: 'App',
   data() {
    return {
      list: [
        "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1597280683&di=c77ecd04e118e29372cd14b2645d67b9&src=http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597290767148&di=3c9c7196a8a3ff97d59ea44b6a3465f9&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F56%2F12%2F01300000164151121576126282411.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597290767148&di=897a75b037b7a64c3202be22110a8832&imgtype=0&src=http%3A%2F%2Fp2.so.qhimgs1.com%2Ft01dfcbc38578dac4c2.jpg",
      ],
    };
  },
  components: {
    Swiper,
    SwiperItem
  },
  
}
</script>

<style lang="scss">

</style>
