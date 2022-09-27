
const routes = [
  {
    path: '/',
    component: () => import('pages/Menu.vue')
  },
  {
    path: '/play',
    component: () => import('layouts/MainLayout.vue')
  },
]

export default routes
