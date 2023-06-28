<template>
    <div class="pt-2 sidebar_item" v-if="show">
        <router-link :to="to">
            <el-menu-item :class="{ active: route.path === to }">
                <span class="mr-3 prefix">
                    <slot name="prefix"></slot>
                </span>
                <span>
                    <slot></slot>
                </span>
            </el-menu-item>
        </router-link>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { pathShow } from './index'

const props = defineProps<{ to: string }>()

const route = useRoute()
const show = computed(() => pathShow(props.to))
</script>

<style lang="scss" scoped>
:deep(.el-menu-item) {
    @apply text-lg font-semibold hover:bg-[#695cfe] hover:text-white;
    @apply transition-all rounded-lg duration-300;
}

.active {
    @apply bg-[#695cfe] text-white;
}
</style>
