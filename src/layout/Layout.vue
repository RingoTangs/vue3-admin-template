<template>
    <el-container class="h-full layout">
        <el-aside :width="asideWith" class="sidebar_wrapper">
            <el-scrollbar>
                <Sidebar></Sidebar>
            </el-scrollbar>
        </el-aside>
        <el-main class="bg-slate-500">main</el-main>
    </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from './sidebar/Sidebar.vue'

const asideWith = ref('300px')
</script>

<style lang="scss" scoped>
.sidebar_wrapper {
    @apply transition-all duration-300;
}
</style>
