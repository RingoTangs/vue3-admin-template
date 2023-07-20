<template>
    <el-dropdown size="large" @command="(lang:Language) => switchLocale(lang)">
        <div ref="svgIconWrapper">
            <SvgIcon name="language" class="w-8 h-8" :style="{ color: iconColor }" />
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item class="el_dropdown_item" command="zh">
                    简体中文
                </el-dropdown-item>

                <!-- prettier-ignore -->
                <el-dropdown-item class="el_dropdown_item" command="en">
                    English 
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/svg-icon/SvgIcon.vue'
import { switchLocale, Language } from '@/i18n'
import { onMounted, ref } from 'vue'

const svgIconWrapper = ref<HTMLDivElement | null>(null)

withDefaults(defineProps<{ iconColor?: string }>(), { iconColor: '#000' })
onMounted(() => svgIconWrapper.value?.removeAttribute('tabindex'))
</script>

<style scoped lang="scss">
@import '@/style.scss';
:deep(.el_dropdown_item) {
    @extend %el_dropdown_item;
}
</style>
