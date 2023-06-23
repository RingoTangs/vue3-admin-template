<template>
    <div id="views_login" class="flex items-center justify-center w-full min-h-full">
        <div class="form_wrapper w-[520px] px-11 py-16 rounded-xl">
            <!-- 表单标题 -->
            <h1 class="text-3xl font-bold text-center text-[#3e3e3e] mb-10">
                {{ t('loginPage.formTitle') }}
            </h1>

            <!-- 表单内容 -->
            <LoginForm @login="onLogin" />
        </div>

        <!-- 语言切换 -->
        <div class="absolute right-14 top-14">
            <LangSwitch />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LangSwitch from '@/components/lang-switch/LangSwitch.vue'
import LoginForm from './login-form/LoginForm.vue'
import { type LoginEvent } from './login-form'
import { useUserStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const userStore = useUserStore()

const onLogin: LoginEvent = (valid, loginForm, loading) => {
    if (!valid) return
    loading.value = true
    userStore
        .login(loginForm)
        .then(() => router.push({ path: (route.query['redirect'] as string) || '/' }))
        .finally(() => (loading.value = false))
}
</script>

<style lang="scss" scoped>
.form_wrapper {
    background: linear-gradient(
        to right bottom,
        rgba(255, 255, 255, 0.7),
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.4)
    );
    /* 使背景模糊化 */
    backdrop-filter: blur(10px);
    box-shadow: 0 0 20px #a29bfe;
}
</style>
