# A Simple swiper Component for Vue.js

## Installation
```
npm i -S @yanghongjun19/vue-swiper
```

## Usage
In `main.js` of a Vue Project:
```javascript
import swiper from '@yanghongjun19/vue-swiper';
import css from '@yanghongjun19/vue-swiper/dist/vue-swiper.css';
Vue.use(swiper);
```

In any Vue component:
```javascript
<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in list" :key="index">
        <a>
          <img :src="item"/>
        </a>
      </swiper-item>
    </swiper>

  </div>
</template>
```

