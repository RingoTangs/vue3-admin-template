import axios from 'axios'
import { type AxiosRequestConfig } from 'axios'
import { apiBaseUrl } from '@/config'
import { useTokenStore } from '@/store'
import { useMessage } from '@/utils/message'

// 创建 axios 实例
const axiosInstance = axios.create({ baseURL: apiBaseUrl, timeout: 5000 })

const Message = useMessage()

// request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const tokenStore = useTokenStore()
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
            if (
                res.code === CodeEnum.ILLEGAL_TOKEN ||
                res.code === CodeEnum.OTHER_CLIENT_LOGIN ||
                res.code === CodeEnum.TOKEN_EXPIRED
            ) {
                useTokenStore().removeToken()
                location.reload()
            }
            return Promise.reject(res.message || 'Unknown Error')
        } else {
            return response
        }
    },
    (error) => Promise.reject(error)
)

export enum CodeEnum {
    SUCCESS = 200, // 成功
    FAIL = 500, // 失败
    ILLEGAL_TOKEN = 508, // 非法的 token
    OTHER_CLIENT_LOGIN = 512, // 其他客户端已经登录
    TOKEN_EXPIRED = 514, // token 过期
}

export type Result<T = unknown> = { code: number; message: string; data: T }

/**
 * 封装 axios 请求
 * <T>: 表示响应体内容。
 * <D>: 表示请求体内容。
 */
const request = <T = unknown, D = unknown>(config: AxiosRequestConfig<D>) => {
    return new Promise<Result<T>>((resolve, reject) => {
        axiosInstance<Result<T>>(config)
            .then((response) => resolve(response.data))

            // 统一处理错误
            .catch((err) => {
                console.error(err)
                Message({
                    type: 'error',
                    message: typeof err === 'string' ? err : err.message,
                    duration: 5000,
                })
                reject(err)
            })
    })
}

export default request
