import Vue from 'vue'
import Router from 'vue-router'

const demo = ()=>import('@/page/demo');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: demo
    }
  ]
})
