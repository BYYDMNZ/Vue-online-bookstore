// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'
import axios from 'axios'
import {store} from './store/store'
import VueChart from 'vue-chart-js'

//axios.defaults.baseURL='';

Vue.use(VueRouter)
Vue.use(VueChart)
Vue.config.productionTip = false
axios.defaults.baseURL = "http://172.18.172.17:8080/"
/* eslint-disable no-new */
const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
  
})
