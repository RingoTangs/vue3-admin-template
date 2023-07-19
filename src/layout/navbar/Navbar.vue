<template>
    <div class="navbar">
        <!-- Left -->
        <div>
            <Breadcrumb />
        </div>

        <!-- Right -->
        <div class="flex ml-auto">
            <div class="mr-5">
                <LangSwitch></LangSwitch>
            </div>
            <div>User Info 123</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Breadcrumb from './Breadcrumb.vue'
import LangSwitch from '@/components/lang-switch/LangSwitch.vue'
</script>

<style lang="scss" scoped>
.navbar {
    @apply flex  px-6 shadow-sm  items-center justify-center;
}
</style>
