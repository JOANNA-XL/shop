import Vue from 'vue'
import Router from 'vue-router'

//首页
import Index from '@/components/index'

// 公共组建
import Header from '@/components/commen/header'
import Footer from '@/components/commen/footer'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/Footer',
      name: 'Footer',
      component: Footer
    }
  ]
})
