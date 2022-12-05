
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
  {
    path: '/ia_bp',
    component: () => import('components/IaBP.vue')
  },
  {
    path: '/ia_bback',
    component: () => import('components/IaBBack.vue')
  },
]

export default routes
