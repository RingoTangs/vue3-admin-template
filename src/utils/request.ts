import axios from 'axios'
import config from '@/config'
import { default as pinia, useTokenStore } from '@/store'
import { useMessage } from '@/utils/message'

const service = axios.create({ baseURL: config.apiBaseUrl, timeout: 5000 })
const tokenStore = useTokenStore(pinia)
const Message = useMessage()

// request interceptor
service.interceptors.request.use(
    (config) => {
        const token = tokenStore.token
        if (token) {
            config.headers['X-Token'] = token
        }
        return config
    },
    (error) => {
        console.error(error)
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    (response) => {
        const res = response.data
        if (res.code !== 200) {
            Message({ type: 'error', message: res.message || 'Error', duration: 5000 })
            return Promise.reject(res.message || 'error')
        }
        return res
    },
    (error) => {
        console.log(error) // for debug
        Message({ type: 'error', message: error.message, duration: 5000 })
        return Promise.reject(error)
    }
)

export default service

export type CommonResponse = { code: number; message: string; data: unknown }
