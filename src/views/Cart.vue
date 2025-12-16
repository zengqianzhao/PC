<template>
  <div class="cart-container">
    <!-- 主内容区域 -->
    <div class="cart-main">
      <div class="container">
        <!-- 状态标签 -->
        <div class="status-tabs">
          <div class="status-tab">
            <span class="status-count">0</span>
            <span class="status-text">待付款</span>
          </div>
          <div class="status-tab">
            <span class="status-count">0</span>
            <span class="status-text">待发货</span>
          </div>
          <div class="status-tab">
            <span class="status-count">0</span>
            <span class="status-text">待收货</span>
          </div>
        </div>
        
        <!-- 主要操作按钮 -->
        <div class="main-buttons">
          <button class="primary-button">智能采购</button>
          <button class="primary-button">我的订单</button>
        </div>
        
        <!-- 功能入口区域 -->
        <div class="feature-grid">
          <div class="feature-item">
            <div class="feature-icon">
              <span class="feature-badge">领券</span>
              <span class="icon">💰</span>
            </div>
            <span class="feature-text">领券中心</span>
            <span class="feature-count">可用张</span>
          </div>
          <div class="feature-item">
            <div class="feature-icon">
              <span class="icon">📦</span>
            </div>
            <span class="feature-text">常购商品</span>
          </div>
          <div class="feature-item">
            <div class="feature-icon">
              <span class="icon">💬</span>
            </div>
            <span class="feature-text">客服消息</span>
          </div>
        </div>
        
        <!-- 优惠券和其他功能 -->
        <div class="feature-grid">
          <div class="feature-item">
            <div class="feature-icon">
              <span class="feature-count">¥</span>
            </div>
            <span class="feature-text">我的优惠</span>
          </div>
          <div class="feature-item">
            <div class="feature-icon">
              <span class="icon">👁️</span>
            </div>
            <span class="feature-text">浏览历史</span>
          </div>
          <div class="feature-item">
            <div class="feature-icon">
              <span class="icon">🔒</span>
            </div>
            <span class="feature-text">平安商户</span>
          </div>
        </div>
        
        <!-- 商家优惠券信息 -->
        <div class="merchant-coupon">
          <div class="coupon-info">
            <div class="coupon-title">123易购[安通医药]</div>
            <div class="coupon-price">¥80.00</div>
            <div class="coupon-condition">满5000元可用</div>
          </div>
          <button class="coupon-button">进店领券</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  data() {
    return {
      // 全选状态
      selectAll: true
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
     * 增加商品数量
     * @param {Object} item - 商品对象
     */
    increaseQuantity(item) {
      item.quantity++;
      this.saveCart();
    },
    
    /**
     * 减少商品数量
     * @param {Object} item - 商品对象
     */
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
        this.saveCart();
      }
    },
    
    /**
     * 从购物车中移除商品（调用全局方法）
     * @param {Object} item - 商品对象
     */
    removeItem(item) {
      this.$root.removeFromCart(item.id);
    },
    
    /**
     * 保存购物车数据（调用全局方法）
     */
    saveCart() {
      this.$root.updateCartTotalQuantity();
      this.$root.saveCartToLocalStorage();
    },
    
    /**
     * 跳转到结算页面
     */
    goToCheckout() {
      // 跳转到结算页面
      this.$router.push('/checkout');
    }
  },
  created() {
    // 页面加载时不需要额外加载，因为cartItems是计算属性，直接从全局获取
  },
  mounted() {
    // 可以添加一些页面初始化逻辑
  }
}
</script>

<style scoped>
/* 购物车页面样式 */
.cart-container {
  min-height: 100vh;
  background-color: #f8f8f8;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* 主内容区域 */
.cart-main {
  padding: 20px 0;
}

.cart-main .container {
  max-width: 400px;
  margin: 0 auto;
  padding: 0 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

/* 状态标签 */
.status-tabs {
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
}

.status-tab {
  text-align: center;
}

.status-count {
  display: block;
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
}

.status-text {
  font-size: 14px;
  color: #999;
}

/* 主要操作按钮 */
.main-buttons {
  display: flex;
  gap: 15px;
  padding: 20px 0;
}

.primary-button {
  flex: 1;
  height: 50px;
  border: none;
  background-color: #ff6b00;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary-button:hover {
  background-color: #ff8533;
  transform: translateY(-2px);
}

/* 功能入口网格 */
.feature-grid {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 30%;
}

.feature-icon {
  position: relative;
  width: 50px;
  height: 50px;
  background-color: #f5f5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}

.feature-icon .icon {
  font-size: 24px;
}

.feature-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #ff4d4f;
  color: white;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
}

.feature-text {
  font-size: 14px;
  color: #333;
  margin-bottom: 3px;
}

.feature-count {
  font-size: 12px;
  color: #ff4d4f;
  font-weight: 600;
}

/* 商家优惠券信息 */
.merchant-coupon {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin: 20px 0;
  background-color: #fff8e6;
  border-radius: 8px;
  border-left: 4px solid #ffc107;
}

.coupon-info {
  flex: 1;
}

.coupon-title {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
}

.coupon-price {
  font-size: 20px;
  font-weight: 600;
  color: #ff6b00;
  margin-bottom: 3px;
}

.coupon-condition {
  font-size: 12px;
  color: #999;
}

.coupon-button {
  background-color: #ff6b00;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.coupon-button:hover {
  background-color: #ff8533;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .cart-main .container {
    max-width: 100%;
    margin: 0 10px;
    border-radius: 8px;
  }
  
  .status-tabs {
    padding: 15px 0;
  }
  
  .status-count {
    font-size: 20px;
  }
  
  .main-buttons {
    padding: 15px 0;
  }
  
  .primary-button {
    height: 45px;
    font-size: 14px;
  }
  
  .feature-icon {
    width: 45px;
    height: 45px;
  }
  
  .feature-icon .icon {
    font-size: 20px;
  }
  
  .merchant-coupon {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
  
  .coupon-button {
    align-self: flex-end;
  }
}
</style>
</style>