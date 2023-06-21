<template>
    <el-input
        :type="passwordType"
        :model-value="password"
        @input="(val:string) => $emit('update:password', val)"
        :placeholder="t('loginPage.password')"
    >
        <template #prefix>
            <SvgIcon name="password" class="w-5 h-5 text-gray-600" />
        </template>
        <template #suffix>
            <span @click="showPwdClick">
                <SvgIcon :name="isShowPwd ? 'eye-open' : 'eye'" class="w-5 h-5 text-gray-600" />
            </span>
        </template>
    </el-input>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/svg-icon/SvgIcon.vue'
import { useI18n } from 'vue-i18n'
import { ref, computed } from 'vue'

const { t } = useI18n()

type PasswordType = 'text' | 'password'
const passwordType = ref<PasswordType>('password')
const isShowPwd = computed(() => passwordType.value === 'text')
const showPwdClick = () => {
    isShowPwd.value ? (passwordType.value = 'password') : (passwordType.value = 'text')
}

defineProps<{ password: string }>()
defineEmits<{ 'update:password': [val: string] }>()
</script>

<style scoped></style>
