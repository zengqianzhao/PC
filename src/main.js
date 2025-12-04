import { createApp } from 'vue'
import App from './App.vue'
// 导入Element Plus组件库
import ElementPlus from 'element-plus'
// 导入Element Plus样式
import 'element-plus/dist/index.css'
// 导入路由配置
import router from './router'

// 创建Vue应用实例
const app = createApp(App)

// 使用Element Plus组件库
app.use(ElementPlus)
// 使用路由配置
app.use(router)

// 挂载应用
app.mount('#app')
