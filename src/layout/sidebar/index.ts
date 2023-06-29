import router from '@/router'

export function pathShow(path: string) {
    const routes = router.getRoutes()
    const targetRoute = routes.find((d) => d.path === path)
    if (!targetRoute) return false
    return !targetRoute.meta.hidden
}

export type Link = {
    type: 'link'
    to: string
    name: string
    icon: string
}

export type Group = {
    type: 'group'
    icon: string
    name: string
    children: (Link | Group)[]
}

export type Item = Link | Group
