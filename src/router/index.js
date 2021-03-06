import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home/Home'
import City from '@/pages/City/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    }
  ]
})
