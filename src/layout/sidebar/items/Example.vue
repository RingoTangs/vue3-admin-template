<template>
    <SidebarGroup index="example" v-if="Object.values(paths).some((p) => pathShow(p))">
        <template #prefix>Icon</template>
        <template #title>Example</template>
        <SidebarItem :to="paths.table">
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
import { pathShow } from '../index'

const paths = { table: '/example/table' }
</script>

<style scoped></style>
