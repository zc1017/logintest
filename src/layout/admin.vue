<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <Header></Header>
    </el-header>
    <!-- 中间 -->
    <el-container  style="width: 100%;height:calc( 100vh - 64px )">
      <vue3-water-marker :text="text" :opacity="0.4" :width="100" ></vue3-water-marker>
      <!-- 内容 -->
      <iframe
        ref="iframeRef"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        src="https://cn.vuejs.org/"
        style="width: 100%; height: 100%"
        scrolling="auto"
        frameborder="0"        
      >
      </iframe>
    </el-container>
  </el-container>
</template>

<script setup >
import Header from "./components/Header.vue"
//获取登录用户名并展示
const user=JSON.parse(localStorage.getItem('user'));
const text=`${user.name},一张图测试`
</script>

<style scoped>

</style>