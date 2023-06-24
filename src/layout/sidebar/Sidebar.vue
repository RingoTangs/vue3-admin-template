<template>
    <div class="w-full h-full sidebar bg-[#fff]">
        <el-scrollbar :wrap-style="scrollbarStyle" :view-style="scrollbarStyle">
            <SidebarItem style="border: 1px solid red">
                <template #prefix>
                    <SvgIcon name="user" class="w-5 h-5"></SvgIcon>
                </template>
                <template #default>Dashboard</template>
                <template #suffix>AA</template>
            </SidebarItem>

            <SidebarItem style="border: 1px solid red">
                <template #prefix>
                    <SvgIcon name="user" class="w-5 h-5"></SvgIcon>
                </template>
                <template #default>Hello</template>
                <template #suffix>B</template>
            </SidebarItem>

            <SidebarItem style="border: 1px solid red">
                <template #prefix>
                    <SvgIcon name="user" class="w-5 h-5"></SvgIcon>
                </template>
                <template #default>Wor</template>
                <template #suffix>AA</template>
            </SidebarItem>
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
import SidebarItem from './SidebarItem.vue'
import SvgIcon from '@/components/svg-icon/SvgIcon.vue'

const scrollbarStyle = { maxHeight: '100%' }
</script>

<style lang="scss" scoped></style>
