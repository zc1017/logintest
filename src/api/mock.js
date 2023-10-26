// 引入mockjs
import Mock from "mockjs";

// 获取 mock.Random 对象
const Random = Mock.Random;
// 使用mockjs模拟数据
let userList = [
  {
    id: "5ffa80aD-9CF4-0C77-eBFC-f6612BfAcF4F",
    account: "admin",
    password: "Aa123456",
    name: "张三",
  },
  {
    id: "4FcC922C-C72c-95c3-Ef92-FbFAc24cc831",
    account: "test",
    password: "Aa123456",
    name: "李四",
  },
  {
    id: "4FcC922C-C72c-95c3-Ef92-FbFAc24cc822",
    account: "test1",
    password: "Aa123456",
    name: "测试账号",
  },
]


/** 登录 */
Mock.mock("/api/login", "post",(params) => {
    let data = JSON.parse(params.body);
    let result;
    //校验用户名密码是否正确
    userList.forEach((item)=>{
        if(item.account===data.loginId&&item.password===data.loginPwd){
          //返回用户信息和token
          result= {
            code: "0",
            message: "success",
            data: item,
            token:Random.guid()
          }
          return
        }
    })
    if(result){
        return result;
    }else{
       return {
            code: "1",
            message: "用户名或者密码错误"
          };
    }
 
});