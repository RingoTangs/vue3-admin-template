export const isDev: boolean = import.meta.env.DEV
export const isProd: boolean = import.meta.env.PROD
export const mode: string = import.meta.env.MODE

// 后端 API 地址, 配置 axios baseUrl 使用
export const apiBaseUrl: string = import.meta.env.VITE_APP_API_BASE_URL

// 项目名字
export const documentTitle: string = import.meta.env.VITE_APP_PROJECT_TITLE
