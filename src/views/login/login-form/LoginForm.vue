<template>
    <el-form :model="loginForm" :rules="rules" ref="elFormRef">
        <!-- username -->
        <el-form-item prop="username">
            <LoginFormUsername v-model:username="loginForm.username" :disabled="loading" />
        </el-form-item>

        <!-- password -->
        <el-form-item prop="password">
            <LoginFormPassword
                v-model:password="loginForm.password"
                :disabled="loading"
                @keyup.enter="onLoginBtnClick"
            />
        </el-form-item>

        <!-- Login -->
        <el-form-item>
            <el-button type="primary" class="w-full" :loading="loading" @click="onLoginBtnClick">
                {{ t('loginPage.loginButton') }}
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import LoginFormUsername from './LoginFormUsername.vue'
import LoginFormPassword from './LoginFormPassword.vue'
import { rules, type LoginForm, type Loading } from './index'

// i18n
const { t } = useI18n()

// 表单内容
const loginForm: LoginForm = reactive({ username: '', password: '' })
const elFormRef = ref()

// 登录按钮点击事件
const emits = defineEmits<{
    login: [valid: boolean, loginForm: LoginForm, loading: Loading]
}>()
const loading: Loading = ref(false)
const onLoginBtnClick = async () => {
    await elFormRef.value.validate((valid: boolean) => emits('login', valid, loginForm, loading))
}
</script>

<style lang="scss" scoped>
.el-form-item {
    @apply mb-7;
    .el-input,
    .el-button {
        @apply h-11 text-xl font-bold;
    }
    :deep(.el-input) {
        .el-input__wrapper {
            @apply bg-transparent border-none shadow-none rounded-none font-bold;
            border-bottom: 3px solid rgb(150, 150, 240);
        }
        .el-input__inner {
            @apply pl-4;
        }
    }
}
</style>
