<template>
    <router-link :to="to" v-if="show" class="block mx-4 my-3">
        <el-menu-item :class="{ active: route.path === to }">
            <span class="mr-3 prefix">
                <slot name="prefix"></slot>
            </span>
            <span>
                <slot></slot>
            </span>
        </el-menu-item>
    </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const props = defineProps<{ to: string }>()

const routes = useRouter().getRoutes()
const route = useRoute()

const show = computed(() => {
    const targetRoute = routes.find((d) => d.path === props.to)
    if (!targetRoute) return false
    return !targetRoute.meta.hidden
})
</script>

<style lang="scss" scoped>
:deep(.el-menu-item) {
    @apply text-lg font-semibold hover:bg-[#695cfe] hover:text-white;
    @apply transition-all rounded-lg duration-700;
}

.active {
    @apply bg-[#695cfe] text-white;
}
</style>
