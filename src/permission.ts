import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getFullPageTitle } from '@/config'
import { default as pinia, useTokenStore } from '@/store'

const whiteList = ['/login'] // no redirect whitelist
const tokenStore = useTokenStore(pinia)

router.beforeEach((to, from, next) => {
    // start progress bar
    NProgress.start()
    document.title = getFullPageTitle(to.meta.title.value)

    next()
})

router.afterEach(() => NProgress.done())
