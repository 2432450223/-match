import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/userOH',
    name: 'About',
    component: () => import('../views/userOut/Home.vue')
  },
  {
    path: '/switch',
    name: 'switch',
    component: () => import('../views/Switch.vue')
  },
  {
    path: '/showHome',
    name: 'sh',
    component: () => import('../views/Show/Home.vue')
  },
  {
    path: '/userSH',
    name: 'ush',
    component: () => import('../views/userShow/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
