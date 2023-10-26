import { createStore } from 'vuex'
import { login } from "@/api/manager.js"
import "@/api/mock.js"
import { setToken, removeToken } from "@/utils/token.js"

// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      user: localStorage.getItem("user")||{}, // 用户信息
    }
  },
  mutations: {
    // 设置用户信息
    setUserInfo(state, user) {
      state.user = user
      localStorage.setItem('user',JSON.stringify(user));
    }
  },
  actions: {
    // 登录
    async userLogin({ commit }, { username, password }) {
      try {
        let result =await  login(username, password)
        if(result.code!='0'){
          return Promise.reject(result.message)
        }
        setToken(result.token) // 设置token
        commit("setUserInfo", result.data)
        return result
      } catch (error) {
        return Promise.reject(error)
      }
    },
    // 退出登录
    async logout({ commit }) {
      removeToken()
      commit("setUserInfo", {})
    }
  }
})

export default store