import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getFullPageTitle } from '@/config'

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach((to, from, next) => {
    // start progress bar
    NProgress.start()
    document.title = getFullPageTitle(to.meta.title.value)

    next()
})

router.afterEach(() => NProgress.done())
