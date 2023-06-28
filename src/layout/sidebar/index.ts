import router from '@/router'

export function pathShow(path: string) {
    const routes = router.getRoutes()
    const targetRoute = routes.find((d) => d.path === path)
    if (!targetRoute) return false
    return !targetRoute.meta.hidden
}
