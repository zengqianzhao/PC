<template>
  <div class="checkout-page">
    <!-- 页面标题 -->
    <div class="page-header">
      <div class="header-container">
        <div class="header-left">
          <button class="back-btn" @click="goBack">
            <span class="back-icon">←</span>
            <span>返回购物车</span>
          </button>
        </div>
        <div class="header-center">
          <h1>结算</h1>
        </div>
        <div class="header-right"></div>
      </div>
    </div>

    <!-- 主内容区域 -->
    <div class="checkout-main">
      <div class="container">
        <!-- 收货地址 -->
        <div class="address-section">
          <div class="section-header">
            <h2 class="section-title">收货地址</h2>
            <button class="edit-btn">管理地址</button>
          </div>
          <div class="address-card">
            <div class="address-info">
              <div class="contact-info">
                <span class="contact-name">张三</span>
                <span class="contact-phone">138****1234</span>
              </div>
              <div class="address-detail">
                <span class="address-tag">公司</span>
                <span>上海市浦东新区张江高科技园区博云路2号</span>
              </div>
            </div>
            <div class="address-arrow">▶</div>
          </div>
        </div>

        <!-- 配送方式 -->
        <div class="delivery-section">
          <div class="section-header">
            <h2 class="section-title">配送方式</h2>
          </div>
          <div class="delivery-options">
            <div class="delivery-option active">
              <div class="option-info">
                <div class="option-title">普通快递</div>
                <div class="option-desc">预计3-5天送达</div>
              </div>
              <div class="option-price">¥15.00</div>
            </div>
            <div class="delivery-option">
              <div class="option-info">
                <div class="option-title">加急快递</div>
                <div class="option-desc">预计1-2天送达</div>
              </div>
              <div class="option-price">¥30.00</div>
            </div>
          </div>
        </div>

        <!-- 商品清单 -->
        <div class="items-section">
          <div class="section-header">
            <h2 class="section-title">商品清单</h2>
            <span class="items-count">共{{ cartItems.length }}件商品</span>
          </div>
          <div class="items-list">
            <div v-for="item in cartItems" :key="item.id" class="cart-item">
              <div class="item-image">
                <img :src="item.image" :alt="item.name">
              </div>
              <div class="item-info">
                <div class="item-name">{{ item.name }}</div>
                <div class="item-spec">{{ item.spec }}</div>
                <div class="item-quantity">x{{ item.quantity }}</div>
              </div>
              <div class="item-price">¥{{ (item.price * item.quantity).toFixed(2) }}</div>
            </div>
          </div>
        </div>

        <!-- 优惠券 -->
        <div class="coupon-section">
          <div class="section-header">
            <h2 class="section-title">优惠券</h2>
            <div class="coupon-status">
              <span class="coupon-count">可用优惠券: 3张</span>
              <span class="coupon-arrow">▶</span>
            </div>
          </div>
        </div>

        <!-- 订单金额 -->
        <div class="payment-section">
          <div class="section-header">
            <h2 class="section-title">订单金额</h2>
          </div>
          <div class="payment-details">
            <div class="payment-row">
              <span class="payment-label">商品金额</span>
              <span class="payment-value">¥{{ cartTotal.toFixed(2) }}</span>
            </div>
            <div class="payment-row">
              <span class="payment-label">运费</span>
              <span class="payment-value">¥15.00</span>
            </div>
            <div class="payment-row">
              <span class="payment-label">优惠券</span>
              <span class="payment-value discount">-¥0.00</span>
            </div>
            <div class="payment-row total">
              <span class="payment-label">实付款</span>
              <span class="payment-value total-price">¥{{ (cartTotal + 15).toFixed(2) }}</span>
            </div>
          </div>
        </div>

        <!-- 支付方式 -->
        <div class="payment-method-section">
          <div class="section-header">
            <h2 class="section-title">支付方式</h2>
          </div>
          <div class="payment-methods">
            <div class="payment-method active">
              <div class="method-icon">💳</div>
              <div class="method-info">
                <div class="method-name">在线支付</div>
                <div class="method-desc">支持微信、支付宝、银联</div>
              </div>
              <div class="method-check">✓</div>
            </div>
            <div class="payment-method">
              <div class="method-icon">🏦</div>
              <div class="method-info">
                <div class="method-name">货到付款</div>
                <div class="method-desc">支持现金、POS机</div>
              </div>
              <div class="method-check"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部结算栏 -->
    <div class="checkout-footer">
      <div class="footer-left">
        <div class="total-amount">
          <span class="total-label">实付款: </span>
          <span class="total-price">¥{{ (cartTotal + 15).toFixed(2) }}</span>
        </div>
      </div>
      <div class="footer-right">
        <button class="pay-btn">提交订单</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutPage',
  data() {
    return {
      // 收货地址
      address: {
        id: 1,
        name: '张三',
        phone: '138****1234',
        province: '上海市',
        city: '上海市',
        district: '浦东新区',
        detail: '张江高科技园区博云路2号',
        tag: '公司'
      },
      // 配送方式
      deliveryMethod: 'standard',
      // 支付方式
      paymentMethod: 'online'
    }
  },
  computed: {
    /**
     * 从全局获取购物车商品列表
     */
    cartItems() {
      return this.$root.cartItems;
    },
    /**
     * 计算购物车商品总价
     */
    cartTotal() {
      return this.cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity);
      }, 0);
    }
  },
  methods: {
    /**
     * 返回购物车页面
     */
    goBack() {
      this.$router.back();
    },
    /**
     * 提交订单
     */
    submitOrder() {
      // 这里可以添加提交订单的逻辑
      alert('订单提交成功！');
    },
    /**
     * 处理配送方式选择
     */
    selectDeliveryMethod(method) {
      this.deliveryMethod = method;
    },
    /**
     * 处理支付方式选择
     */
    selectPaymentMethod(method) {
      this.paymentMethod = method;
    }
  },
  created() {
    // 页面加载时的初始化逻辑
  },
  mounted() {
    // 页面挂载后的逻辑
  }
}
</script>

<style scoped>
/* 结算页面样式 */
.checkout-page {
  min-height: 100vh;
  background-color: #f5f7fa;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

/* 页面头部 */
.page-header {
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.back-btn:hover {
  background-color: #f5f7fa;
}

.back-icon {
  font-size: 20px;
}

.page-header h1 {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  color: #1a1a1a;
}

/* 主内容区域 */
.checkout-main {
  padding: 20px 0;
}

.checkout-main .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 通用区块样式 */
.address-section,
.delivery-section,
.items-section,
.coupon-section,
.payment-section,
.payment-method-section {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
  overflow: hidden;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #e8eaed;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #1a1a1a;
}

.edit-btn {
  background: none;
  border: none;
  font-size: 14px;
  color: #1976d2;
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.edit-btn:hover {
  background-color: #e3f2fd;
}

/* 地址卡片 */
.address-card {
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s ease;
}

.address-card:hover {
  background-color: #f5f7fa;
}

.contact-info {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
}

.address-detail {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}

.address-tag {
  background-color: #e3f2fd;
  color: #1976d2;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.address-arrow {
  font-size: 16px;
  color: #999;
}

/* 配送方式 */
.delivery-options {
  padding: 16px 24px;
}

.delivery-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin-bottom: 12px;
  border: 2px solid #e8eaed;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.delivery-option:last-child {
  margin-bottom: 0;
}

.delivery-option.active {
  border-color: #1976d2;
  background-color: #e3f2fd;
}

.delivery-option:hover {
  border-color: #90caf9;
  background-color: #f5f9ff;
}

.option-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.option-title {
  font-size: 16px;
  font-weight: 500;
}

.option-desc {
  font-size: 14px;
  color: #666;
}

.option-price {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

/* 商品清单 */
.items-count {
  font-size: 14px;
  color: #666;
}

.items-list {
  padding: 0 24px 24px;
}

.cart-item {
  display: flex;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #f0f0f0;
}

.cart-item:last-child {
  border-bottom: none;
}

.item-image {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 16px;
  border: 1px solid #e8eaed;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.item-name {
  font-size: 16px;
  font-weight: 500;
  color: #1a1a1a;
  line-height: 1.4;
}

.item-spec {
  font-size: 14px;
  color: #666;
}

.item-quantity {
  font-size: 14px;
  color: #999;
  align-self: flex-end;
}

.item-price {
  font-size: 16px;
  font-weight: 600;
  color: #1976d2;
  margin-left: 16px;
}

/* 优惠券 */
.coupon-status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.coupon-status:hover {
  background-color: #f5f7fa;
}

.coupon-arrow {
  font-size: 12px;
  color: #999;
}

.coupon-count {
  color: #1976d2;
}

/* 订单金额 */
.payment-details {
  padding: 20px 24px;
}

.payment-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  font-size: 14px;
}

.payment-row.total {
  padding-top: 20px;
  margin-top: 12px;
  border-top: 1px solid #e8eaed;
  font-size: 16px;
  font-weight: 500;
}

.payment-label {
  color: #666;
}

.payment-value {
  color: #333;
}

.payment-value.discount {
  color: #1976d2;
}

.total-price {
  font-size: 20px;
  font-weight: 600;
  color: #1976d2;
}

/* 支付方式 */
.payment-methods {
  padding: 16px 24px;
}

.payment-method {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin-bottom: 12px;
  border: 2px solid #e8eaed;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.payment-method:last-child {
  margin-bottom: 0;
}

.payment-method.active {
  border-color: #1976d2;
  background-color: #e3f2fd;
}

.payment-method:hover {
  border-color: #90caf9;
  background-color: #f5f9ff;
}

.method-info {
  flex: 1;
  margin-left: 16px;
}

.method-name {
  font-size: 16px;
  font-weight: 500;
}

.method-desc {
  font-size: 14px;
  color: #666;
  margin-top: 4px;
}

.method-icon {
  font-size: 24px;
}

.method-check {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #1976d2;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
}

/* 底部结算栏 */
.checkout-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.08);
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.total-amount {
  display: flex;
  align-items: center;
  gap: 8px;
}

.total-label {
  font-size: 14px;
  color: #666;
}

.pay-btn {
  background-color: #1976d2;
  color: white;
  border: none;
  padding: 12px 40px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.3);
}

.pay-btn:hover {
  background-color: #1565c0;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(25, 118, 210, 0.4);
}

.pay-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.3);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header-container {
    padding: 12px 16px;
  }

  .checkout-main .container {
    padding: 0 16px;
  }

  .section-header {
    padding: 16px 20px;
  }

  .section-title {
    font-size: 16px;
  }

  .address-card,
  .delivery-options,
  .items-list,
  .payment-details,
  .payment-methods {
    padding: 16px 20px;
  }

  .contact-info {
    font-size: 14px;
  }

  .address-detail {
    font-size: 13px;
  }

  .item-image {
    width: 60px;
    height: 60px;
  }

  .item-name {
    font-size: 14px;
  }

  .item-spec {
    font-size: 12px;
  }

  .total-price {
    font-size: 18px;
  }

  .checkout-footer {
    padding: 12px 16px;
  }

  .pay-btn {
    padding: 10px 32px;
    font-size: 14px;
  }
}
</style>