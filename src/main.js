import Vue from 'vue'
import App from './App.vue'
import FirebaseVue from '@/firebase'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(far)
library.add(fas)
library.add(fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(FirebaseVue)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
