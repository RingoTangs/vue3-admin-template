import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const constantRoutes: Readonly<RouteRecordRaw[]> = [
    {
        path: '/login',
        component: () => import('@/views/login/Login.vue'),
        meta: {
            hidden: true,
        },
    },
]

export default createRouter({
    routes: constantRoutes,
    history: createWebHashHistory(),
})
