<template>
    <el-container class="h-full layout">
        <el-aside :width="asideWith" class="transition-all duration-300 bg-red-50">
            Sidebar
        </el-aside>
        <el-main class="bg-slate-500">main</el-main>
    </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const asideWith = ref('300px')
</script>

<style lang="scss" scoped></style>
