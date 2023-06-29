<template>
    <el-menu class="sidebar">
        <SidebarMenu v-for="(d, i) in items" :item="d" :key="i"></SidebarMenu>
    </el-menu>
</template>

<script setup lang="ts">
import SidebarMenu from './SidebarMenu.vue'
import { Item } from './index'

const items: Item[] = [
    {
        type: 'link',
        name: 'Dashboard',
        icon: 'dashboard',
        to: '/dashboard',
    },
    {
        type: 'group',
        name: 'Example',
        icon: 'example',
        children: [
            {
                type: 'link',
                name: 'table',
                icon: 'table',
                to: '/example/table',
            },
        ],
    },
]
</script>

<style lang="scss" scoped>
.sidebar {
    @apply bg-transparent border-none mx-4;
}
</style>
