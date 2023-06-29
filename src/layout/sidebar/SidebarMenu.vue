<template>
    <!-- Link -->
    <template v-if="item.type === 'link'">
        <SidebarItem :to="item.to" :icon="item.icon" :name="item.name" :index="item.to" />
    </template>

    <!-- Group -->
    <template v-if="item.type === 'group'">
        <SidebarGroup :index="item.name" :icon="item.icon" :name="item.name">
            <SidebarMenu v-for="(d, i) in item.children" :item="d" :key="i" />
        </SidebarGroup>
    </template>
</template>

<script setup lang="ts">
import SidebarItem from './SidebarItem.vue'
import SidebarGroup from './SidebarGroup.vue'
import { Item } from './index'
defineProps<{ item: Item }>()
</script>

<style scoped></style>
