<template>
  <div class="loan-container">

    <!-- 主要内容区域 -->
    <main class="loan-main">
      <div class="container">
        <!-- 页面标题和筛选区域 -->
        <div class="page-header">

          <div class="date-filters">
            <button class="filter-btn">最近7天</button>
            <button class="filter-btn">本月</button>
            <button class="filter-btn">上月</button>
            <button class="filter-btn">最近30天</button>
            <div class="custom-date">
              <input type="date" class="date-input">
              <span class="date-separator">至</span>
              <input type="date" class="date-input">
            </div>
            <select class="store-select">
              <option>全部药店</option>
              <option>药店1</option>
              <option>药店2</option>
            </select>
            <button class="download-btn">下载对账单</button>
          </div>
        </div>

        <!-- 统计卡片区域 -->
        <div class="stats-section">
          <div class="stats-grid">
            <div class="stats-card">
              <div class="stats-label">总采购金额</div>
              <div class="stats-value">¥0.00</div>
              <div class="stats-icon">💰</div>
            </div>
            <div class="stats-card">
              <div class="stats-label">总发货金额</div>
              <div class="stats-value">¥0.00</div>
              <div class="stats-icon">📦</div>
            </div>
            <div class="stats-card">
              <div class="stats-label">第三方支付</div>
              <div class="stats-value">¥0.00</div>
              <div class="stats-icon">💳</div>
            </div>
            <div class="stats-card">
              <div class="stats-label">余额支付</div>
              <div class="stats-value">¥0.00</div>
              <div class="stats-icon">💵</div>
            </div>
            <div class="stats-card">
              <div class="stats-label">月结支付</div>
              <div class="stats-value">¥0.00</div>
              <div class="stats-icon">📊</div>
            </div>
          </div>
          <div class="additional-stats">
            <div class="additional-stat-item">
              <span class="stat-label">实际退款金额：</span>
              <span class="stat-value">¥0.00</span>
            </div>
            <div class="additional-stat-item">
              <span class="stat-label">实际优惠金额：</span>
              <span class="stat-value">¥0.00</span>
            </div>
            <div class="additional-stat-item">
              <span class="stat-label">实际派送金额：</span>
              <span class="stat-value">¥0.00</span>
            </div>
            <div class="additional-stat-item">
              <span class="stat-label">送账中金额：</span>
              <span class="stat-value">¥0.00</span>
            </div>
          </div>
        </div>

        <!-- 标签页切换 -->
        <div class="tabs-section">
          <div class="tabs-container">
            <div class="tab-item active">采购应结明细</div>
            <div class="tab-item">实际退款明细</div>
            <div class="tab-item">退款中金额明细</div>
            <div class="search-section">
              <div class="search-wrapper">
                <input type="text" placeholder="输入商品名称/生产厂家/订单号搜索" class="search-input">
                <button class="search-btn">搜索</button>
              </div>
              <div class="supplier-select">
                <select class="select-input">
                  <option>选择供应商</option>
                  <option>供应商1</option>
                  <option>供应商2</option>
                </select>
              </div>
            </div>
            
          </div>
        </div>

        <!-- 数据表格区域 -->
        <div class="table-section">
          <div class="table-container">
            <table class="loan-table">
              <thead>
                <tr>
                  <th>付款时间</th>
                  <th>订单编号</th>
                  <th>单价(¥)</th>
                  <th>数量</th>
                  <th>应付(¥)</th>
                  <th>优惠(¥)</th>
                  <th>实付(¥)</th>
                  <th>已退款数量</th>
                  <th>实际退款金额(¥)</th>
                  <th>配送商</th>
                </tr>
              </thead>
              <tbody>
                <tr class="no-data-row">
                  <td colspan="10">没有符合搜索条件的数据，请重新搜索~</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- 分页区域 -->
        <div class="pagination-section">
          <div class="pagination-info">
            <span>共显示20条，每页显示</span>
            <select class="page-size-select">
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
            <span>条</span>
          </div>
        </div>
      </div>
    </main>

    <!-- 悬浮客服按钮 -->
    <div class="customer-service">
      <div class="service-icon">💬</div>
      <div class="service-text">官方客服</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoanPage',
  data() {
    return {
      // 页面数据
    }
  },
  methods: {
    // 页面方法
  },
  mounted() {
    // 页面加载完成后执行
  }
}
</script>

<style scoped>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 容器样式 */
.loan-container {
  min-height: 100vh;
  background-color: #f5f5f5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.page-title {
  color: #333;
  padding: 20px 0;
}



/* 主要内容区域 */
.loan-main {
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
}

/* 页面标题和筛选区域 */
.page-header {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
}



.date-filters {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 8px 16px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  background-color: #1890ff;
  color: #fff;
  border-color: #1890ff;
}

.filter-btn.active {
  background-color: #1890ff;
  color: #fff;
  border-color: #1890ff;
}

.custom-date {
  display: flex;
  align-items: center;
  gap: 10px;
}

.date-input {
  height: 32px;
  padding: 0 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.date-separator {
  color: #999;
}

.store-select {
  height: 32px;
  padding: 0 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  min-width: 120px;
}

.download-btn {
  padding: 8px 16px;
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3);
}

.download-btn:hover {
  background: linear-gradient(135deg, #096dd9 0%, #0050b3 100%);
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.4);
}

/* 统计卡片区域 */
.stats-section {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.stats-card {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.3);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: fadeInUp 0.6s ease;
}

.stats-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.stats-label {
  font-size: 14px;
  opacity: 0.9;
  margin-bottom: 8px;
}

.stats-value {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 12px;
}

.stats-icon {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 30px;
  opacity: 0.2;
}

.additional-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
}

.additional-stat-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stat-label {
  color: #666;
  font-size: 14px;
}

.stat-value {
  color: #2196f3;
  font-weight: 600;
  font-size: 14px;
}

/* 标签页切换 */
.tabs-section {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.tabs-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 10px;
  flex-wrap: wrap;
  gap: 20px;
}

.tab-item {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  color: #666;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-right: 20px;
  transition: all 0.3s ease;
}

.tab-item:hover {
  color: #2196f3;
}

.tab-item.active {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: white;
  border-bottom-color: transparent;
  border-radius: 8px;
  padding: 8px 16px;
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3);
}

.search-section {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: 10px;
  border-radius: 8px;
  background-color: #f8f8f8;
}

.search-wrapper {
  display: flex;
  align-items: center;
  max-width: 300px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.supplier-select {
  min-width: 200px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.select-input {
  width: 100%;
  height: 40px;
  padding: 0 16px;
  border: 1px solid #2196f3;
  border-radius: 6px;
  font-size: 14px;
  line-height: 40px;
  box-sizing: border-box;
  background-color: #fff;
  transition: all 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 12px;
}

.select-input:hover {
  border-color: #1976d2;
  box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.1);
}

.select-input:focus {
  border-color: #2196f3;
  box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.2);
  outline: none;
}

.search-input {
  padding: 0 16px;
  border: 1px solid #2196f3;
  border-right: none;
  border-radius: 6px 0 0 6px;
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  flex: 1;
  min-width: 200px;
  outline: none;
  transition: all 0.3s ease;
  background-color: #fff;
  box-sizing: border-box;
}

.search-input:focus {
  border-color: #2196f3;
  background-color: #fff;
  box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.1) inset;
}

.search-btn {
  height: 40px;
  padding: 0 24px;
  background-color: #1890ff;
  color: #fff;
  border: none;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.2);
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
}

.search-btn:hover {
  background: linear-gradient(135deg, #096dd9 0%, #0050b3 100%);
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.3);
}

.search-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(24, 144, 255, 0.2);
}

/* 数据表格区域 */
.table-section {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  margin-bottom: 20px;
}

.table-container {
  overflow-x: auto;
}

.loan-table {
  width: 100%;
  border-collapse: collapse;
}

.loan-table th,
.loan-table td {
  padding: 16px 12px;
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
  font-size: 14px;
}

.loan-table th {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: white;
  font-weight: 600;
  white-space: nowrap;
}

.loan-table td {
  color: #666;
}

.loan-table tbody tr:hover {
  background-color: rgba(24, 144, 255, 0.05);
  transition: background-color 0.3s ease;
}

.no-data-row td {
  text-align: center;
  padding: 60px 20px;
  color: #999;
  font-size: 14px;
}

/* 分页区域 */
.pagination-section {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.pagination-info {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #666;
  font-size: 14px;
}

.page-size-select {
  height: 32px;
  padding: 0 8px;
  border: 1px solid #1890ff;
  border-radius: 4px;
  font-size: 14px;
  transition: all 0.3s ease;
}

.page-size-select:hover {
  border-color: #096dd9;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.1);
}

.page-size-select:focus {
  outline: none;
  border-color: #096dd9;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}

/* 悬浮客服按钮 */
.customer-service {
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: #1890ff;
  color: #fff;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 1000;
}

.customer-service:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(24, 144, 255, 0.5);
}

.service-icon {
  font-size: 20px;
}

.service-text {
  font-size: 10px;
  font-weight: 500;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-header {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }

  .date-filters {
    width: 100%;
    justify-content: flex-start;
  }

  .nav-container {
    overflow-x: auto;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .search-section {
    flex-direction: column;
    align-items: stretch;
  }

  .search-wrapper {
    max-width: 100%;
  }

  .pagination-section {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .additional-stats {
    flex-direction: column;
    gap: 15px;
  }
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
</style>