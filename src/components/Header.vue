<template>
  <header class="app-header">
    <!-- 顶部导航栏 -->
    <div class="top-nav">
      <div class="container">
        <div class="nav-left">
          <a href="#" class="nav-item">我的药店</a>
          <a href="#" class="nav-item">上传商品</a>
          <a href="#" class="nav-item">退货中心</a>
          <a href="#" class="nav-item">采购中心</a>
          <a href="#" class="nav-item">我的订单</a>
          <a href="#" class="nav-item">采购验收</a>
          <a href="#" class="nav-item">帮助中心</a>
        </div>
        <div class="nav-right">
          <a href="#" class="nav-item">退出</a>
        </div>
      </div>
    </div>
    
    <!-- 品牌和搜索区域 -->
    <div class="brand-search">
      <div class="container">
        <div class="brand-logo">
          <img src="@/assets/logo.png" alt="我的药店" class="logo-img">
        </div>
        <div class="search-container">
          <div class="search-box">
            <input type="text" placeholder="搜索药品" class="search-input">
            <button class="search-btn">搜索</button>
          </div>
        </div>
        <div class="user-actions">
          <a href="#" class="action-item">
            <span class="action-icon">👤</span>
            <span class="action-text">个人中心</span>
          </a>
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
        <a href="#" class="nav-link active">首页</a>
        <a href="#" class="nav-link">药品分类</a>
        <a href="#" class="nav-link">品牌旗舰店</a>
        <a href="#" class="nav-link">促销活动</a>
        <a href="#" class="nav-link">健康资讯</a>
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
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 顶部导航 */
.top-nav {
  background: #ffffff;
  border-bottom: 2px solid #ff0000;
  height: 40px;
  line-height: 40px;
  position: relative;
}

.top-nav .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.nav-item {
  color: #333;
  text-decoration: none;
  margin: 0 10px;
  font-size: 14px;
}

.nav-item:hover {
  color: #ff0000;
  text-decoration: none;
}



/* 品牌和搜索区域 */
.brand-search {
  padding: 15px 0;
}

.brand-search .container {
  display: flex;
  align-items: center;
  gap: 20px;
}

.brand-logo {
  flex-shrink: 0;
}

.logo-img {
  width: 120px;
  height: auto;
}

.search-container {
  flex: 1;
  max-width: 600px;
}

.search-box {
  display: flex;
  border: 2px solid #1890ff;
  border-radius: 4px;
  overflow: hidden;
}

.search-input {
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 14px;
}

.search-btn {
  background: #1890ff;
  color: #ffffff;
  border: none;
  padding: 0 20px;
  font-size: 14px;
  cursor: pointer;
}

.search-btn:hover {
  background: #40a9ff;
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
  color: #333;
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
  background: #1890ff;
}

.main-nav .container {
  display: flex;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
}

.nav-link:hover,
.nav-link.active {
  background: #40a9ff;
}
</style>