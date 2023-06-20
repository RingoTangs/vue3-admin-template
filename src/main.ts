import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

// prettier-ignore
createApp(App)
.use(router)
.use(i18n)
.mount('#app')
