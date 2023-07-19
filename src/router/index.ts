import { computed } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import i18n from '@/i18n'

const constantRoutes: Readonly<RouteRecordRaw[]> = [
    {
        path: '/login',
        component: () => import('@/views/login/Login.vue'),
        meta: {
            hidden: true,
            title: computed(() => i18n.global.t('loginPage.title')),
        },
    },
    {
        path: '/',
        component: () => import('@/layout/Layout.vue'),
        redirect: '/dashboard',
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
        meta: {
            title: computed(() => i18n.global.t('examplePage.title')),
        },
        redirect: '/example/table',
        children: [
            {
                path: 'table',
                component: () => import('@/views/table/Table.vue'),
                meta: {
                    title: computed(() => i18n.global.t('tablePage.title')),
                },
            },
        ],
    },
]

export default createRouter({
    routes: constantRoutes,
    history: createWebHistory(),
})
