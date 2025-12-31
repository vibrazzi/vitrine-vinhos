import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'HomePage',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/product-details/:id',
    name: 'ProductDetails',
    component: () => import('@/views/ProductDetails.vue'),
    props: true,
  },
  {
    path: '/collection',
    name: 'Collection',
    component: () => import('@/components/Collection.vue'),
  },
  {
    path: '/vinhos',
    name: 'Vinhos',
    component: () => import('@/components/ExclusiveSection.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0 };
  },
});

export default router;
