import axios from 'axios'
import { apiBaseUrl } from '@/config'
import { default as pinia, useTokenStore } from '@/store'
import { useMessage } from '@/utils/message'

const service = axios.create({ baseURL: apiBaseUrl, timeout: 5000 })
const tokenStore = useTokenStore(pinia)
const Message = useMessage()

// request interceptor
service.interceptors.request.use(
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
service.interceptors.response.use(
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
            return res
        }
    },
    (error) => {
        console.log(error) // for debug
        Message({ type: 'error', message: error.message, duration: 5000 })
        return Promise.reject(error)
    }
)

export default service

export enum CodeEnum {
    SUCCESS = 200, // 成功
    FAIL = 500, // 失败
    ILLEGAL_TOKEN = 508, // 非法的 token
    OTHER_CLIENT_LOGIN = 512, // 其他客户端已经登录
    TOKEN_EXPIRED = 514, // token 过期
}
