
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
    component: () => import('components/IaBAstar.vue')
  },
  {
    path: '/ia_bp',
    component: () => import('components/IaBGulosa.vue')
  },
  {
    path: '/ia_bback',
    component: () => import('components/IaBOrdenada.vue')
  },
]

export default routes
