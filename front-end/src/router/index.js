import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/view/welcome'
import Login from '@/view/login'
import Home from '@/view/home'
import Consult from '@/view/consult'
import Upload from '@/view/upload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/consult',
      name: 'Consult',
      component: Consult
    }
  ]
})
