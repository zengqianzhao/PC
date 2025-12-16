<template>
  <div class="business-center-container">

    <!-- 主要内容区域 -->
    <main class="business-main">
      <div class="container">
        <!-- 统计卡片区域 -->
        <div class="stats-section">
          <div class="stats-grid">
            <div class="stats-card">
              <div class="stats-icon">📊</div>
              <div class="stats-content">
                <div class="stats-label">本月采购额</div>
                <div class="stats-value">¥0.00</div>
              </div>
            </div>
            <div class="stats-card">
              <div class="stats-icon">📦</div>
              <div class="stats-content">
                <div class="stats-label">本月订单数</div>
                <div class="stats-value">0</div>
              </div>
            </div>
            <div class="stats-card">
              <div class="stats-icon">🏆</div>
              <div class="stats-content">
                <div class="stats-label">供应商评分</div>
                <div class="stats-value">5.0</div>
              </div>
            </div>
            <div class="stats-card">
              <div class="stats-icon">⏰</div>
              <div class="stats-content">
                <div class="stats-label">平均配送时间</div>
                <div class="stats-value">24h</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 功能导航区域 -->
        <div class="feature-section">
          <div class="feature-grid">
            <div class="feature-card">
              <div class="feature-icon">📝</div>
              <div class="feature-title">在线下单</div>
              <div class="feature-desc">快速便捷的药品采购平台</div>
              <router-link to="/shop" class="feature-link">立即开始</router-link>
            </div>
            <div class="feature-card">
              <div class="feature-icon">📋</div>
              <div class="feature-title">我的订单</div>
              <div class="feature-desc">查看和管理所有订单</div>
              <router-link to="/order" class="feature-link">查看订单</router-link>
            </div>
            <div class="feature-card">
              <div class="feature-icon">💰</div>
              <div class="feature-title">我的账单</div>
              <div class="feature-desc">财务流水一目了然</div>
              <router-link to="/loan" class="feature-link">查看账单</router-link>
            </div>
            <div class="feature-card">
              <div class="feature-icon">📄</div>
              <div class="feature-title">检验报告</div>
              <div class="feature-desc">药品检验报告查询</div>
              <router-link to="/inspection-report" class="feature-link">查看报告</router-link>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🏪</div>
              <div class="feature-title">药店管理</div>
              <div class="feature-desc">药店信息维护和管理</div>
              <router-link to="/pharmacy" class="feature-link">管理药店</router-link>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🤝</div>
              <div class="feature-title">供应商管理</div>
              <div class="feature-desc">管理合作供应商</div>
              <a href="#" class="feature-link">查看供应商</a>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🎯</div>
              <div class="feature-title">营销活动</div>
              <div class="feature-desc">参与平台营销活动</div>
              <a href="#" class="feature-link">查看活动</a>
            </div>
            <div class="feature-card">
              <div class="feature-icon">❓</div>
              <div class="feature-title">帮助中心</div>
              <div class="feature-desc">获取平台使用帮助</div>
              <router-link to="/help-center" class="feature-link">获取帮助</router-link>
            </div>
          </div>
        </div>

        <!-- 公告和通知区域 -->
        <div class="announcement-section">
          <div class="announcement-left">
            <div class="announcement-card">
              <h2 class="card-title">平台公告</h2>
              <div class="announcement-list">
                <div class="announcement-item">
                  <div class="announcement-title">平台系统升级通知</div>
                  <div class="announcement-date">2025-12-01</div>
                </div>
                <div class="announcement-item">
                  <div class="announcement-title">新供应商入驻公告</div>
                  <div class="announcement-date">2025-11-28</div>
                </div>
                <div class="announcement-item">
                  <div class="announcement-title">双十二促销活动预告</div>
                  <div class="announcement-date">2025-11-25</div>
                </div>
              </div>
              <a href="#" class="view-more">查看更多</a>
            </div>
          </div>
          <div class="announcement-right">
            <div class="notification-card">
              <h2 class="card-title">最新通知</h2>
              <div class="notification-list">
                <div class="notification-item">
                  <div class="notification-icon">📦</div>
                  <div class="notification-content">
                    <div class="notification-title">您的订单已发货</div>
                    <div class="notification-time">1小时前</div>
                  </div>
                </div>
                <div class="notification-item">
                  <div class="notification-icon">💬</div>
                  <div class="notification-content">
                    <div class="notification-title">供应商回复了您的咨询</div>
                    <div class="notification-time">3小时前</div>
                  </div>
                </div>
                <div class="notification-item">
                  <div class="notification-icon">🎁</div>
                  <div class="notification-content">
                    <div class="notification-title">您有新的优惠券可用</div>
                    <div class="notification-time">1天前</div>
                  </div>
                </div>
              </div>
              <a href="#" class="view-more">查看全部</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'BusinessCenter',
  data() {
    return {
      // 页面数据
    }
  },
  methods: {
    /**
     * 处理页面初始化
     */
    init() {
      console.log('商务中心页面已加载');
    }
  },
  mounted() {
    // 页面加载完成后执行初始化
    this.init();
  }
}
</script>

<style scoped>
.business-center-container {
  min-height: 100vh;
  background-color: #f5f7fa;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* 容器样式 */
.container {
  width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}



/* 主要内容区域 */
.business-main {
  padding: 32px 0;
}

/* 统计卡片区域 */
.stats-section {
  margin-bottom: 32px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.stats-card {
  background-color: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
}

.stats-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(24, 144, 255, 0.15);
}

.stats-icon {
  font-size: 48px;
  background: linear-gradient(135deg, #1890ff 0%, #40a9ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stats-content {
  flex: 1;
}

.stats-label {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}

.stats-value {
  font-size: 28px;
  font-weight: 700;
  color: #333;
}

/* 功能导航区域 */
.feature-section {
  margin-bottom: 32px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.feature-card {
  background-color: white;
  border-radius: 16px;
  padding: 32px 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(24, 144, 255, 0.2);
  border-color: #1890ff;
}

.feature-icon {
  font-size: 64px;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #1890ff 0%, #40a9ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.feature-title {
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
}

.feature-desc {
  font-size: 14px;
  color: #666;
  margin-bottom: 24px;
  line-height: 1.5;
}

.feature-link {
  display: inline-block;
  padding: 10px 24px;
  background: linear-gradient(135deg, #1890ff 0%, #40a9ff 100%);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.3);
}

.feature-link:hover {
  background: linear-gradient(135deg, #40a9ff 0%, #69c0ff 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(24, 144, 255, 0.4);
}

/* 公告和通知区域 */
.announcement-section {
  display: flex;
  gap: 24px;
}

.announcement-left,
.announcement-right {
  flex: 1;
}

.announcement-card,
.notification-card {
  background-color: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  height: 100%;
}

.card-title {
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 2px solid #f0f0f0;
}

/* 公告列表 */
.announcement-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 24px;
}

.announcement-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid #f5f5f5;
  transition: all 0.3s ease;
}

.announcement-item:hover {
  transform: translateX(8px);
}

.announcement-item .announcement-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  transition: color 0.3s ease;
}

.announcement-item:hover .announcement-title {
  color: #1890ff;
}

.announcement-date {
  font-size: 14px;
  color: #999;
}

/* 通知列表 */
.notification-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 24px;
}

.notification-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background-color: #f8f9fa;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.notification-item:hover {
  background-color: #e6f7ff;
  transform: translateX(8px);
}

.notification-icon {
  font-size: 32px;
  background: linear-gradient(135deg, #1890ff 0%, #40a9ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.notification-content {
  flex: 1;
}

.notification-title {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
}

.notification-time {
  font-size: 12px;
  color: #999;
}

/* 查看更多链接 */
.view-more {
  display: block;
  text-align: center;
  color: #1890ff;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.view-more:hover {
  background-color: #e6f7ff;
  transform: translateY(-2px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .container {
    width: 100%;
    padding: 0 16px;
  }

  .page-header .container {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .announcement-section {
    flex-direction: column;
  }
}
</style>