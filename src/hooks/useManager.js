import { useRouter } from "vue-router"
import { useStore } from "vuex"
import { notification, showModal } from "@/utils/common.js"

// 退出登录
export function useLogout() {
  const store = useStore()
  const router = useRouter()
  const handleLogout = () => {
    showModal("是否要退出登录？").then(async () => {
        await store.dispatch("logout")
        router.push("/login")
        notification("退出登录成功！")
    })
  }
  return { handleLogout }
}

