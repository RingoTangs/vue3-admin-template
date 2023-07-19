<template>
    <div class="navbar">
        <!-- Left -->
        <div>
            <NavbarBreadcrumb />
        </div>

        <!-- Right -->
        <div class="flex items-center ml-auto caret-transparent">
            <div class="mr-6">
                <LangSwitch />
            </div>
            <div class="navbaravatar_wrapper">
                <NavbarAvatar />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import NavbarBreadcrumb from './NavbarBreadcrumb.vue'
import LangSwitch from '@/components/lang-switch/LangSwitch.vue'
import NavbarAvatar from './NavbarAvatar.vue'
</script>

<style lang="scss" scoped>
.navbar {
    @apply flex  px-10 shadow-sm  items-center justify-center;
}
</style>
