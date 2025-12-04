<template>
  <div id="app">
    <!-- 全局头部组件 - 登录页面不显示 -->
    <AppHeader v-if="$route.path !== '/login'" />
    
    <!-- 路由视图，用于显示当前路由对应的组件 -->
    <main class="app-main">
      <router-view />
    </main>
    
    <!-- 全局尾部组件 - 登录页面不显示 -->
    <AppFooter v-if="$route.path !== '/login'" />
  </div>
</template>

<script>
// 导入头部和尾部组件
import AppHeader from './components/Header.vue'
import AppFooter from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
#app {
  width: 100%;
  min-height: 100vh;
}
</style>
