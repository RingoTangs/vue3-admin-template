import { defineStore } from 'pinia'
import { userApi } from '@/api'
import { useTokenStore } from './token'

export const useUserStore = defineStore('userStore', {
    state: () => ({ name: '', avatar: '' }),
    actions: {
        async login(loginRequest: userApi.LoginRequest) {
            const resp = await userApi.login(loginRequest)
            const token = resp.data
            const tokenStore = useTokenStore()
            tokenStore.setToken(token)
        },
        async getUserInfo(token: string) {
            const resp = await userApi.getUserInfo(token)
            const userInfo = resp.data
            this.name = userInfo.name
            this.avatar = userInfo.avatar
        },
    },
})
