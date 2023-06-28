<template>
    <div class="pt-2 sidebar_group">
        <el-sub-menu v-bind="$attrs">
            <template #title>
                <span class="mr-3">
                    <slot name="prefix"></slot>
                </span>
                <span>
                    <slot name="title"></slot>
                </span>
            </template>
            <slot></slot>
        </el-sub-menu>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
:deep(.el-sub-menu) {
    @apply caret-transparent;
    .el-sub-menu__title {
        @apply text-lg font-semibold hover:bg-[#695cfe] hover:text-white;
        @apply transition-all rounded-lg duration-300;
        @apply text-lg font-semibold;
    }
    .el-menu {
        @apply bg-transparent;
    }
}
</style>
