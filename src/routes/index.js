import { createRouter, createWebHistory } from 'vue-router'

import AppRoutes from '@routes/app.routes'

/** @type { import('vue-router').RouterOptions['routes'] } */
const routes = [...AppRoutes]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
