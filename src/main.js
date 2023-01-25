import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TradingVue from 'trading-vue-js'

import data from './data/data.json'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
