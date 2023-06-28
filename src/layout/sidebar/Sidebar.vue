<template>
    <el-menu class="sidebar" :default-openeds="['example']">
        <!-- 首页/dashboard -->
        <Dashboard />

        <Example />
    </el-menu>
</template>

<script setup lang="ts">
import Dashboard from './items/Dashboard.vue'
import Example from './items/Example.vue'
</script>

<style lang="scss" scoped>
.sidebar {
    @apply bg-transparent border-none mx-4;
}
</style>
