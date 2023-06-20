import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import store from './store'

// prettier-ignore
createApp(App)
.use(router)
.use(store)
.use(i18n)
.mount('#app')
