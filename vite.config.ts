import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),

        // https://github.com/vbenjs/vite-plugin-svg-icons
        createSvgIconsPlugin({
            // 指定 SVG图标 保存的文件夹路径
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
            // 指定 使用svg图标的格式
            symbolId: 'icon-[dir]-[name]',
        }),

        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
})
