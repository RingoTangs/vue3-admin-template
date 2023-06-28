<template>
    <SidebarGroup index="example">
        <template #prefix>Icon</template>
        <template #title>Example</template>
        <SidebarItem to="/example/table">
            <template #prefix>
                <SvgIcon name="dashboard" class="w-6 h-6"></SvgIcon>
            </template>
            table
        </SidebarItem>
    </SidebarGroup>
</template>

<script setup lang="ts">
import SidebarGroup from '@/layout/sidebar/SidebarGroup.vue'
import SidebarItem from '@/layout/sidebar/SidebarItem.vue'
</script>

<style scoped></style>
