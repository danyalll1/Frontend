import { createWebHistory, createRouter } from 'vue-router'

import auth from '@/components/layouts/auth/layout.vue'
import mainLayout from  '@/components/layouts/main/layout.vue'
import ordersPage from '@/components/pages/orders-page.vue'
import profilePage from '@/components/pages/profile-page.vue'

const routes = [
    {
        path: '/orders',
        meta:{
            layout: mainLayout
        },
        component: ordersPage
    },
    {
        path: '/profile',
        meta:{
            layout: mainLayout
        },
        component: profilePage,
        name:'Личный кабинет'
    },
    { path: '/auth', component: auth },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export {router}