const isDev: boolean = import.meta.env.DEV
const isProd: boolean = import.meta.env.PROD
const mode: string = import.meta.env.MODE
const apiBaseUrl: string = import.meta.env.VITE_APP_API_BASE_URL

export default {
    isProd,
    isDev,
    mode,
    apiBaseUrl,
}
