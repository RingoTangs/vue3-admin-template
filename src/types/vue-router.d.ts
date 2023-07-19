import 'vue-router'
import { ComputedRef } from 'vue'

declare module 'vue-router' {
    interface RouteMeta {
        title?: ComputedRef<string>
        hidden?: boolean
    }
}
