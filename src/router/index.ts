import { computed } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import i18n from '@/i18n'

const constantRoutes: Readonly<RouteRecordRaw[]> = [
    {
        path: '/login',
        component: () => import('@/views/login/Login.vue'),
        meta: {
            root: true,
            hidden: true,
            title: computed(() => i18n.global.t('loginPage.title')),
        },
    },
    {
        path: '/',
        component: () => import('@/layout/Layout.vue'),
        redirect: '/dashboard',
        meta: { root: true },
        children: [
            {
                path: 'dashboard',
                component: () => import('@/views/dashboard/Dashboard.vue'),
                meta: {
                    title: computed(() => i18n.global.t('dashboardPage.title')),
                },
            },
        ],
    },
    {
        path: '/example',
        component: () => import('@/layout/Layout.vue'),
        redirect: '/example/table',
        meta: { root: true },
        children: [
            {
                path: 'table',
                component: () => import('@/views/dashboard/Dashboard.vue'),
                meta: {
                    title: computed(() => i18n.global.t('dashboardPage.title')),
                },
            },
        ],
    },
]

export default createRouter({
    routes: constantRoutes,
    history: createWebHashHistory(),
})
