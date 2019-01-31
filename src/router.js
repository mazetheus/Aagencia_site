import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import jQuery from 'jquery'
let $ = jQuery;
Vue.use(Router)

export default new Router({
  mode: 'history',
  hashbang: false,
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      window.location.hash = '';
      return $('html,body').animate({scrollTop: $(to.hash).offset().top }, 1000)
      //return {selector: to.hash}
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projetos',
      name: 'projetos',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Projetos.vue')
    },
    {
      path: '/projeto/:name',
      name:'projeto',
      component: () => import('./views/Projeto.vue')
    }
  ]
})
