import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ordenes',
    name: 'orders',
    component: () => import('../views/OrdersView.vue')
  },
  {
    path: '/Conductores',
    name: 'Conductores',
    component: () => import('../views/DriversView.vue')
  },
  {
    path: '/camiones',
    name: 'trucks',
    component: () => import('../views/TrucksView.vue')
  },
  {
    path: '/Trailers',
    name: 'trailers',
    component: () => import('../views/TrailersView.vue')
  },
  {
    path: '/direcciones',
    name: 'address',
    component: () => import('../views/LocationsView.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
