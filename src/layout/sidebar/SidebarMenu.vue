<template>
    <SidebarItem v-if="item.type === 'item'" :to="item.to">
        <template #prefix>{{ item.icon }}</template>
        {{ item.name }}
    </SidebarItem>
    <SidebarGroup v-if="item.type === 'group'" :index="item.name">
        <template #prefix?>{{ item.icon }}</template>
        <template #title>{{ item.name }}</template>
        <SidebarMenu v-for="(d, i) in item.children" :key="i" :item="d" />
    </SidebarGroup>
</template>

<script setup lang="ts">
import SidebarItem from './SidebarItem.vue'
import SidebarGroup from './SidebarGroup.vue'
type Item = {
    type: 'item' | 'group'
    name: string
    icon: string
    to: string
    children: Item[]
}
defineProps<{ item: Item }>()
</script>

<style scoped></style>
