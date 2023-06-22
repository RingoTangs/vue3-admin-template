import { computed } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
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
]

export default createRouter({
    routes: constantRoutes,
    history: createWebHashHistory(),
})
