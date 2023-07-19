<template>
    <el-container class="h-full layout">
        <el-aside :width="asideWith" class="sidebar_wrapper">
            <el-scrollbar :wrap-style="{ maxHeight: '100%' }" :view-style="{ maxHeight: '100%' }">
                <Sidebar></Sidebar>
            </el-scrollbar>
        </el-aside>
        <el-main class="main">
            <Navbar :style="{ height: `${navbarHeight}` }"></Navbar>
            <el-scrollbar
                class="appmain_scrollbar"
                :style="{ height: `calc(100% - ${navbarHeight})` }"
            >
                <AppMain />
            </el-scrollbar>
        </el-main>
    </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from './sidebar/Sidebar.vue'
import AppMain from './AppMain.vue'
import Navbar from './navbar/Navbar.vue'

const asideWith = ref('300px')
const navbarHeight = ref('50px')
</script>

<style lang="scss" scoped>
.sidebar_wrapper {
    @apply transition-all duration-300 bg-[#f1f5f9];
}
:deep(.el-main) {
    @apply p-0;
}
</style>
