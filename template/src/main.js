import Vue from 'vue'
import App from './App'
import router from './router'
import filters from './filters/filters'
import globalMixin from './mixins/globalMixin'

Vue.config.productionTip = false
Vue.mixin(globalMixin);

// filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
