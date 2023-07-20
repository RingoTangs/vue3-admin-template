<template>
    <el-dropdown size="large" @command="onCommand">
        <div class="avatar_wrapper" ref="navbarAvatar">
            <el-avatar shape="square" src="https://picsum.photos/200" />
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item class="el_dropdown_item">
                    {{ t('avatarDropdown.userinfo') }}
                </el-dropdown-item>
                <el-dropdown-item class="el_dropdown_item" divided command="logout">
                    {{ t('avatarDropdown.logout') }}
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/store'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()
const userStore = useUserStore()
const navbarAvatar = ref<HTMLDivElement>()
const { t } = useI18n()

// 移除黑边
onMounted(() => navbarAvatar.value?.removeAttribute('tabindex'))

const onCommand = async (command: string) => {
    if (command === 'logout') {
        await userStore.logout()
        router.replace('/login')
        ElMessage({ type: 'success', message: 'Logout Success!', duration: 1500 })
    }
}
</script>

<style lang="scss" scoped>
@import '@/style.scss';
.avatar_wrapper {
    @apply pr-5 flex relative;
    &::before {
        @apply content-[''] absolute right-0 -bottom-1;
        @apply border-transparent border-solid border-[6px];
        @apply border-t-black;
    }
}

:deep(.el_dropdown_item) {
    @extend %el_dropdown_item;
}
</style>
