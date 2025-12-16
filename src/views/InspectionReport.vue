<template>
  <div class="inspection-report-container">

    <!-- 提示信息 -->
    <div class="info-banner">
      <i class="info-icon">💡</i>
      <span>仅显示易和中药两家类已发货的订单</span>
    </div>

    <!-- 搜索筛选区域 -->
    <div class="search-filter">
      <div class="filter-row">
        <div class="filter-item">
          <div class="input-wrapper">
            <i class="search-icon">🔍</i>
            <input type="text" placeholder="输入商品名称" class="search-input">
          </div>
        </div>
        <div class="filter-item">
          <div class="select-wrapper">
            <select class="select-input">
              <option>全部商家</option>
              <option>易和药店</option>
              <option>中药药店</option>
            </select>
            <i class="select-icon">▼</i>
          </div>
        </div>
        <div class="filter-item">
          <div class="select-wrapper">
            <select class="select-input">
              <option>全部药店</option>
              <option>药便利达聪店</option>
              <option>药易购好德店</option>
            </select>
            <i class="select-icon">▼</i>
          </div>
        </div>
        <div class="filter-item">
          <div class="date-range">
            <input type="date" class="date-input">
            <span class="date-separator">-</span>
            <input type="date" class="date-input">
          </div>
        </div>
        <div class="filter-item">
          <button class="search-btn">
            <i class="search-btn-icon">🔍</i>
            <span>搜索</span>
          </button>
        </div>
      </div>
    </div>

    <!-- 状态标签 -->
    <div class="status-tabs">
      <div class="tab-item active">全部</div>
      <div class="tab-item">未上传</div>
      <div class="tab-item">申请中</div>
      <div class="tab-item">申请后上传</div>
      <div class="tab-item">已上传</div>
    </div>

    <!-- 订单列表 -->
    <div class="order-list">
      <div class="order-table-container">
        <table class="order-table">
          <thead>
            <tr>
              <th>下单时间</th>
              <th>订单号</th>
              <th>商品信息</th>
              <th>配送商</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr class="order-item" v-for="(order, index) in orders" :key="index">
              <td class="order-time">{{ order.orderTime }}</td>
              <td class="order-number">{{ order.orderNumber }}</td>
              <td class="product-cell">
                <div class="product-info">
                  <img :src="order.productImage" :alt="order.productName" class="product-image">
                  <div class="product-details">
                    <div class="product-name">{{ order.productName }}</div>
                    <div class="product-detail">{{ order.productDetail }}</div>
                  </div>
                </div>
              </td>
              <td class="distributor-cell">
                <div class="distributor-info">
                  <div class="distributor-name">{{ order.distributorName }}</div>
                  <div class="company-name">{{ order.companyName }}</div>
                </div>
              </td>
              <td class="action-cell">
                <div class="action-buttons">
                  <button class="apply-button">
                    <i class="apply-icon">📄</i>
                    <span>申请检验报告</span>
                  </button>
                  <button class="contact-button">
                    <i class="contact-icon">💬</i>
                    <span>联系商家</span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InspectionReport',
  data() {
    return {
      // 模拟订单数据
      orders: [
        {
          orderTime: '04-07 02:30',
          orderNumber: '2125040763533253',
          productName: '707 槐角丸 1g',
          productDetail: '1#商品 共5件',
          productImage: 'https://via.placeholder.com/80x120/1890ff/ffffff?text=药品1',
          distributorName: '药便利达聪店',
          companyName: '企业名称: 衡阳市惠恩医药有限公司'
        },
        {
          orderTime: '03-22 08:58',
          orderNumber: '212303225641088',
          productName: '20盒血塞通分散片 注射用硫酸五肽10mg*1支',
          productDetail: '1#商品 共40件',
          productImage: 'https://via.placeholder.com/80x120/096dd9/ffffff?text=药品2',
          distributorName: '药易购好德店',
          companyName: '企业名称: 乾能医药（重庆）连锁有限公司'
        }
      ]
    }
  },
  methods: {
    // 页面方法
  }
}
</script>

<style scoped>
/* 全局样式 */
.inspection-report-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  background-color: #f8f9fa;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}



/* 提示信息 */
.info-banner {
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border: 1px solid #bbdefb;
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  animation: fadeInUp 0.6s ease;
}

.info-icon {
  margin-right: 12px;
  font-size: 20px;
  color: #1890ff;
}

.info-banner span {
  color: #0d47a1;
  font-size: 14px;
  font-weight: 500;
}

/* 搜索筛选区域 */
.search-filter {
  background-color: white;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  border: 1px solid #f8f9fa;
  animation: fadeInUp 0.6s ease 0.1s both;
}

.filter-row {
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
}

.filter-item {
  display: flex;
  align-items: center;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.input-wrapper:focus-within {
  background-color: white;
  box-shadow: 0 0 0 3px rgba(24, 144, 255, 0.1);
}

.search-icon {
  position: absolute;
  left: 16px;
  color: #adb5bd;
  font-size: 16px;
  z-index: 1;
}

.search-input {
  padding: 12px 16px 12px 48px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 14px;
  width: 240px;
  background-color: transparent;
  transition: all 0.3s ease;
  box-sizing: border-box;
  outline: none;
}

.search-input:focus {
  border-color: #1890ff;
  background-color: white;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.1);
}

.search-input::placeholder {
  color: #adb5bd;
}

.select-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.select-wrapper:focus-within {
  background-color: white;
  box-shadow: 0 0 0 3px rgba(24, 144, 255, 0.1);
}

.select-input {
  padding: 12px 40px 12px 16px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 14px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  box-sizing: border-box;
  outline: none;
  appearance: none;
  min-width: 160px;
}

.select-input:focus {
  border-color: #1890ff;
  background-color: white;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.1);
}

.select-icon {
  position: absolute;
  right: 16px;
  color: #adb5bd;
  font-size: 12px;
  pointer-events: none;
  transition: transform 0.3s ease;
}

.select-wrapper:focus-within .select-icon {
  transform: rotate(180deg);
}

.date-range {
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 4px;
  transition: all 0.3s ease;
}

.date-range:focus-within {
  background-color: white;
  box-shadow: 0 0 0 3px rgba(24, 144, 255, 0.1);
}

.date-input {
  padding: 8px 12px;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.3s ease;
  box-sizing: border-box;
  background-color: transparent;
  outline: none;
  min-width: 140px;
}

.date-input:focus {
  border-color: #1890ff;
  background-color: white;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.1);
}

.date-separator {
  color: #adb5bd;
  font-size: 14px;
  font-weight: 500;
}

.search-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.search-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(24, 144, 255, 0.4);
}

.search-btn-icon {
  font-size: 16px;
}

/* 状态标签 */
.status-tabs {
  display: flex;
  gap: 8px;
  background-color: white;
  border-radius: 16px;
  padding: 8px;
  margin-bottom: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  border: 1px solid #f8f9fa;
  animation: fadeInUp 0.6s ease 0.2s both;
}

.tab-item {
  padding: 12px 28px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: #6c757d;
  background-color: #f8f9fa;
  border: 1px solid transparent;
  letter-spacing: 0.3px;
}

.tab-item:hover {
  color: #495057;
  background-color: #e9ecef;
  transform: translateY(-1px);
}

.tab-item.active {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.4);
  border-color: #096dd9;
  transform: translateY(-1px);
}

/* 订单列表 */
.order-list {
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  border: 1px solid #f8f9fa;
  animation: fadeInUp 0.6s ease 0.3s both;
}

.order-table-container {
  overflow-x: auto;
}

.order-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.order-table th {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: white;
  padding: 20px;
  text-align: left;
  font-size: 14px;
  font-weight: 700;
  border-bottom: 2px solid #096dd9;
  letter-spacing: 0.3px;
  text-transform: uppercase;
}

.order-item {
  transition: all 0.3s ease;
  border-bottom: 1px solid #f8f9fa;
}

.order-item:last-child {
  border-bottom: none;
}

.order-item:hover {
  background-color: rgba(24, 144, 255, 0.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transform: translateX(4px);
}

.order-item td {
  padding: 24px 20px;
  vertical-align: middle;
  color: #495057;
}

/* 商品信息 */
.product-cell {
  min-width: 300px;
}

.product-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.product-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.product-name {
  font-weight: 600;
  color: #2c3e50;
  font-size: 15px;
  line-height: 1.4;
}

.product-detail {
  color: #6c757d;
  font-size: 13px;
  line-height: 1.4;
}

.product-image {
  width: 80px;
  height: 120px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  object-fit: contain;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.product-image:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 配送商信息 */
.distributor-cell {
  min-width: 200px;
}

.distributor-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.distributor-name {
  font-weight: 600;
  color: #2c3e50;
  font-size: 15px;
}

.company-name {
  color: #6c757d;
  font-size: 13px;
  line-height: 1.4;
}

/* 操作按钮 */
.action-cell {
  min-width: 220px;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.apply-button, .contact-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  width: 100%;
}

.apply-button {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: white;
}

.apply-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(24, 144, 255, 0.4);
}

.contact-button {
  background-color: #f8f9fa;
  color: #6c757d;
  border: 1px solid #e9ecef;
}

.contact-button:hover {
  background-color: #e9ecef;
  color: #495057;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.apply-icon, .contact-icon {
  font-size: 14px;
}

/* 动画效果 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .filter-row {
    gap: 16px;
  }
  
  .search-input {
    width: 200px;
  }
  
  .select-input {
    min-width: 140px;
  }
}

@media (max-width: 992px) {
  .filter-row {
    flex-direction: column;
    align-items: stretch;
  }
  
  .filter-item {
    margin-bottom: 8px;
  }
  
  .search-input, .select-input {
    width: 100%;
  }
  
  .date-range {
    justify-content: space-between;
  }
  
  .date-input {
    flex: 1;
  }
}
</style>