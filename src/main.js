import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.$totalcorrect = ''
Vue.prototype.$userAnswer = ''

new Vue({
  render: h => h(App),
}).$mount('#app')
