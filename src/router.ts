import { createWebHistory, createRouter } from 'vue-router'

import auth from '@/components/layouts/auth/layout.vue'
import main from '@/components/layouts/main/layout.vue'

const routes = [
    { path: '/', component: main },
    { path: '/auth', component: auth },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export {router}