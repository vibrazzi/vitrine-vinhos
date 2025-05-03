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
    props: true, // Passa o parâmetro `id` como prop para o componente
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
  scrollBehavior() {
    return { top: 0 }; // Garante que a página sempre comece no topo ao navegar
  },
});

export default router;
