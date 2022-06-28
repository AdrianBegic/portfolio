import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Carousel from '../views/Carousel.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Carousel',
    component: () => import(/* webpackChunkName: "about" */ '../views/Carousel.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
