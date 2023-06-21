const isDev: boolean = import.meta.env.DEV
const isProd: boolean = import.meta.env.PROD
const mode: string = import.meta.env.MODE

export default {
    isProd,
    isDev,
    mode,
}
