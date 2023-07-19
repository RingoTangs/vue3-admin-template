<template>
    <div class="relative lang-switch" @mouseenter="display" @mouseleave="delayHidden()">
        <!-- 图标 -->
        <SvgIcon
            @click="() => (selectListShow = true)"
            name="language"
            class="w-8 h-8 text-sm svg_icon"
            :style="{ color: iconColor }"
        />

        <!-- 语言选择列表 -->
        <Transition name="langswitch_selectlist_fade" appear mode="out-in">
            <div
                v-show="selectListShow"
                class="absolute z-[999] p-5 mt-1 text-sm rounded-md select-list bg-gray-50 right-2"
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

// display hidden
let id = 0
const display = () => {
    if (id) clearTimeout(id)
    selectListShow.value = true
}
const delayHidden = (ts = 200) => (id = setTimeout(() => (selectListShow.value = false), ts))
</script>

<style scoped lang="scss">
.select-list {
    div {
        @apply transition-all hover:text-green-600 hover:cursor-pointer caret-transparent;
    }
}
</style>
