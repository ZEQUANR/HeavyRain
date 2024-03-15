export const DEFAULT_LAYOUT = () => import('@/layout/default-layout.vue');

export const NOT_FOUND_ROUTE = {
  path: '/:pathMatch(.*)*',
  name: 'notFound',
  component: () => import('@/views/not-found/index.vue'),
};
