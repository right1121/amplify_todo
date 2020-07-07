import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Amplify from 'aws-amplify'
import aws_exports from './aws-exports'

Vue.config.productionTip = false

Amplify.configure(aws_exports)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
