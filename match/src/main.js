import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import vueXlsxTable from 'vue-xlsx-table'
Vue.use(vueXlsxTable, {rABS: false})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
