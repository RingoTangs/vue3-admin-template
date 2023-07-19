<template>
    <div class="navbar_avatar">
        <el-avatar shape="square" src="https://picsum.photos/200" />
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.navbar_avatar {
    @apply pr-4 flex relative;
    &::before {
        @apply content-[''] absolute right-0 -bottom-1;
        @apply border-transparent border-solid border-[6px];
        @apply border-t-black;
    }
}
</style>
