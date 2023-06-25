<template>
    <AppLink :to="to">
        <el-menu-item class="sidebar_item_menu">
            <el-icon>aa</el-icon>
            <span>Navigator Three</span>
        </el-menu-item>
    </AppLink>
</template>

<script setup lang="ts">
import AppLink from './AppLink.vue'
defineProps<{ to: string }>()
</script>

<style lang="scss" scoped>
.sidebar_item_menu {
    @apply text-xl font-semibold hover:bg-[#695cfe] hover:text-white;
    @apply transition-all  mx-5 rounded-lg;
}
</style>
