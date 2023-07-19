<template>
    <div class="pt-2 sidebar_item caret-transparent" v-if="show">
        <el-menu-item
            :class="{ active: $route.path === to }"
            @click="onElMenuItemClick"
            v-bind="$attrs"
        >
            <span class="mr-3">
                <SvgIcon :name="icon" class="w-6 h-6" />
            </span>
            <span>
                {{ name }}
            </span>
        </el-menu-item>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { pathShow } from './index'
import SvgIcon from '@/components/svg-icon/SvgIcon.vue'

const props = defineProps<{ to: string; icon: string; name: string }>()
const router = useRouter()

const show = computed(() => pathShow(props.to))
const onElMenuItemClick = () => router.push(props.to)
</script>

<style lang="scss" scoped>
:deep(.el-menu-item) {
    @apply text-lg font-semibold hover:bg-[#695cfe] hover:text-white;
    @apply transition-all rounded-lg duration-300;
}
:deep(.el-menu-item.is-active) {
    @apply text-black;
}
:deep(.el-menu-item.is-active.active) {
    @apply bg-[#695cfe] text-white;
}

.active {
    @apply bg-[#695cfe] text-white;
}
</style>
