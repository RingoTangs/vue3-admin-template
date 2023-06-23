import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getFullPageTitle } from '@/config'
import { useTokenStore, useUserStore } from '@/store'

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async (to, _, next) => {
    const tokenStore = useTokenStore()
    const userStore = useUserStore()

    // start progress bar
    NProgress.start()

    // determine whether the user has logged in
    const hasToken = tokenStore.hasToken
    if (hasToken) {
        if (to.path === '/login') {
            next({ path: '/' })
            NProgress.done()
        } else {
            const hasUserInfo = userStore.hasUserInfo
            if (hasUserInfo) {
                next()
            } else {
                try {
                    await userStore.getUserInfo(tokenStore.token)
                    next()
                } catch (err) {
                    userStore.removeUserInfo()
                    tokenStore.removeToken()
                    next(`/login?redirect=${to.path}`)
                    NProgress.done()
                }
            }
        }
    } else {
        /* has no token*/
        if (whiteList.indexOf(to.path) !== -1) {
            // in the free login whitelist, go directly
            next()
        } else {
            // other pages that do not have permission to access are redirected to the login page.
            next(`/login?redirect=${to.path}`)
            NProgress.done()
        }
    }
})

router.afterEach((to) => {
    // set page title
    NProgress.done()
    if (to.meta.title) {
        document.title = getFullPageTitle(to.meta.title.value)
    }
})
