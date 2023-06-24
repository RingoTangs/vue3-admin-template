<template>
    <div class="w-full h-full sidebar">
        <el-scrollbar :wrap-style="scrollbarStyle" :view-style="scrollbarStyle">
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
const scrollbarStyle = { maxHeight: '100%' }
</script>

<style lang="scss" scoped></style>
