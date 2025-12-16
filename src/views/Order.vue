<template>
  <div class="order-container">

    <!-- 订单主内容区 -->
    <main class="order-main">
      <div class="container">


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
  background-color: #f5f7fa;
}

.container {
  width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 页面容器 */
.order-container {
  min-height: 100vh;
  background-color: #f5f7fa;
}


.page-title {
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  color: #333;
  padding: 20px 0;
}

/* 主内容区样式 */
.order-main {
  padding: 24px 0;
  min-height: 600px;
}

/* 面包屑导航 */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  font-size: 14px;
  color: #666;
}

.breadcrumb-link {
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb-link:hover {
  color: #1890ff;
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
  background-color: white;
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.tab-item {
  flex: 1;
  text-align: center;
  padding: 14px 12px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.tab-item:hover {
  color: #1890ff;
  background-color: #e6f7ff;
}

.tab-item.active {
  background: linear-gradient(135deg, #1890ff 0%, #40a9ff 100%);
  color: white;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.3);
}

/* 筛选区域 */
.order-filter {
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
}

.filter-row {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.filter-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-input, .select-input, .date-input {
  padding: 10px 16px;
  border: 2px solid #e8e8e8;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: all 0.3s ease;
  background-color: white;
}

.search-input:focus, .select-input:focus, .date-input:focus {
  border-color: #1890ff;
  box-shadow: 0 0 0 3px rgba(24, 144, 255, 0.1);
}

.search-input {
  width: 240px;
}

.select-input {
  width: 150px;
}

.date-input {
  width: 140px;
}

.filter-label {
  font-size: 14px;
  color: #666;
  font-weight: 500;
}

.date-separator {
  color: #999;
}

.more-btn, .search-btn, .export-btn {
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.more-btn {
  background-color: white;
  color: #666;
  border: 1px solid #e8e8e8;
}

.more-btn:hover {
  border-color: #1890ff;
  color: #1890ff;
  background-color: #e6f7ff;
  transform: translateY(-2px);
}

.search-btn {
  background: linear-gradient(135deg, #1890ff 0%, #40a9ff 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.3);
}

.search-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(24, 144, 255, 0.4);
}

.export-btn {
  background-color: #52c41a;
  color: white;
  box-shadow: 0 4px 12px rgba(82, 196, 26, 0.3);
}

.export-btn:hover {
  background-color: #47c307;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(82, 196, 26, 0.4);
}

/* 订单列表 */
.order-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.order-item {
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
}

.order-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.order-header-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid #f5f5f5;
}

.order-time, .order-number {
  font-size: 14px;
  color: #666;
  font-weight: 500;
}

.order-status {
  display: flex;
  align-items: center;
  gap: 10px;
}

.status-text {
  font-size: 14px;
  color: #1890ff;
  font-weight: bold;
}

.status-tag {
  font-size: 12px;
  color: #fff;
  background-color: #1890ff;
  padding: 4px 12px;
  border-radius: 12px;
  font-weight: 500;
}

.order-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.order-shop {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.shop-name {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.shop-tag {
  font-size: 12px;
  color: #999;
}

.contact-btn {
  padding: 6px 16px;
  font-size: 12px;
  color: #1890ff;
  border: 1px solid #1890ff;
  border-radius: 6px;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.contact-btn:hover {
  background-color: #e6f7ff;
  transform: translateY(-2px);
}

.order-products {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.product-item {
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #f0f5ff;
  border-radius: 8px;
  border: none;
  box-shadow: none;
  transition: all 0.3s ease;
}

.product-item:hover {
  background-color: #e6f7ff;
  transform: translateY(0);
}

.product-info {
  display: flex;
  align-items: center;
  gap: 20px;
}

.product-image {
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.product-name {
  font-size: 16px;
  color: #333;
  max-width: 450px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
}

.product-spec {
  font-size: 14px;
  color: #999;
}

.product-price {
  font-size: 16px;
  color: #1890ff;
  font-weight: bold;
}

.order-summary {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 20px;
  border-top: 2px solid #f5f5f5;
}

.summary-item {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  margin-right: 30px;
}

.summary-label {
  font-size: 14px;
  color: #999;
  font-weight: 500;
}

.summary-value {
  font-size: 16px;
  color: #333;
  font-weight: bold;
}

.order-actions {
  display: flex;
  gap: 12px;
}

.action-btn {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.primary-btn {
  background: linear-gradient(135deg, #1890ff 0%, #40a9ff 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.3);
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(24, 144, 255, 0.4);
}

.secondary-btn {
  background-color: white;
  color: #666;
  border: 1px solid #e8e8e8;
}

.secondary-btn:hover {
  color: #1890ff;
  border-color: #1890ff;
  background-color: #e6f7ff;
  transform: translateY(-2px);
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