import 'vue-router'
import {} from 'vue'

declare module 'vue-router' {
    interface RouteMeta {
        title?: ComputedRef<string>
        hidden?: boolean
    }
}
