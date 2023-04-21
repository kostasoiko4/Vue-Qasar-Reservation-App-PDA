
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Index.vue') },
      { path: 'menu', component: () => import('src/pages/Menu.vue') },
      { path: 'tables', component: () => import('src/pages/Tables.vue') },
      { path: 'orders', component: () => import('src/pages/Orders.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
