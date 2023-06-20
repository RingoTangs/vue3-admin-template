import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const constantRoutes: Readonly<RouteRecordRaw[]> = []

export default createRouter({
    routes: constantRoutes,
    history: createWebHashHistory(),
})
