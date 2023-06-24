<template>
    <el-scrollbar :wrap-style="scrollbarStyle" :view-style="scrollbarStyle">
        <!-- <div v-for="i in 1000" :key="i">1</div> -->
        <el-menu text-color="#707070">
            <el-menu-item v-for="i in 100" :key="i">
                <el-icon>aa</el-icon>
                <span>Navigator Three</span>
            </el-menu-item>
        </el-menu>
    </el-scrollbar>
</template>

<script setup lang="ts">
const scrollbarStyle = { maxHeight: '100%' }
</script>

<style lang="scss" scoped>
:deep(.el-menu-item) {
    @apply text-xl font-semibold hover:bg-[#695cfe] hover:text-white;
    @apply transition-all  mx-5 rounded-lg;
}
</style>
