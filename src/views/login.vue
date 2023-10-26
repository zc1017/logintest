<template>
  <div class="login-container">
    <div class="content">
      <div class="left">
      </div>
      <div class="right">
        <div class="right-content">
          <h2 class="title">三维测试系统</h2>
          <div class="tip">
            <span class="line"></span>
            <span>账号密码登录</span>
            <span class="line"></span>
          </div>
          <!-- 表单 -->
          <div class="flex justify-center">
            <el-form :model="form" class="w-[70%]" :rules="rules" ref="formRef">
              <el-form-item prop="username">
                <el-input v-model="form.username" size="large" placeholder="请输入用户名">
                  <template #prefix>
                    <el-icon>
                      <User />
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="form.password" type="password" size="large" show-password placeholder="请输入密码">
                  <template #prefix>
                    <el-icon>
                      <Lock />
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" :loading="loading" @click="submit" class="submit-btn" round color="#4460f1">
                  登录
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, onUnmounted } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"
import { notification } from "@/utils/common.js"
const router = useRouter()
const store = useStore()


// 表单数据
const form = reactive({
  username: "",
  password: ""
})
// 表单校验
const rules = reactive({
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' }
  ]
})

let formRef = ref(null)
let loading = ref(false)
// 提交
function submit() {
  formRef.value.validate(async valid => {
    if (!valid) return
    loading.value = true
    try {
      let result = await store.dispatch("userLogin", form);
      // 跳转首页
      router.push("/")
      notification("登录成功！")
    } catch(error){
      notification(error, "error", true)
    }
    finally {
      loading.value = false
    }
  })
}

// 添加键盘监听
onMounted(() => {
  document.addEventListener("keyup", onKeyUp)
})
// 移除事件
onUnmounted(() => {
  document.removeEventListener("keyup", onKeyUp)
})
function onKeyUp(event) {
  if (event.key == "Enter") submit()
}

</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 100%;
  height: 100vh;
 background-image: url(@/assets/image/bg.png);
 background-position: top left;
 background-repeat: no-repeat;
 background-size:cover;
  display: flex;
}

.left {
  flex: 1;
  position: relative;
}


.content .right {
  flex: 1;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: end;
  align-items: center;
}

.right .right-content {
  width: 450px;
  margin-right:10%;
  background-color: rgba(255,255,255) ;
  background-image: url(@/assets/image/bg2.png);
 background-position: top left;
 background-repeat: no-repeat;
 background-size:cover;
  border-radius: 10px;
}

.left .tip>div:first-child {
  @apply font-bold text-5xl text-light-50 mb-5;
}

.left .tip>div:last-child {
  @apply text-gray-200 text-sm;
}

.right .tip {
  color: #a0aab6;
  @apply flex items-center justify-center my-5 space-x-2;
}

.right .line {
  background-color: #fff;
  @apply h-[1px] w-16;
}

.right .right-content .title {
  text-align: center;
  letter-spacing: 3px;
  color:white;
  @apply font-bold text-3xl my-7;
}

.right .submit-btn {
  border-radius: 10px;
  font-size: 15px;
  color: #fff;
  font-weight: 600;
  margin: 30px 0;
  box-shadow: -20px 28px 42px 0 rgb(62 145 255 / 37%);
  @apply w-full h-[40px];
}

@keyframes movement {

  0%,
  100% {
    background-size: 130vmax 130vmax, 80vmax 80vmax, 90vmax 90vmax, 110vmax 110vmax, 90vmax 90vmax;
    background-position: -80vmax -80vmax, 60vmax -30vmax, 10vmax 10vmax, -30vmax -10vmax, 50vmax 50vmax;
  }

  25% {
    background-size: 100vmax 100vmax, 90vmax 90vmax, 100vmax 100vmax, 90vmax 90vmax, 60vmax 60vmax;
    background-position: -60vmax -90vmax, 50vmax -40vmax, 0vmax -20vmax, -40vmax -20vmax, 40vmax 60vmax;
  }

  50% {
    background-size: 80vmax 80vmax, 110vmax 110vmax, 80vmax 80vmax, 60vmax 60vmax, 80vmax 80vmax;
    background-position: -50vmax -70vmax, 40vmax -30vmax, 10vmax 0vmax, 20vmax 10vmax, 30vmax 70vmax;
  }

  75% {
    background-size: 90vmax 90vmax, 90vmax 90vmax, 100vmax 100vmax, 90vmax 90vmax, 70vmax 70vmax;
    background-position: -50vmax -40vmax, 50vmax -30vmax, 20vmax 0vmax, -10vmax 10vmax, 40vmax 60vmax;
  }
}

@keyframes sphereAnimation {
  0% {
    width: 10%;
  }

  100% {
    width: 90%;
    transform: translate(-30%, 5%);
  }
}

@keyframes peopleAnimation {
  0% {
    width: 40%;
  }

  100% {
    width: 70%;
    transform: translate(90%, -10%);
  }
}

@keyframes pOtherAnimation {
  0% {
    transform: translate(90%, -10%);
  }

  100% {
    transform: translate(90%, -15%);
  }
}

@keyframes sOtherAnimation {
  0% {
    transform: translate(-30%, 5%);
  }

  100% {
    transform: translate(-30%, 10%);
  }
}
</style>