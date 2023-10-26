<template>
  <div class="header">
    <!-- 左侧 -->
    <div class="flex items-center">
      <span class="logo">
         <el-image style="width: 30px" :src="logo" :fit="fit" class="mr-2"/> 
       三维测试系统
      </span>
    </div>
    <!-- 右侧 -->
    <div class="flex items-center">
      <el-tooltip effect="dark" :content="!isFullscreen ? '全屏' : '退出全屏'" placement="bottom">
        <el-icon class="icon-btn" @click="toggle">
          <FullScreen v-if="!isFullscreen" />
          <Aim v-else />
        </el-icon>
      </el-tooltip>
      <el-dropdown class="dropdown" @command="handleCommand">
        <span class="avatar">
          <el-avatar class="mr-2" :size="25" src="/src/assets/image/default_avatar.png" />
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>

</template>

<script setup>
import logo from '@/assets/image/logo.png'
import { useFullscreen } from '@vueuse/core'
import { useLogout } from "@/hooks/useManager.js"
// isFullscreen：是否全屏状态   toggle：切换全屏
const { isFullscreen, toggle } = useFullscreen()


const { handleLogout } = useLogout()

// 处理菜单项点击事件
function handleCommand(command) {
  if (command == "logout") {   
    handleLogout()
  } else {
    openRepassword()
  }
}

</script>

<style scoped>
.header {
  @apply h-[60px] flex items-center justify-between bg-indigo-700 text-light-50;
  @apply p-0 h-auto fixed top-0 right-0 left-0 z-10;
}

.header .logo {
  @apply w-[200px] flex items-center justify-center text-xl font-thin;
}

.icon-btn {
  @apply w-[42px] h-[64px] flex justify-center items-center cursor-pointer;
}

.icon-btn:hover {
  @apply bg-indigo-600;
}

.header .dropdown {
  @apply h-[64px] cursor-pointer flex items-center justify-center mx-5;
}

.dropdown .avatar {
  @apply flex items-center text-light-50 outline-none;
}
</style>