<template>
    <!-- 路由过渡效果 -->
    <!-- https://router.vuejs.org/zh/guide/advanced/transitions.html -->
    <router-view v-slot="{ Component, route }">
        <transition name="views_transform" mode="out-in" appear>
            <component :is="Component" :key="route.path" />
        </transition>
    </router-view>
</template>
