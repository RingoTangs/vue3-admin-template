<template>
    <!-- <div v-for="i in 1000" :key="i">1</div> -->
    <el-menu text-color="#707070" background-color="#f1f5f9" class="sidebar">
        <SidebarItem></SidebarItem>
    </el-menu>
</template>

<script setup lang="ts">
import SidebarItem from './SidebarItem.vue'
</script>

<style lang="scss" scoped></style>
