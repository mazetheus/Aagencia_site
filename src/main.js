import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'

import {library} from '@fortawesome/fontawesome-svg-core'
//import {faMapMarkerAlt, faPhone, faCircle, faArrowDown} from '@fortawesome/free-solid-svg-icons'
import {faCircle} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faFacebook, faInstagram)
//library.add(faMapMarkerAlt, faPhone, faCircle, faArrowDown)
library.add(faCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.prototype.$appData = {
	projetos: [
		'planourbanismo',
		'paodan',
		'grekko',
		'nataladventure',
		'natalservice',
		'ioficina',

		//'orale10anos',
		'natalservice50anos',
		'caico10anos',
		'bestplacecopa',
		'biasouza',
		'bestplacefimdeano',
		'grandescarnavais',
		'natalsommos',
		'powerplate',
		'uniccar'
	]
}

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
