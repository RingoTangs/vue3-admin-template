import request from '@/utils/request'

export type LoginRequest = { username: string; password: string }
export function login(data: LoginRequest) {
    return request<string, LoginRequest>({ url: '/user/login', method: 'post', data })
}

// export function getUserInfo(token: string) {
//     return request<CommonResponse<string>>({
//         url: '/vue3-admin-template/user/info',
//         method: 'get',
//         params: { token },
//     })
// }

// export function logout() {
//     return request({
//         url: '/vue-admin-template/user/logout',
//         method: 'post',
//     })
// }
