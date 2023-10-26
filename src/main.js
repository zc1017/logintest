import { createApp } from 'vue'
import router from "@/permission.js"
import store from "@/store/index.js"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import locale from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
import 'virtual:windi.css'
import "nprogress/nprogress.css"
import "@/assets/index.css"
import vue3WaterMarker from "vue3-water-marker"
import App from '@/App.vue'

const app = createApp(App)
app.use(vue3WaterMarker)
app.use(ElementPlus, { locale })
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.use(store)
app.mount('#app')
