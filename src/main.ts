import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { faInit } from './fontawesome'

// Fontaweomse
faInit()

// Import scss
import '@/assets/style/application.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
