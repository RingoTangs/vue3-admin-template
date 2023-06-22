import { defineStore } from 'pinia'

const TOKEN_KEY = 'vue3-admin-template-token-key'

export const useTokenStore = defineStore('token-store', {
    state: () => ({
        token: localStorage.getItem(TOKEN_KEY) || '',
    }),
    actions: {
        setToken(token: string) {
            this.token = token
            localStorage.setItem(TOKEN_KEY, token)
        },
    },
})
