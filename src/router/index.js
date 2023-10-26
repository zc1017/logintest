import { createRouter, createWebHashHistory } from "vue-router"
import admin from "@/layout/admin.vue"
import login from "@/views/login.vue"
const NotFound = () => import("@/views/404.vue")

// 默认路由，所有用户共享
const routes = [
  {
    path: "/",
    name: "admin",
    component: admin
  },
  {
    path: "/login",
    component: login,
    meta: {
      title: "登录页"
    }
  },
  // 配置404页
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound, meta: { title: "404" } },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

