import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { projectTitle } from '@/config'

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach((to, from, next) => {
    // start progress bar
    NProgress.start()
    document.title = `${to.meta.title} - ${projectTitle}`

    next()
})

router.afterEach(() => NProgress.done())
