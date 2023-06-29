<template>
    <div class="pt-2 sidebar_item" v-if="show">
        <el-menu-item
            :class="{ active: route.path === to }"
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
import { useRoute, useRouter } from 'vue-router'
import { pathShow } from './index'
import SvgIcon from '@/components/svg-icon/SvgIcon.vue'

const props = defineProps<{ to: string; icon: string; name: string }>()

const router = useRouter()
const route = useRoute()
const show = computed(() => pathShow(props.to))

const onElMenuItemClick = (p: any) => {
    console.log(p)
    router.push(props.to)
}
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
