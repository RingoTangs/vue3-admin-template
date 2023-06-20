import { createI18n } from 'vue-i18n'
import zh from './zh-cn'
import en from './en-us'

export default createI18n({
    legacy: false,
    locale: 'zh',
    fallbackLocale: 'en',
    messages: {
        zh,
        en,
    },
})