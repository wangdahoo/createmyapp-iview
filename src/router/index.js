import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'
import Login from '@/views/Login'
import Dashboard from '@/views/Dashboard'
import Detail from '@/views/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    // 默认路由
    {
      path: '*',
      component: Hello
    }
  ]
})
