import { defineAsyncComponent } from 'vue';
import Loading from '../components/common/Loading.vue';

export default [
  {
    path: '/',
    name: 'Home',
    component: defineAsyncComponent({
      loader: () => import('../views/Home.vue'),
      loadingComponent: Loading,
    }),
  },
  {
    path: '/about',
    name: 'About',
    component: defineAsyncComponent({
      loader: () => import('../views/About.vue'),
      loadingComponent: Loading,
    }),
  },
];
