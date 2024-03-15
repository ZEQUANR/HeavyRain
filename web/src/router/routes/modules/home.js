import { DEFAULT_LAYOUT } from '../base';

const HOME = {
  path: '/home',
  name: 'home',
  component: DEFAULT_LAYOUT,
  meta: {
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 0,
  },
  children: [
    {
      path: 'home',
      name: 'home',
      component: () => import('@/views/home/index.vue'),
      meta: {
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default HOME;
