<template>
    <component :is="type">
        <slot></slot>
    </component>
</template>

<script setup lang="ts">
defineProps<{ type: 'a' | 'router-link' | 'template' }>()
</script>

<style lang="scss" scoped></style>
