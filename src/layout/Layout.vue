<template>
    <div class="flex w-full h-full layout">
        <div class="h-full bg-pink-300 sidebar_wrapper">
            <Sidebar />
        </div>
        <div class="h-full bg-red-200 main_wrapper"></div>
    </div>
</template>

<script setup lang="ts">
import Sidebar from './sidebar/Sidebar.vue'
</script>

<style lang="scss" scoped>
$sidebar_width: 300px;
.sidebar_wrapper {
    width: $sidebar_width;
}
.main_wrapper {
    width: calc(100% - #{$sidebar_width});
}
</style>
