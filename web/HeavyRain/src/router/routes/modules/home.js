const HOME = {
  path: '/home',
  name: 'home',
  component: () => import('@/views/home/index.vue'),
  meta: {
    requiresAuth: true,
    roles: ['*'],
  },
};

export default HOME;
