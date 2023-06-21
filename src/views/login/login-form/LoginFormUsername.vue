<template>
    <!-- username -->
    <el-input
        :model-value="username"
        @input="(val:string) => $emit('update:username', val)"
        :placeholder="t('loginPage.username')"
    >
        <template #prefix>
            <SvgIcon name="user" class="w-5 h-5 text-gray-600"></SvgIcon>
        </template>
    </el-input>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/svg-icon/SvgIcon.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

defineProps<{ username: string }>()
defineEmits<{ 'update:username': [val: string] }>()
</script>

<style lang="scss" scoped></style>
