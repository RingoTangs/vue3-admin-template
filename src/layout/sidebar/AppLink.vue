<template>
    <component :is="type" v-bind="linkProps">
        <slot></slot>
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ to: string }>()

// 判断外部链接.
const isExternal = computed(() => /^(https?:|mailto:|tel:)/.test(props.to))

// 外部链接返回 <a>, 内部链接返回 <router-link>.
const type = computed(() => (isExternal.value ? 'a' : 'router-link'))

// 绑定路由属性
const linkProps = computed(() =>
    isExternal.value ? { href: props.to, target: '_blank', rel: 'noopener' } : { to: props.to }
)
</script>

<style scoped></style>
