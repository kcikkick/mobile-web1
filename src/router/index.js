import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import CarNumberBind from '@/components/CarNumberBind'
import MyCoupon from '@/components/MyCoupon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/carNumberBind',
      name: 'carNumberBind',
      component: CarNumberBind
    },
    {
      path: '/myCoupon',
      name: 'myCoupon',
      component: MyCoupon
    },
  ]
})
