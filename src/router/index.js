import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'
import Dashboard from '@/views/Dashboard'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
