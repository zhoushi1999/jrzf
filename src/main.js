import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant, { Lazyload } from 'vant'
// import 'vant/lib/index.css'
import 'amfe-flexible'
import 'vant/lib/index.less'
import '@/iconfont/iconfont.css'
import '@/styles/index.less'
Vue.use(Lazyload, {
  lazyComponent: true
})
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
