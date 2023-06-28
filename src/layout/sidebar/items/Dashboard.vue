<template>
    <SidebarItem to="/dashboard">
        <template #prefix>
            <SvgIcon name="dashboard" class="w-6 h-6"></SvgIcon>
        </template>
        {{ t('dashboardPage.title') }}
    </SidebarItem>
</template>

<script setup lang="ts">
import SidebarItem from '@/layout/sidebar/SidebarItem.vue'
import { useI18n } from 'vue-i18n'
import SvgIcon from '@/components/svg-icon/SvgIcon.vue'

const { t } = useI18n()
</script>

<style scoped></style>
