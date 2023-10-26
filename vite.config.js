import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  base:"./",
  // 配置别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  // 配置插件
  plugins: [
    vue(),
    WindiCSS()
  ],
  // 配置代理
  // server: {
  //   proxy: {
  //     '/jkd': {
  //       target: 'http://47.119.162.79:8081/',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     }
  //   }
  // }
})
