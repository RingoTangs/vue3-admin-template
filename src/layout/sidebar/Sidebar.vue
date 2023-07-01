<template>
    {{ sidebarStore.menuIndexPathMap }}
    <el-menu class="sidebar" ref="ELMenu" @select="onSelect" :default-openeds="defaultOpens" :router="false">
        <SidebarMenu v-for="(d, i) in items" :item="d" :key="i" />
    </el-menu>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SidebarMenu from './SidebarMenu.vue'
import { Item } from './index'
import { useSidebarStore } from '@/store'
import { useRoute } from 'vue-router'

const sidebarStore = useSidebarStore()

const onSelect = (index: string, indexPath: string[]) => {
    sidebarStore.putMenuSelectedPath(index, indexPath)
}

const defaultOpens = computed(() => {
    const route = useRoute()
    const path = route.path
    const indexPath = sidebarStore.menuIndexPathMap[path]
    if (indexPath && indexPath.length) {
        const i = indexPath.findIndex((d) => d === path)
        return indexPath.slice(0, i)
    }
    return []
})

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
