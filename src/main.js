import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'

/* register global dependencies */
Vue.use(require("moment"))

//
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
