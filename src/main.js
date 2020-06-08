import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyLoad from 'vue-lazyload' // 实现懒加载的插件
import axios from 'axios'
import VueAxios from 'vue-axios' // 将axios挂在到vue实现的插件
import './utlis/http'

import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyLoad, { // 使用懒加载插件
  loading: './assets/imgs/loading-svg/loading-bars.svg' // 懒加载的路径
})
Vue.use(VueAxios, axios) // 使用中间件将axios挂在到vue实现

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
