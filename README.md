# A Simple swiper Component for Vue.js

## Installation
```
npm i -S @yanghongjun19/vue-swiper
```

## Usage
In `main.js` of a Vue Project:
```javascript
import swiper from '@yanghongjun19/vue-swiper';
Vue.use(swiper);
```

## 浏览器
```javascript
 <script src="./dist/vue-swiper.umd.js"></script>
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

