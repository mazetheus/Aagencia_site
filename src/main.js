import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faArrowCircleLeft, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faFacebook, faInstagram, faWhatsapp)
library.add(faPhone)
library.add(faArrowCircleLeft, faArrowCircleRight)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.prototype.$appData = {
	projetos: [
		'grandescarnavais',
		'paodan',
		'grekko',
		'nataladventure',
		'natalservice',
		'planourbanismo',
		'ioficina',
		//'orale10anos',
		'natalservice50anos',
		'caico10anos',
		'bestplacecopa',
		'biasouza',
		'bestplacefimdeano',
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
