import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const route = [
    {
        path: "/",
        name: 'main',
        component: () => import('../layout/Main.vue'),
        meta: {
            isAdmin: true,
            isKupal: true
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../pages/About.vue'),
    
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('../pages/Contact.vue'),
    
    },
    {
        path: '/product',
        name: 'product',
        component: () => import('../pages/product.vue'),
    
    },
    {
        path: '/newPage',
        name: 'newPage',
        component: () => import('../pages/Newpage.vue')
        
    },
]


const router = createRouter({
     history: createWebHashHistory(import.meta.env.BASE_URL),
    // history: createWebHistory(import.meta.env.BASE_URL),
    routes: route
})

export default router;