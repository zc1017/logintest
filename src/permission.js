import { router } from "@/router/index.js"
import store from "@/store/index.js"
import NProgress from "nprogress"
import { getToken } from "@/utils/token.js"
import { notification } from "@/utils/common.js"

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  NProgress.start() // 开启进度条
  const token = getToken()
  // 没有登录跳转回登录页
  if (!token && to.path != "/login") {
    next({path:"/login"});
  }
  // 防止重复登录

  else if (token && to.path == "/login") {
    notification("请勿重复登录！", "error")
    // 使用HTML5 模式无法获取from.path,使用Hash 模式则可以实现回退功能
    next({
      path: '/'
    });
  }else{
    next()
  }

 
})

// 全局后置守卫
router.afterEach((to, from) => {
   // 设置页面标题
  document.title = to.meta.title ? to.meta.title : "三维测试系统"
  NProgress.done() // 关闭进度条
})

export default router