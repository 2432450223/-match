import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'
import router from './router'

Vue.use(ElementUI);

Vue.config.productionTip = false

// step1：引入 axios
import Axios from 'axios'

Vue.config.productionTip = false

// step2：把axios挂载到vue的原型中，在vue中每个组件都可以使用axios发送请求,
// 不需要每次都 import一下 axios了，直接使用 $axios 即可
Vue.prototype.$axios = Axios

// step3：使每次请求都会带一个 /api 前缀 
Axios.defaults.baseURL = '/api'

import vueXlsxTable from 'vue-xlsx-table'
Vue.use(vueXlsxTable, {rABS: false})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
