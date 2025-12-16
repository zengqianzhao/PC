<template>
  <div class="pharmacy-container">
    <!-- 顶部导航 -->
    <div class="top-nav">
      <div class="container">
        <div class="nav-breadcrumb">
          <router-link to="/shop" class="breadcrumb-link">首页</router-link>
          <span class="breadcrumb-arrow">></span>
          <span class="breadcrumb-current">上海乐之药药店</span>
        </div>
      </div>
    </div>
    
    <!-- 主内容区 -->
    <div class="main-content">
      <div class="container">
        <!-- 左侧菜单 -->
        <div class="left-sidebar">
          <div class="user-info">
            <div class="user-avatar">
              <img src="https://picsum.photos/id/1005/100/100" alt="药师头像" class="avatar-img" @error="handleImageError">
              <span class="badge">药师</span>
            </div>
            <div class="user-details">
              <h3 class="user-name">药师34208</h3>
              <p class="user-phone">13916034208</p>
              <p class="user-pharmacy">上海乐之药药店</p>
            </div>
          </div>
          
          <div class="menu-section">
            <h4 class="menu-title">个人信息</h4>
            <ul class="menu-list">
              <li class="menu-item active">
                <a href="#" class="menu-link">个人资料</a>
              </li>
              <li class="menu-item">
                <a href="#" class="menu-link">密码修改</a>
              </li>
              <li class="menu-item">
                <a href="#" class="menu-link">历史药店</a>
              </li>
              <li class="menu-item">
                <a href="#" class="menu-link">我的资质信息</a>
              </li>
              <li class="menu-item">
                <a href="#" class="menu-link">我的药店信息</a>
              </li>
            </ul>
          </div>
          
          <div class="menu-section">
            <h4 class="menu-title">我的财富</h4>
            <ul class="menu-list">
              <li class="menu-item">
                <a href="#" class="menu-link">我的货款</a>
              </li>
              <li class="menu-item">
                <a href="#" class="menu-link">我的优惠券</a>
              </li>
              <li class="menu-item">
                <a href="#" class="menu-link">我的平安账户</a>
              </li>
              <li class="menu-item">
                <a href="#" class="menu-link">我的积分</a>
              </li>
              <li class="menu-item">
                <a href="#" class="menu-link">关注中心</a>
              </li>
            </ul>
          </div>
          
          <div class="menu-section">
            <h4 class="menu-title">常用功能</h4>
            <ul class="menu-list">
              <li class="menu-item">
                <a href="#" class="menu-link">常用商品</a>
              </li>
              <li class="menu-item">
                <a href="#" class="menu-link">浏览历史</a>
              </li>
              <li class="menu-item">
                <a href="#" class="menu-link">关注商家</a>
              </li>
            </ul>
          </div>
        </div>
        
        <!-- 右侧内容 -->
        <div class="right-content">
          <!-- 药店信息卡片 -->
          <div class="info-card">
            <div class="card-header">
              <h2 class="card-title">药店信息</h2>
              <div class="card-actions">
                <button class="action-btn">修改密码</button>
                <button class="action-btn">实名认证</button>
                <button class="action-btn">异地登录保护</button>
                <button class="action-btn">修改收货地址</button>
                <button class="action-btn">资源保障</button>
              </div>
            </div>
            <div class="card-body">
              <div class="pharmacy-details">
                <div class="detail-item">
                  <label class="detail-label">药店名称：</label>
                  <span class="detail-value">上海乐之药药店</span>
                </div>
                <div class="detail-item">
                  <label class="detail-label">收货地址：</label>
                  <span class="detail-value">上海市徐汇区罗秀路869号</span>
                </div>
                <div class="detail-item">
                  <label class="detail-label">收货人：</label>
                  <span class="detail-value">沈先生 13916034208</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 订单统计卡片 -->
          <div class="stats-card">
            <div class="card-header">
              <h2 class="card-title">订单统计</h2>
            </div>
            <div class="card-body">
              <div class="stats-grid">
                <div class="stat-item">
                  <div class="stat-icon">📋</div>
                  <div class="stat-content">
                    <div class="stat-value">0</div>
                    <div class="stat-label">待付款订单</div>
                  </div>
                </div>
                <div class="stat-item">
                  <div class="stat-icon">📦</div>
                  <div class="stat-content">
                    <div class="stat-value">0</div>
                    <div class="stat-label">待收货订单</div>
                  </div>
                </div>
                <div class="stat-item">
                  <div class="stat-icon">⭐</div>
                  <div class="stat-content">
                    <div class="stat-value">0</div>
                    <div class="stat-label">待评价订单</div>
                  </div>
                </div>
                <div class="stat-item">
                  <div class="stat-icon">🔄</div>
                  <div class="stat-content">
                    <div class="stat-value">1</div>
                    <div class="stat-label">退款/售后订单</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 账户信息卡片 -->
          <div class="account-card">
            <div class="card-header">
              <h2 class="card-title">我的账户</h2>
            </div>
            <div class="card-body">
              <div class="account-grid">
                <div class="account-item">
                  <div class="account-value">0</div>
                  <div class="account-label">我的平安账户</div>
                  <button class="account-btn">充值</button>
                </div>
                <div class="account-item">
                  <div class="account-value">0</div>
                  <div class="account-label">我的可用现金</div>
                </div>
                <div class="account-item">
                  <div class="account-value">0</div>
                  <div class="account-label">我的优惠券</div>
                </div>
                <div class="account-item">
                  <div class="account-value">0</div>
                  <div class="account-label">我的积分</div>
                  <button class="account-btn">领好礼</button>
                </div>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PharmacyDetail',
  data() {
    return {
      // 药店数据
      avatarUrl: 'https://picsum.photos/id/1005/100/100'
    }
  },
  methods: {
    /**
     * 处理图片加载失败
     * @param {Event} event - 图片加载失败事件
     */
    handleImageError(event) {
      // 图片加载失败时使用备用头像
      event.target.src = 'https://picsum.photos/100/100?random=1';
    }
  }
}
</script>

<style scoped>
/* 全局样式 */
.pharmacy-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  font-family: 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.container {
  width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 顶部导航 */
.top-nav {
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  padding: 16px 0;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
}

.nav-breadcrumb {
  display: flex;
  align-items: center;
  font-size: 14px;
}

.breadcrumb-link {
  color: #1890ff;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
}

.breadcrumb-link:hover {
  color: #40a9ff;
  text-decoration: underline;
}

.breadcrumb-arrow {
  color: #999;
  margin: 0 12px;
  font-size: 16px;
}

.breadcrumb-current {
  color: #333;
  font-weight: 600;
  font-size: 16px;
}

/* 主内容区 */
.main-content {
  padding: 30px 0 60px;
}

.main-content .container {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

/* 左侧菜单 */
.left-sidebar {
  width: 300px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  padding: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  position: sticky;
  top: 90px;
  height: fit-content;
}

.left-sidebar:hover {
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.12);
}

.user-info {
  background: linear-gradient(135deg, #1890ff 0%, #40a9ff 100%);
  color: white;
  text-align: center;
  padding: 40px 20px 30px;
  position: relative;
  overflow: hidden;
}

.user-info::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%);
  transform: rotate(45deg);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
}

.user-avatar {
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
  z-index: 1;
}

.avatar-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.3);
  object-fit: cover;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
}

.avatar-img:hover {
  transform: scale(1.05) rotate(5deg);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
}

.badge {
  position: absolute;
  bottom: -5px;
  right: -10px;
  background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%);
  color: white;
  font-size: 13px;
  font-weight: 600;
  padding: 6px 16px;
  border-radius: 20px;
  border: 3px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 2;
  transform: rotate(5deg);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: rotate(5deg) scale(1); }
  50% { transform: rotate(5deg) scale(1.05); }
}

.user-details {
  text-align: center;
  padding: 0 20px;
  z-index: 1;
  position: relative;
}

.user-name {
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin: 0 0 12px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-phone {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.95);
  margin: 0 0 8px 0;
  font-weight: 500;
}

.user-pharmacy {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.15);
  padding: 8px 20px;
  border-radius: 24px;
  display: inline-block;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.menu-section {
  margin: 24px 0;
}

.menu-title {
  font-size: 13px;
  font-weight: 600;
  color: #999;
  padding: 0 24px;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  margin: 0;
}

.menu-link {
  display: flex;
  align-items: center;
  padding: 14px 24px;
  color: #333;
  text-decoration: none;
  font-size: 15px;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
  position: relative;
}

.menu-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, #e6f7ff 0%, rgba(230, 247, 255, 0) 100%);
  transition: width 0.3s ease;
  z-index: -1;
}

.menu-link:hover {
  color: #1890ff;
  border-left-color: #1890ff;
  transform: translateX(4px);
}

.menu-link:hover::before {
  width: 100%;
}

.menu-item.active .menu-link {
  background: linear-gradient(90deg, #e6f7ff 0%, #ffffff 100%);
  color: #1890ff;
  border-left-color: #1890ff;
  font-weight: 600;
  box-shadow: inset 0 2px 8px rgba(24, 144, 255, 0.1);
}

/* 右侧内容 */
.right-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* 卡片样式 */
.info-card, .stats-card, .account-card, .features-card {
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.info-card:hover, .stats-card:hover, .account-card:hover, .features-card:hover {
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
  border-color: rgba(24, 144, 255, 0.2);
  transform: translateY(-4px);
}

.card-header {
  background: linear-gradient(135deg, #1890ff 0%, #40a9ff 100%);
  padding: 24px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.card-header::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
}

.card-title {
  color: white;
  font-size: 22px;
  font-weight: 700;
  margin: 0;
  position: relative;
  z-index: 1;
}

.card-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.action-btn {
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  padding: 8px 20px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.action-btn:hover {
  background-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.card-body {
  padding: 32px;
}

/* 药店信息 */
.pharmacy-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.detail-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
  border-radius: 12px;
  border: 1px solid #e8f0fe;
  transition: all 0.3s ease;
}

.detail-item:hover {
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.1);
  border-color: #1890ff;
  transform: translateY(-2px);
}

.detail-label {
  font-weight: 600;
  color: #666;
  font-size: 14px;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.detail-value {
  color: #333;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
}

/* 订单统计 */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.stat-item {
  background: linear-gradient(135deg, #1890ff 0%, #40a9ff 100%);
  color: white;
  padding: 28px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.stat-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%);
  animation: glow 2s infinite alternate;
}

@keyframes glow {
  0% { opacity: 0.5; transform: translateX(-100%); }
  100% { opacity: 1; transform: translateX(100%); }
}

.stat-item:nth-child(2) {
  background: linear-gradient(135deg, #52c41a 0%, #73d13d 100%);
}

.stat-item:nth-child(3) {
  background: linear-gradient(135deg, #fa8c16 0%, #ffa940 100%);
}

.stat-item:nth-child(4) {
  background: linear-gradient(135deg, #f5222d 0%, #ff4d4f 100%);
}

.stat-item:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
}

.stat-icon {
  font-size: 40px;
  opacity: 0.9;
}

.stat-content {
  text-align: center;
  width: 100%;
}

.stat-value {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
}

.stat-label {
  font-size: 15px;
  opacity: 0.9;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* 账户信息 */
.account-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.account-item {
  background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
  padding: 24px;
  border-radius: 16px;
  text-align: center;
  border: 2px solid #e8f0fe;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.account-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #1890ff 0%, #40a9ff 100%);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.account-item:hover {
  background: linear-gradient(135deg, #e6f7ff 0%, #ffffff 100%);
  box-shadow: 0 8px 24px rgba(24, 144, 255, 0.12);
  border-color: #1890ff;
  transform: translateY(-4px);
}

.account-item:hover::before {
  transform: scaleX(1);
}

.account-value {
  font-size: 32px;
  font-weight: 700;
  color: #1890ff;
  margin-bottom: 12px;
  letter-spacing: -0.5px;
}

.account-label {
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
  font-weight: 500;
}

.account-btn {
  background: linear-gradient(135deg, #1890ff 0%, #40a9ff 100%);
  color: white;
  border: none;
  border-radius: 24px;
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.2);
}

.account-btn:hover {
  background: linear-gradient(135deg, #40a9ff 0%, #69c0ff 100%);
  box-shadow: 0 8px 20px rgba(24, 144, 255, 0.3);
  transform: translateY(-2px);
}

/* 增强视觉效果 */
.glass-effect {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.shadow-soft {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}

.shadow-medium {
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .container {
    width: 100%;
  }
  
  .main-content .container {
    flex-direction: column;
  }
  
  .left-sidebar {
    width: 100%;
    position: static;
  }
  
  .stats-grid, .account-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .stats-grid, .account-grid, .pharmacy-details {
    grid-template-columns: 1fr;
  }
  
  .card-header {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
  
  .card-actions {
    width: 100%;
    justify-content: flex-start;
  }
  
  .action-btn {
    flex: 1;
    text-align: center;
  }
  
  .container {
    padding: 0 16px;
  }
  
  .card-body {
    padding: 20px;
  }
}
</style>