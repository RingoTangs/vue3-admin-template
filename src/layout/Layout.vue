<template>
    <el-container class="h-full layout">
        <el-aside :width="asideWith" class="sidebar_wrapper">
            <el-scrollbar :wrap-style="{ maxHeight: '100%' }" :view-style="{ maxHeight: '100%' }">
                <Sidebar></Sidebar>
            </el-scrollbar>
        </el-aside>
        <el-main>
            <AppMain></AppMain>
        </el-main>
    </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from './sidebar/Sidebar.vue'
import AppMain from './AppMain.vue'

const asideWith = ref('300px')
</script>

<style lang="scss" scoped>
.sidebar_wrapper {
    @apply transition-all duration-300 bg-[#f1f5f9];
}
:deep(.el-main) {
    @apply p-0;
}
</style>
