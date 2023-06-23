<template>
    <div
        class="relative lang-switch"
        @mouseenter="() => (selectListShow = true)"
        @mouseleave="() => (selectListShow = false)"
    >
        <!-- 图标 -->
        <SvgIcon
            @click="() => (selectListShow = true)"
            name="language"
            class="w-8 h-8 text-sm svg_icon"
            :style="{ color: iconColor }"
        />

        <!-- 语言选择列表 -->
        <Transition name="fade" appear>
            <div
                v-show="selectListShow"
                class="absolute p-5 mt-1 text-sm rounded-md select-list bg-gray-50 right-2"
                ref="selectList"
            >
                <div class="mb-3 min-w-max" @click="onSwitch('zh')">简体中文</div>
                <div class="min-w-max" @click="onSwitch('en')">English</div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/svg-icon/SvgIcon.vue'
import { ref } from 'vue'
import { switchLocale, Language } from '@/i18n'

const selectListShow = ref(false)

withDefaults(defineProps<{ iconColor?: string }>(), { iconColor: '#000' })

const onSwitch = (locale: Language) => {
    switchLocale(locale)
    selectListShow.value = false
}
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
    @apply transition-all duration-300;
}

.fade-enter-to,
.fade-leave-from {
    @apply opacity-100 mt-1;
}

.fade-leave-to,
.fade-enter-from {
    @apply opacity-0 mt-5;
}

.select-list {
    div {
        @apply transition-all hover:text-green-600 hover:cursor-pointer caret-transparent;
    }
}
</style>
