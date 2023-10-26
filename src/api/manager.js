import axios from "./request"
import  md5  from 'js-md5'

// 登录
export const login = (username, password) => axios.post("/api/login", { 'loginId':username, 'loginPwd':password })


