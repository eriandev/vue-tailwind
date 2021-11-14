const Home = () => import('@views/Home.vue')

/** @type { import('vue-router').RouterOptions['routes'] } */
const appRoutes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
]

export default appRoutes
