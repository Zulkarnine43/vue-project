import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'
import VueRouter from 'vue-router'
import {routes} from './routes'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)

const router=new VueRouter({
  routes,
  mode:'history'
})

Vue.config.productionTip = false

new Vue({
  store:store,
  render: h => h(App),
  router
}).$mount('#app')
