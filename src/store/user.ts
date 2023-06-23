import { defineStore } from 'pinia'
import { userApi } from '@/api'
import { useTokenStore } from './token'

type UserInfo = userApi.GetUserInfoResponse

export const useUserStore = defineStore('userStore', {
    state: () => ({
        userInfo: {} as UserInfo,
    }),
    getters: {
        hasUserInfo: (state) => Boolean(state.userInfo.name),
    },
    actions: {
        async login(loginRequest: userApi.LoginRequest) {
            const resp = await userApi.login(loginRequest)
            const token = resp.data
            useTokenStore().setToken(token)
        },
        async getUserInfo(token: string) {
            const resp = await userApi.getUserInfo(token)
            const userInfo = resp.data
            this.userInfo = userInfo
        },
        async logout() {
            await userApi.logout()
            this.$reset()
            useTokenStore().removeToken()
        },
    },
})
