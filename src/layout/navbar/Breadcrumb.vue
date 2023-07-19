<template>
    <el-breadcrumb class="breadcrumb">
        <el-breadcrumb-item class="breadcrumb_item" v-for="d in level" :key="d.path" :to="d.path">
            {{ d.title }}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()

const level = ref<{ path: string; title: string }[]>([])
watch(
    route,
    () => {
        const matched = route.matched.filter((d) => d.meta && d.meta.title)
        level.value = matched.map((d) => ({ path: d.path, title: d.meta.title }))
        if (level.value[0].path !== '/dashboard') {
            level.value.unshift({ path: '/dashboard', title: t('dashboardPage.title') })
        }
    },
    { immediate: true }
)
</script>

<style lang="scss" scoped>
.breadcrumb.el-breadcrumb {
    @apply text-base caret-transparent;
    :deep(.el-breadcrumb__item) {
        &:last-child {
            .el-breadcrumb__inner {
                @apply font-bold;
                color: var(--el-text-color-primary);
            }
        }
        &:not(:last-child) {
            .el-breadcrumb__inner.is-link {
                @apply hover:text-[#695cfe];
            }
        }
    }
}
</style>
