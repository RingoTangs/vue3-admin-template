<template>
    <div class="sidebar_item" :style="style">
        <div class="prefix">
            <slot name="prefix"></slot>
        </div>
        <div class="title" :style="{ marginLeft: space }">
            <slot></slot>
        </div>
        <div class="absolute suffix" :style="{ right: indent }">
            <slot name="suffix"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
type Props = {
    height?: string
    fontSize?: string
    space?: string
    indent?: string
    activeColor?: string
}
const props = withDefaults(defineProps<Props>(), {
    height: '60px',
    fontSize: '20px',
    space: '30px',
    indent: '30px',
    activeColor: '#695cfe',
})
const style = {
    height: props.height,
    fontSize: props.fontSize,
    paddingLeft: props.indent,
    paddingRight: props.indent,
}
</script>

<style lang="scss" scoped>
.sidebar_item {
    font-family: 'Poppins', sans-serif;
    @apply flex items-center font-semibold rounded-md text-[#707070]  cursor-pointer;
    @apply transition-all duration-300 caret-transparent relative mb-3;
    @apply hover:text-[white] hover:bg-[v-bind(activeColor)] w-full;
}
</style>
