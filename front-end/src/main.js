// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'

// third-party css quote
require('animate.css')
require('normalize.css')

Vue.config.productionTip = false

// config before every route entry
router.beforeEach((to, from, next) => {
  // don't login should to Login/Welcome
  if (!store.state.isLogin && ['Login', 'Welcome'].indexOf(to.name) === -1) {
    next(false)
    return
  }
  if (store.state.isLogin && ['Login', 'Welcome'].indexOf(to.name) !== -1) {
    store.commit('logout')
  } else {
    // nav settings
    store.commit('nav', to.name)
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
