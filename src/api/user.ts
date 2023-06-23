import request from '@/utils/request'

// User Login API
export type LoginRequest = { username: string; password: string }
export function login(data: LoginRequest) {
    return request<string, LoginRequest>({ url: '/user/login', method: 'post', data })
}

// Get User Info API
export type GetUserInfoResponse = {
    name: string
    avatar: string
    introduction: string
    roles: string[]
}
export function getUserInfo(token: string) {
    return request<GetUserInfoResponse>({ url: '/user/info', method: 'get', params: { token } })
}

// User Logout API
export function logout() {
    return request<void>({ url: '/user/logout', method: 'post' })
}
