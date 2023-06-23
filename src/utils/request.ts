import axios from 'axios'
import { type AxiosRequestConfig } from 'axios'
import { apiBaseUrl } from '@/config'
import { default as pinia, useTokenStore } from '@/store'
import { useMessage } from '@/utils/message'

// 创建 axios 实例
const axiosInstance = axios.create({ baseURL: apiBaseUrl, timeout: 5000 })

const tokenStore = useTokenStore(pinia)
const Message = useMessage()

// request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        if (tokenStore.hasToken) {
            config.headers['X-Token'] = tokenStore.token
        }
        return config
    },
    (error) => {
        console.error(error)
        return Promise.reject(error)
    }
)

// response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        const res = response.data

        if (res.code !== CodeEnum.SUCCESS) {
            Message({ type: 'error', message: res.message || 'Error', duration: 5000 })
            if (
                res.code === CodeEnum.ILLEGAL_TOKEN ||
                res.code === CodeEnum.OTHER_CLIENT_LOGIN ||
                res.code === CodeEnum.TOKEN_EXPIRED
            ) {
                tokenStore.removeToken().then(() => location.reload())
            }

            return Promise.reject(res.message || 'error')
        } else {
            return response
        }
    },
    (error) => {
        Message({ type: 'error', message: error.message, duration: 5000 })
        return Promise.reject(error)
    }
)

export enum CodeEnum {
    SUCCESS = 200, // 成功
    FAIL = 500, // 失败
    ILLEGAL_TOKEN = 508, // 非法的 token
    OTHER_CLIENT_LOGIN = 512, // 其他客户端已经登录
    TOKEN_EXPIRED = 514, // token 过期
}

export type Result<T = unknown> = { code: number; message: string; data: T }

export const request = <T = unknown, D = unknown>(config: AxiosRequestConfig<D>) => {
    return new Promise<Result<T>>((resolve) => {
        axiosInstance<Result<T>>(config)
            .then((response) => resolve(response.data))
            .catch((err) => console.error(err)) // 统一处理错误
    })
}

export default request
