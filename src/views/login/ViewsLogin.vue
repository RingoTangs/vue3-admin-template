<template>
    <div id="views_login" class="flex items-center justify-center w-full min-h-full">
        <div class="el-form_wrapper w-[520px] px-11 py-16 rounded-xl">
            <h1 class="text-3xl font-bold text-center text-[#3e3e3e] mb-10">
                {{ t('loginPage.formTitle') }}
            </h1>
            <el-form :model="loginForm">
                <!-- username -->
                <el-form-item>
                    <el-input v-model="loginForm.usename" :placeholder="t('loginPage.username')" />
                </el-form-item>

                <!-- password -->
                <el-form-item>
                    <el-input v-model="loginForm.password" :placeholder="t('loginPage.password')" />
                </el-form-item>

                <!-- Login -->
                <el-form-item>
                    <el-button type="primary" class="w-full">
                        {{ t('loginPage.loginButton') }}
                    </el-button>
                </el-form-item>
            </el-form>
        </div>

        <div class="absolute right-14 top-14">
            <LangSwitch />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import LangSwitch from '@/components/lang-switch/LangSwitch.vue'

const { t } = useI18n()
const loginForm = ref({ usename: '', password: '' })
</script>

<style lang="scss" scoped>
.el-form_wrapper {
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
.el-form-item {
    @apply mb-7;
    .el-input,
    .el-button {
        @apply h-11 text-lg font-bold;
    }
    :deep(.el-input) {
        .el-input__wrapper {
            @apply bg-transparent border-none shadow-none rounded-none font-bold;
            border-bottom: 3px solid rgb(150, 150, 240);
        }
    }
}
</style>
