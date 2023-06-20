import { createI18n } from 'vue-i18n'
import zh from './zh-cn'
import en from './en-us'

export const storage = {
    getLocale: function () {
        return localStorage.getItem('locale') || 'zh'
    },
    setLocale: function (lang: Language) {
        localStorage.setItem('locale', lang)
    },
}

export type Language = 'zh' | 'en'

const i18n = createI18n({
    legacy: false,
    locale: storage.getLocale(),
    fallbackLocale: 'en',
    messages: {
        zh,
        en,
    },
})

export default i18n
