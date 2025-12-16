<template>
  <header class="app-header">
    <!-- 顶部导航栏 -->
    <div class="top-nav">
      <div class="container">
        <div class="nav-left">
          <router-link to="/shop" class="nav-item">首页</router-link>
          <router-link to="/pharmacy" class="nav-item">上海乐之药药店</router-link>
          <router-link to="/login" class="nav-item">退出</router-link>
        </div>
        <div class="nav-right">
          <router-link to="/business-center" class="nav-item">商务中心</router-link>
          <router-link to="/order" class="nav-item">我的订单</router-link>
          <router-link to="/loan" class="nav-item">我的账单</router-link>
          <router-link to="/inspection-report" class="nav-item">检验报告</router-link>
          <router-link to="/help-center" class="nav-item">帮助中心</router-link>
        </div>
      </div>
    </div>
    
    <!-- 品牌和搜索区域 -->
    <div class="brand-search">
      <div class="container">
        <div class="brand-logo">
          <div class="logo-text">
            <div class="logo-main">
              <img src="../assets/logo.png" alt="乐之药" class="logo-icon" />
              乐之药
            </div>
            <div class="logo-sub">www.51leyao.com</div>
          </div>
        </div>
        <div class="search-container">
          <div class="search-box">
            <input type="text" placeholder="搜索药品、医疗器械..." class="search-input">
            <button class="search-btn">搜索</button>
          </div>
        </div>
        <div class="user-actions">
          <a href="#" class="action-item">
            <span class="action-icon">🛒</span>
            <span class="action-text">购物车</span>
          </a>
        </div>
      </div>
    </div>
    
    <!-- 主导航 -->
    <div class="main-nav">
      <div class="container">
        <router-link to="/shop" class="nav-link">
          <span class="nav-icon">🏠</span>
          <span class="nav-text">首页</span>
        </router-link>
        <router-link to="/shop" class="nav-link active">
          <span class="nav-icon">📝</span>
          <span class="nav-text">在线下单</span>
        </router-link>
        <router-link to="/brand-flagship" class="nav-link">
          <span class="nav-icon">🏪</span>
          <span class="nav-text">旗舰店</span>
        </router-link>
        <a href="#" class="nav-link">
          <span class="nav-icon">🎁</span>
          <span class="nav-text">推荐单品包邮</span>
        </a>
        <a href="#" class="nav-link">
          <span class="nav-icon">👥</span>
          <span class="nav-text">拼单专区</span>
        </a>
        <a href="#" class="nav-link">
          <span class="nav-icon">🌿</span>
          <span class="nav-text">本草甄选</span>
        </a>
        <a href="#" class="nav-link">
          <span class="nav-icon">💊</span>
          <span class="nav-text">非药馆</span>
        </a>
        <router-link to="/shop" class="nav-link large-font">
          <span class="nav-icon">🤖</span>
          <span class="nav-text">智能采购</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      // 头部组件数据
    }
  },
  methods: {
    // 头部组件方法
  }
}
</script>

<style scoped>
.app-header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 顶部导航 */
.top-nav {
  background: #ffffff;
  height: 30px;
  line-height: 30px;
  position: relative;
  border-bottom: 1px solid #e0e0e0;
}

.top-nav .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.nav-item {
  color: #333333;
  text-decoration: none;
  margin: 0 8px;
  font-size: 12px;
}

.nav-item:hover {
  color: #1e90ff;
  text-decoration: underline;
}



/* 品牌和搜索区域 */
.brand-search {
  padding: 20px 0;
  /* 从深到淡的蓝色渐变 */
  background: linear-gradient(135deg, #0d47a1 0%, #1976d2 25%, #42a5f5 50%, #90caf9 100%);
  position: relative;
  overflow: hidden;
}

.brand-search .container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.brand-logo {
  flex-shrink: 0;
}

.logo-text {
  text-align: center;
}

.logo-main {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  font-family: 'Arial Black', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.logo-icon {
  width: 30px;
  height: 30px;
  vertical-align: middle;
}

.logo-sub {
  font-size: 12px;
  color: #ffffff;
  margin-top: 2px;
}

.search-container {
  flex: 1;
  max-width: 600px;
}

.search-box {
  display: flex;
  border: 2px solid #ffffff;
  border-radius: 4px;
  overflow: hidden;
  background: #ffffff;
}

.search-input {
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 14px;
}

.search-btn {
  background: #1e90ff;
  color: #ffffff;
  border: none;
  padding: 0 20px;
  font-size: 14px;
  cursor: pointer;
  border-left: 2px solid #1e90ff;
}

.search-btn:hover {
  background: #4169e1;
}

.user-actions {
  display: flex;
  gap: 15px;
}

.action-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
}

.action-icon {
  font-size: 20px;
  margin-bottom: 2px;
}

.action-text {
  font-size: 12px;
}

/* 主导航 */
.main-nav {
  background: #ffffff;
  border-top: 1px solid #e0e0e0;
}

.main-nav .container {
  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-link {
  color: #1e90ff;
  text-decoration: none;
  padding: 10px 15px;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
}

.nav-link:hover {
  background: #f0f8ff;
}

.nav-link.active {
  background:  #f0f8ff;
  color: #1e90ff;
}

.nav-link.active:hover {
  background:#f0f8ff;
}

/* 大字体导航项 */
.nav-link.large-font {
  font-size: 15px; /* 增大字体大小 */
  background: white; /* 白色背景 */
  color: #1e90ff; /* 蓝色字体 */
}
</style>