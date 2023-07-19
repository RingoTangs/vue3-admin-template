<template>
    <el-dropdown size="large">
        <div class="avatar_wrapper" ref="navbarAvatar">
            <el-avatar shape="square" src="https://picsum.photos/200" />
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item class="el_dropdown_item">
                    {{ t('avatarDropdown.userinfo') }}
                </el-dropdown-item>
                <el-dropdown-item class="el_dropdown_item" divided>
                    {{ t('avatarDropdown.logout') }}
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const navbarAvatar = ref()
const { t } = useI18n()

// 移除黑边
onMounted(() => navbarAvatar.value.removeAttribute('tabindex'))
</script>

<style lang="scss" scoped>
.avatar_wrapper {
    @apply pr-5 flex relative;
    &::before {
        @apply content-[''] absolute right-0 -bottom-1;
        @apply border-transparent border-solid border-[6px];
        @apply border-t-black;
    }
}
:deep(.el_dropdown_item) {
    @apply font-bold caret-transparent;
    @apply hover:bg-[#695cfe] hover:text-white text-base  transition-all duration-200;
}
</style>
