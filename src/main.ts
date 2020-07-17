import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { faInit } from './fontawesome'
import VueApexCharts from 'vue-apexcharts'

// Fontaweomse
faInit()

// Apex charts
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

// Import scss
import '@/assets/style/application.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
