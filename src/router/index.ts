import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/music',
    name: 'Music',
    component: () => import('../views/Music.vue'),
  },
  {
    path: '/band',
    name: 'Band',
    component: () => import('../views/Band.vue'),
  },
  {
    path: '/shows',
    name: 'Shows',
    component: () => import('../views/Shows.vue'),
  },
  {
    path: '/downloads',
    name: 'Downloads',
    component: () => import('../views/Downloads.vue'),
  },
  {
    path: '/datenschutzerklaerung',
    name: 'Datenschutz',
    component: () => import('../views/Datenschutz.vue'),
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: () => import('../views/Impressum.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: () => {
    return {
      top: 0,
    }
  },
})

export default router
