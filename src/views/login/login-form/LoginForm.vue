<template>
    <el-form :model="loginForm" :rules="rules">
        <!-- username -->
        <el-form-item prop="username">
            <LoginFormUsername v-model:username="loginForm.username" />
        </el-form-item>

        <!-- password -->
        <el-form-item prop="password">
            <LoginFormPassword v-model:password="loginForm.password" />
        </el-form-item>

        <!-- Login -->
        <el-form-item>
            <el-button type="primary" class="w-full">
                {{ t('loginPage.loginButton') }}
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import LoginFormUsername from './LoginFormUsername.vue'
import LoginFormPassword from './LoginFormPassword.vue'
import rules from './rules'

const { t } = useI18n()

const loginForm = reactive({ username: '', password: '' })
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
