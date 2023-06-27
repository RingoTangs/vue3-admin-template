<template>
    <el-menu text-color="#707070" background-color="#f1f5f9" class="sidebar">
        <SidebarItem to="/dashboard">
            <template #prefix>Icon</template>
            Dashboard
        </SidebarItem>
        <SidebarItem to="/example/table">
            <template #prefix>Icon</template>
            Table
        </SidebarItem>
    </el-menu>
</template>

<script setup lang="ts">
import SidebarItem from './SidebarItem.vue'
</script>

<style lang="scss" scoped></style>
