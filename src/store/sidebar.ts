import { defineStore } from 'pinia'

const MENU_INDEX_PATH_MAP_KEY = 'menu_index_path_map_key'

type MenuIndexPathMap = Record<string, string[]>

function getMenuSelectedPathMap() {
    return JSON.parse(
        localStorage.getItem(MENU_INDEX_PATH_MAP_KEY) || '{}'
    ) as MenuIndexPathMap // prettier-ignore
}

export const useSidebarStore = defineStore('sidebarStore', {
    state: () => ({ menuIndexPathMap: getMenuSelectedPathMap() }),
    actions: {
        setMenuSelectedPathMap(map: MenuIndexPathMap) {
            this.menuIndexPathMap = map
            localStorage.setItem(MENU_INDEX_PATH_MAP_KEY, JSON.stringify(map))
        },
        putMenuSelectedPath(key: string, value: string[]) {
            this.menuIndexPathMap[key] = value
            localStorage.setItem(MENU_INDEX_PATH_MAP_KEY, JSON.stringify(this.menuIndexPathMap))
        },
    },
})
