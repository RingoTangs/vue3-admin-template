import { createPinia, defineStore } from 'pinia'

export default createPinia()

export const useI18nStore = defineStore('i18n', {
    state: () => ({ value: 'zh' }),
})
