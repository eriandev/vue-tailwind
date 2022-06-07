const HomeView = () => import('@views/HomeView.vue')

/** @type { import('vue-router').RouterOptions['routes'] } */
const appRoutes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
]

export default appRoutes
