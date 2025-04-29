import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: '/', redirect: '/home', },
    {
        path: '/home#colecction',
        name: 'ContactSection',
        component: () => import('@/components/Collection.vue')
    },
    {
        path: '/home',
        name: 'HomePage',
        component: () => import('@/views/HomePage.vue')
    },
    {
        path: '/product-details/:id',
        name: 'ProductDetails',
        component: () => import('@/views/ProductDetails.vue')
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 };
    }
});

export default router;
