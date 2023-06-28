<template>
    <el-menu text-color="#707070" background-color="#f1f5f9" class="sidebar">
        <!-- 首页/dashboard -->
        <SidebarItem to="/dashboard">
            <template #prefix>
                <SvgIcon name="dashboard" class="w-8 h-8"></SvgIcon>
            </template>
            {{ t('dashboardPage.title') }}
        </SidebarItem>
    </el-menu>
</template>

<script setup lang="ts">
import SidebarItem from './SidebarItem.vue'
import { useI18n } from 'vue-i18n'
import SvgIcon from '@/components/svg-icon/SvgIcon.vue'

const { t } = useI18n()
</script>

<style lang="scss" scoped></style>
