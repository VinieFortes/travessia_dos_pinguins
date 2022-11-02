
const routes = [
  {
    path: '/',
    component: () => import('pages/Menu.vue')
  },
  {
    path: '/play',
    component: () => import('layouts/MainLayout.vue')
  },
  {
    path: '/ia_bl',
    component: () => import('components/IaBL.vue')
  },
]

export default routes
