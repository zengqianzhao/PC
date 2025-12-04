<template>
  <div class="order-container">


    <!-- 订单主内容区 -->
    <main class="order-main">
      <div class="container">
        <!-- 面包屑导航 -->
        <div class="breadcrumb">
          <a href="/" class="breadcrumb-link">商城首页</a>
          <span class="breadcrumb-separator">></span>
          <span class="breadcrumb-current">我的订单</span>
        </div>

        <!-- 订单状态标签 -->
        <div class="order-tabs">
          <div class="tab-item active">全部订单</div>
          <div class="tab-item">待付款</div>
          <div class="tab-item">待发货</div>
          <div class="tab-item">待收货</div>
          <div class="tab-item">待评价</div>
          <div class="tab-item">发票中心</div>
          <div class="tab-item">退款/售后</div>
          <div class="tab-item">已取消</div>
        </div>

        <!-- 订单筛选区域 -->
        <div class="order-filter">
          <div class="filter-row">
            <div class="filter-item">
              <input type="text" placeholder="输入药品名称或订单编号搜索" class="search-input">
            </div>
            <div class="filter-item">
              <select class="select-input">
                <option>全部订单类型</option>
                <option>普通订单</option>
                <option>集采订单</option>
              </select>
            </div>
            <div class="filter-item">
              <select class="select-input">
                <option>全部商家</option>
                <option>商家1</option>
                <option>商家2</option>
              </select>
            </div>
            <div class="filter-item">
              <select class="select-input">
                <option>全部来源</option>
                <option>PC端</option>
                <option>移动端</option>
              </select>
            </div>
            <div class="filter-item">
              <span class="filter-label">下单时间：</span>
              <input type="date" class="date-input">
              <span class="date-separator">至</span>
              <input type="date" class="date-input">
            </div>
            <div class="filter-item">
              <button class="more-btn">更多</button>
              <button class="search-btn">搜索</button>
              <button class="export-btn">将筛选结果批量下单</button>
            </div>
          </div>
        </div>

        <!-- 订单列表 -->
        <div class="order-list">
          <!-- 订单项1 -->
          <div class="order-item">
            <div class="order-header-info">
              <div class="order-time">11-27 13:32</div>
              <div class="order-number">订单号：212517123171237825</div>
              <div class="order-status">
                <span class="status-text">交易关闭</span>
                <span class="status-tag">已取消</span>
              </div>
            </div>
            <div class="order-content">
              <div class="order-shop">
                <span class="shop-name">上海兴德医药商店</span>
                <span class="shop-tag">（协议药品配送商）</span>
              </div>
              <div class="order-products">
                <div class="product-item">
                  <div class="product-info">
                    <div class="product-image">
                      <img src="https://via.placeholder.com/100" alt="药品图片">
                    </div>
                    <div class="product-details">
                      <div class="product-name">30愈创甘油醚口服溶液愈创甘油醚40mg 24片</div>
                      <div class="product-spec">30盒装</div>
                      <div class="product-price">¥6.07 /盒</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="order-summary">
                <div class="summary-item">
                  <span class="summary-label">应付金额(元)</span>
                  <span class="summary-value">182.10</span>
                </div>
                <div class="summary-item">
                  <span class="summary-label">优惠金额(元)</span>
                  <span class="summary-value">0.00</span>
                </div>
                <div class="summary-item">
                  <span class="summary-label">实付金额(元)</span>
                  <span class="summary-value">182.10</span>
                </div>
                <div class="order-actions">
                  <button class="action-btn primary-btn">付款</button>
                  <button class="action-btn secondary-btn">查看详情</button>
                </div>
              </div>
            </div>
          </div>

          <!-- 订单项2 -->
          <div class="order-item">
            <div class="order-header-info">
              <div class="order-time">06-17 16:11</div>
              <div class="order-number">订单号：21295171235235501</div>
              <div class="order-status">
                <span class="status-text">商家已配送</span>
              </div>
            </div>
            <div class="order-content">
              <div class="order-shop">
                <span class="shop-name">上海兴德医药商店</span>
                <button class="contact-btn">联系商家</button>
              </div>
              <div class="order-products">
                <div class="product-item">
                  <div class="product-info">
                    <div class="product-image">
                      <img src="https://via.placeholder.com/100" alt="药品图片">
                    </div>
                    <div class="product-details">
                      <div class="product-name">氨咖黄敏胶囊</div>
                      <div class="product-spec">4板装</div>
                      <div class="product-price">¥7.02 /盒</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="order-summary">
                <div class="summary-item">
                  <span class="summary-label">实付金额(元)</span>
                  <span class="summary-value">7.02</span>
                </div>
                <div class="order-actions">
                  <button class="action-btn primary-btn">付款¥7.02</button>
                  <button class="action-btn secondary-btn">评价</button>
                  <button class="action-btn secondary-btn">查看物流</button>
                  <button class="action-btn secondary-btn">下载药品商资质</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>


  </div>
</template>

<script>
export default {
  name: 'MyOrder',
  data() {
    return {
      // 订单数据可以在这里定义
      orders: []
    }
  },
  methods: {
    // 获取订单列表
    fetchOrders() {
      // 这里可以添加获取订单数据的逻辑
      console.log('获取订单列表');
    }
  },
  mounted() {
    // 组件挂载后获取订单数据
    this.fetchOrders();
  }
}
</script>

<style scoped>
/* 全局样式重置和基础设置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Microsoft YaHei', Arial, sans-serif;
  color: #333;
  background-color: #f5f5f5;
}

.container {
  width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}



/* 主内容区样式 */
.order-main {
  padding: 20px 0;
  min-height: 600px;
}

/* 面包屑导航 */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #666;
}

.breadcrumb-link {
  color: #666;
  text-decoration: none;
}

.breadcrumb-link:hover {
  color: #ff6b35;
}

.breadcrumb-separator {
  color: #999;
}

.breadcrumb-current {
  color: #333;
  font-weight: bold;
}

/* 订单标签 */
.order-tabs {
  display: flex;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.tab-item {
  flex: 1;
  text-align: center;
  padding: 12px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.tab-item:hover {
  color: #ff6b35;
}

.tab-item.active {
  background-color: #ff6b35;
  color: #fff;
  font-weight: bold;
}

/* 筛选区域 */
.order-filter {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.filter-row {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.filter-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.search-input, .select-input, .date-input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease;
}

.search-input:focus, .select-input:focus, .date-input:focus {
  border-color: #ff6b35;
}

.search-input {
  width: 200px;
}

.select-input {
  width: 120px;
}

.date-input {
  width: 140px;
}

.filter-label {
  font-size: 14px;
  color: #666;
}

.date-separator {
  color: #999;
}

.more-btn, .search-btn, .export-btn {
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.more-btn {
  background-color: #fff;
  color: #666;
}

.more-btn:hover {
  border-color: #ff6b35;
  color: #ff6b35;
}

.search-btn {
  background-color: #ff6b35;
  color: #fff;
  border-color: #ff6b35;
}

.search-btn:hover {
  background-color: #ff5722;
}

.export-btn {
  background-color: #4caf50;
  color: #fff;
  border-color: #4caf50;
}

.export-btn:hover {
  background-color: #45a049;
}

/* 订单列表 */
.order-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.order-item {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;
}

.order-item:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.order-header-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f0f0f0;
}

.order-time, .order-number {
  font-size: 14px;
  color: #666;
}

.order-status {
  display: flex;
  align-items: center;
  gap: 10px;
}

.status-text {
  font-size: 14px;
  color: #ff6b35;
  font-weight: bold;
}

.status-tag {
  font-size: 12px;
  color: #fff;
  background-color: #999;
  padding: 2px 8px;
  border-radius: 10px;
}

.order-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.order-shop {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.shop-name {
  font-size: 14px;
  font-weight: bold;
  color: #333;
}

.shop-tag {
  font-size: 12px;
  color: #999;
}

.contact-btn {
  padding: 4px 12px;
  font-size: 12px;
  color: #ff6b35;
  border: 1px solid #ff6b35;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.contact-btn:hover {
  background-color: #fff3e0;
}

.order-products {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.product-item {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #fafafa;
  border-radius: 6px;
}

.product-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.product-image {
  width: 80px;
  height: 80px;
  background-color: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-details {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.product-name {
  font-size: 14px;
  color: #333;
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.product-spec {
  font-size: 12px;
  color: #999;
}

.product-price {
  font-size: 14px;
  color: #ff6b35;
  font-weight: bold;
}

.order-summary {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 15px;
  border-top: 1px solid #f0f0f0;
}

.summary-item {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
  margin-right: 30px;
}

.summary-label {
  font-size: 12px;
  color: #999;
}

.summary-value {
  font-size: 14px;
  color: #333;
  font-weight: bold;
}

.order-actions {
  display: flex;
  gap: 10px;
}

.action-btn {
  padding: 8px 16px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary-btn {
  background-color: #ff6b35;
  color: #fff;
  border-color: #ff6b35;
}

.primary-btn:hover {
  background-color: #ff5722;
}

.secondary-btn {
  background-color: #fff;
  color: #666;
}

.secondary-btn:hover {
  color: #ff6b35;
  border-color: #ff6b35;
}

/* 页脚样式 - 高端大气版本 */
.order-footer {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: #ecf0f1;
  padding: 40px 0 20px;
  margin-top: 60px;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.1);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  font-size: 13px;
  line-height: 1.8;
}

.footer-links {
  margin-bottom: 15px;
  padding: 0 20px;
}

.footer-link {
  color: #bdc3c7;
  text-decoration: none;
  margin: 0 10px;
  position: relative;
  transition: all 0.3s ease;
  font-weight: 400;
}

.footer-link:hover {
  color: #ffffff;
  text-decoration: none;
  transform: translateY(-2px);
}

.footer-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 50%;
  background-color: #ffffff;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.footer-link:hover::after {
  width: 100%;
}

.copyright {
  color: #95a5a6;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 12px;
}
</style>