import i18n from '@/i18n'
import { computed } from 'vue'

// i18n 在 ts 代码中写在计算属性下防止失效！
const rules = computed(() => ({
    username: [
        {
            required: true,
            message: i18n.global.t('loginPage.rules.username.required'),
            trigger: 'blur',
        },
    ],
    password: [
        {
            required: true,
            message: i18n.global.t('loginPage.rules.password.required'),
            trigger: 'blur',
        },
    ],
}))

export default rules
