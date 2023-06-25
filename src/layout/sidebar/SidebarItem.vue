<template>
    <div class="sidebar_item">
        <el-menu-item>
            <el-icon>aa</el-icon>
            <span>Navigator Three</span>
        </el-menu-item>
    </div>
</template>

<script setup lang="ts">
// import AppLink from './AppLink.vue'
// import { RouteRecordRaw } from 'vue-router'
// defineProps<{ router: RouteRecordRaw }>()
</script>

<style lang="scss" scoped>
:deep(.el-menu-item) {
    @apply text-xl font-semibold hover:bg-[#695cfe] hover:text-white;
    @apply transition-all  mx-5 rounded-lg;
}
</style>
