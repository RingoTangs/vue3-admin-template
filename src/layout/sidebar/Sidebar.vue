<template>
    <el-menu class="sidebar">
        <!-- 首页/dashboard -->
        <SidebarItem to="/dashboard">
            <template #prefix>
                <SvgIcon name="dashboard" class="w-8 h-8"></SvgIcon>
            </template>
            {{ t('dashboardPage.title') }}
        </SidebarItem>

        <SidebarGroup index="3">
            <template #prefix>Icon</template>
            <template #title>Example</template>
            <SidebarItem to="/example/table">
                <template #prefix>
                    <SvgIcon name="dashboard" class="w-8 h-8"></SvgIcon>
                </template>
                table
            </SidebarItem>
        </SidebarGroup>
    </el-menu>
</template>

<script setup lang="ts">
import SidebarItem from './SidebarItem.vue'
import SidebarGroup from './SidebarGroup.vue'
import { useI18n } from 'vue-i18n'
import SvgIcon from '@/components/svg-icon/SvgIcon.vue'

const { t } = useI18n()
</script>

<style lang="scss" scoped>
.sidebar {
    @apply bg-transparent border-none mx-4;
}
</style>
