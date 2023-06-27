<template>
    <el-menu text-color="#707070" background-color="#f1f5f9" class="sidebar">
        <SidebarItem to="/dashboard">
            <template #prefix>Icon</template>
            {{ t('dashboardPage.title') }}
        </SidebarItem>
    </el-menu>
</template>

<script setup lang="ts">
import SidebarItem from './SidebarItem.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style lang="scss" scoped></style>
