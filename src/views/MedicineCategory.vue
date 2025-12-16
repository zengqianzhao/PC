<template>
  <div class="medicine-category-container">
    <!-- 购物车提示 -->
    <div class="cart-notification" v-if="cartNotification.show">
      {{ cartNotification.message }}
    </div>
    <!-- 页面标题 -->
    <div class="page-header">
      <h1>感昌用药</h1>
    </div>

    <!-- 主导航栏 -->
    <div class="main-nav">
      <div class="nav-item active">感冒药</div>
      <div class="nav-item">消化用药</div>
      <div class="nav-item">五官用药</div>
      <div class="nav-item">心血管药</div>
      <div class="nav-item">糖尿病药</div>
      <div class="nav-item">妇科用药</div>
      <div class="nav-item">皮肤用药</div>
      <div class="nav-item">儿科用药</div>
      <div class="nav-item">泌尿系统</div>
      <div class="nav-item">抗感染药</div>
      <div class="nav-item">骨科用药</div>
      <div class="nav-item">呼吸系统</div>
      <div class="nav-item">内分泌药</div>
      <div class="nav-item">神经系统</div>
      <div class="nav-item">血液系统</div>
      <div class="nav-item">肿瘤用药</div>
      <div class="nav-item">维生素与矿物质</div>
      <div class="nav-item">营养补充</div>
      <div class="nav-item">药品其它</div>
    </div>

    <!-- 分类筛选 -->
    <div class="category-filter">
      <div class="filter-section">
        <h3 class="section-title">感冒分类</h3>
        <div class="filter-items">
          <div class="filter-item">
            <img src="https://via.placeholder.com/80x80" alt="普通感冒" />
            <span>普通感冒</span>
          </div>
          <div class="filter-item">
            <img src="https://via.placeholder.com/80x80" alt="流感类" />
            <span>流感类</span>
          </div>
        </div>
      </div>

      <div class="filter-section">
        <h3 class="section-title">适用病症</h3>
        <div class="filter-items">
          <div class="filter-item">
            <img src="https://via.placeholder.com/60x60" alt="发热" />
            <span>发热</span>
          </div>
          <div class="filter-item">
            <img src="https://via.placeholder.com/60x60" alt="头痛" />
            <span>头痛</span>
          </div>
          <div class="filter-item">
            <img src="https://via.placeholder.com/60x60" alt="四肢酸痛" />
            <span>四肢酸痛</span>
          </div>
          <div class="filter-item">
            <img src="https://via.placeholder.com/60x60" alt="喷嚏" />
            <span>喷嚏</span>
          </div>
          <div class="filter-item">
            <img src="https://via.placeholder.com/60x60" alt="高热" />
            <span>高热</span>
          </div>
          <div class="filter-item">
            <img src="https://via.placeholder.com/60x60" alt="偏头痛" />
            <span>偏头痛</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 商品推荐 -->
    <div class="product-recommendation">
      <h2 class="recommendation-title">商品推荐</h2>
      <div class="product-grid">
        <!-- 商品项 -->
        <div class="product-item" v-for="product in recommendedProducts" :key="product.id">
          <!-- 购物车提示 - 显示在商品格子内 -->
          <div class="cart-notification" v-if="product.showCartNotification">
            {{ product.cartNotificationMessage }}
          </div>
          
          <!-- 商品图片 -->
          <div class="product-image">
            <img :src="product.image" :alt="product.name" @error="handleImageError" />
            <div class="product-tag" v-if="product.tag">{{ product.tag }}</div>
          </div>
          
          <!-- 商品信息 -->
          <div class="product-info">
            <div class="product-price">
              <span class="current-price">¥{{ product.currentPrice }}</span>
              <span class="original-price">¥{{ product.originalPrice }}</span>
            </div>
            
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-spec">{{ product.spec }}</p>
            <p class="product-manufacturer">{{ product.manufacturer }}</p>
            <p class="product-stock">{{ product.stock }}</p>
            <p class="product-min-order">1盒起购</p>
            
            <!-- 数量控制和加入购物车 -->
            <div class="product-bottom">
              <div class="product-actions">
                <div class="quantity-control">
                  <button class="quantity-btn minus" @click="decreaseQuantity(product)">-</button>
                  <span class="quantity-value">{{ product.quantity || 1 }}</span>
                  <button class="quantity-btn plus" @click="increaseQuantity(product)">+</button>
                </div>
                <button class="add-to-cart-btn" @click="addToCart(product)">
                  <span>加入购物车</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
/**
 * 药品分类页面组件
 * 实现高端大气的药品分类和商品展示界面
 */
export default {
  name: 'MedicineCategory',
  data() {
    return {
    // 购物车数据
    cartItems: [],
    // 推荐商品列表
      recommendedProducts: [
        {
          id: 1,
          name: '磷酸奥司他韦颗粒',
          image: 'https://via.placeholder.com/200x200',
          tag: '常乐旗舰店',
          spec: '1盒规格 磷酸奥司他韦颗粒15mg*10袋',
          manufacturer: '宜昌东阳光长江药业股份有限公司',
          stock: '500盒起 哈尔滨-哈尔滨',
          currentPrice: 40.30,
          originalPrice: 39.90
        },
        {
          id: 2,
          name: '复方氨酚烷胺片',
          image: 'https://via.placeholder.com/200x200',
          spec: '1盒规格 复方氨酚烷胺片12片',
          manufacturer: '吉林润民康泰药业有限公司',
          stock: '500盒起 哈尔滨',
          currentPrice: 11.69,
          originalPrice: 11.27
        },
        {
          id: 3,
          name: '磷酸奥司他韦胶囊',
          image: 'https://via.placeholder.com/200x200',
          spec: '1盒规格 磷酸奥司他韦胶囊75mg*6粒',
          manufacturer: '宜昌东阳光长江药业股份有限公司',
          stock: '300盒起 同心药业',
          currentPrice: 38.90,
          originalPrice: 38.92
        },
        {
          id: 4,
          name: '磷酸奥司他韦胶囊',
          image: 'https://via.placeholder.com/200x200',
          tag: '秒杀特惠',
          spec: '1盒规格 磷酸奥司他韦胶囊75mg*10粒',
          manufacturer: '浙江海正药业股份有限公司',
          stock: '499盒从 易购-易购仓',
          currentPrice: 9.00,
          originalPrice: 9.91
        },
        {
          id: 5,
          name: '复方氨酚烷胺胶囊',
          image: 'https://via.placeholder.com/200x200',
          spec: '4盒规格 好医生 复方氨酚烷胺胶囊12粒',
          manufacturer: '好医生药业集团有限公司',
          stock: '800盒起 好药好-好药仓',
          currentPrice: 2.70,
          originalPrice: 2.76
        },
        {
          id: 6,
          name: '磷酸奥司他韦胶囊',
          image: 'https://via.placeholder.com/200x200',
          spec: '1盒规格 磷酸奥司他韦胶囊75mg*10粒',
          manufacturer: '浙江海正药业股份有限公司',
          stock: '500盒起 哈尔滨-哈尔滨',
          currentPrice: 40.30,
          originalPrice: 39.90
        },
        {
          id: 7,
          name: '磷酸奥司他韦胶囊',
          image: 'https://via.placeholder.com/200x200',
          tag: '带药汇集成品',
          spec: '1盒规格 磷酸奥司他韦胶囊75mg*10粒',
          manufacturer: '浙江海正药业股份有限公司',
          stock: '非质量问题 不退不换',
          currentPrice: 38.90,
          originalPrice: 38.92
        },
        {
          id: 8,
          name: '复方氨酚烷胺胶囊',
          image: 'https://via.placeholder.com/200x200',
          spec: '1盒规格 复方氨酚烷胺胶囊12粒',
          manufacturer: '吉林润民康泰药业有限公司',
          stock: '500盒起 哈尔滨',
          currentPrice: 11.69,
          originalPrice: 11.27
        },
        {
          id: 9,
          name: '磷酸奥司他韦胶囊',
          image: 'https://via.placeholder.com/200x200',
          spec: '1盒规格 磷酸奥司他韦胶囊75mg*10粒',
          manufacturer: '浙江海正药业股份有限公司',
          stock: '499盒从 易购-易购仓',
          currentPrice: 9.00,
          originalPrice: 9.91
        },
        {
          id: 10,
          name: '酚氨咖敏片',
          image: 'https://via.placeholder.com/200x200',
          spec: '1盒规格 酚氨咖敏片100片',
          manufacturer: '山西亨瑞达制药有限公司',
          stock: '500盒起 哈尔滨',
          currentPrice: 2.70,
          originalPrice: 2.76
        }
      ],

    }
  },

  methods: {
    /**
     * 处理图片加载失败，替换为乐之药logo
     * @param {Event} event - 图片加载错误事件
     */
    handleImageError(event) {
      event.target.src = require('@/assets/logo.svg');
    },
    
    /**
     * 减少商品数量
     * @param {Object} product - 商品对象
     */
    decreaseQuantity(product) {
      if (product.quantity && product.quantity > 1) {
        product.quantity--;
      }
    },
    /**
     * 增加商品数量
     * @param {Object} product - 商品对象
     */
    increaseQuantity(product) {
      if (!product.quantity) {
        product.quantity = 1;
      }
      product.quantity++;
    },
    /**
     * 加入购物车
     * @param {Object} product - 商品对象
     */
    addToCart(product) {
      // 获取或设置默认数量
      const quantity = product.quantity || 1;
      
      // 检查商品是否已在购物车中
      const existingItem = this.cartItems.find(item => item.id === product.id);
      if (existingItem) {
        // 如果商品已存在，增加数量
        existingItem.quantity += quantity;
      } else {
        // 如果商品不存在，添加到购物车
        this.cartItems.push({
          ...product,
          quantity: quantity
        });
      }
      // 显示自定义提示信息
      this.showCartNotification(product, `已将 ${product.name} × ${quantity} 加入购物车`);
      
      // 点击加入购物车后，数量控制器中的数字累计加1
      if (!product.quantity) {
        product.quantity = 2; // 初始为2，因为已经加入了1个
      } else {
        product.quantity++; // 每次点击增加1个
      }
    },
    /**
     * 显示购物车提示信息
     * @param {Object} product - 商品对象
     * @param {string} message - 提示消息内容
     */
    showCartNotification(product, message) {
      // 清除之前的定时器
      if (product.cartNotificationTimeout) {
        clearTimeout(product.cartNotificationTimeout);
      }
      
      // 设置提示信息并显示
      product.cartNotificationMessage = message;
      product.showCartNotification = true;
      
      // 1秒后自动隐藏提示
      product.cartNotificationTimeout = setTimeout(() => {
        product.showCartNotification = false;
      }, 1000);
    }
  }
}
</script>

<style scoped>
/**
 * 药品分类页面样式
 * 设计高端大气的界面风格
 */
.medicine-category-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Microsoft YaHei', sans-serif;
}

/* 页面标题 */
.page-header {
  text-align: center;
  margin-bottom: 30px;
}

.page-header h1 {
  font-size: 36px;
  color: #333;
  font-weight: bold;
  margin: 0;
}

/* 主导航栏 */
.main-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 15px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.nav-item {
  padding: 8px 16px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.nav-item.active {
  background: white;
  color: #667eea;
  font-weight: bold;
}

/* 分类筛选 */
.category-filter {
  display: flex;
  gap: 50px;
  margin-bottom: 50px;
  padding: 20px;
  background: linear-gradient(135deg, #f8f9ff 0%, #eef2ff 100%);
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.filter-section {
  flex: 1;
}

.section-title {
  font-size: 22px;
  color: #2d3748;
  margin-bottom: 25px;
  font-weight: bold;
  text-align: center;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 40px;
  height: 3px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
  margin: 8px auto 0;
}

.filter-items {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.filter-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 15px 20px;
  border-radius: 15px;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  min-width: 120px;
  border: 2px solid transparent;
}

.filter-item:hover {
  background: white;
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
  border-color: rgba(102, 126, 234, 0.3);
}

.filter-item img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 12px;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.1);
  border: 3px solid #f0f4ff;
  transition: all 0.3s ease;
}

.filter-item:hover img {
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.2);
  transform: scale(1.05);
}

.filter-item span {
  font-size: 15px;
  color: #2d3748;
  font-weight: 600;
  text-align: center;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
  transition: color 0.3s ease;
}

.filter-item:hover span {
  color: #667eea;
}

/* 商品推荐 */
.product-recommendation {
  margin-top: 50px;
}

.recommendation-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 25px;
  font-weight: bold;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

.product-item {
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
}

.product-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.12);
}

/* 商品图片 */
.product-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-item:hover .product-image img {
  transform: scale(1.05);
}

/* 商品标签 */
.product-tag {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
}

/* 商品信息 */
.product-info {
  padding: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.product-price {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.current-price {
  font-size: 24px;
  color: #e4393c;
  font-weight: bold;
}

.original-price {
  font-size: 15px;
  color: #999;
  text-decoration: line-through;
}

.product-info h3 {
  font-size: 16px;
  color: #333;
  margin: 0 0 8px 0;
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.product-spec {
  font-size: 12px;
  color: #666;
  margin: 0 0 8px 0;
  line-height: 1.5;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.product-manufacturer,
.product-stock {
  font-size: 12px;
  color: #666;
  margin: 0 0 8px 0;
  line-height: 1.5;
}

.product-min-order {
  font-size: 12px;
  color: #666;
  margin-bottom: 12px;
}

/* 商品底部 */
.product-bottom {
  padding-top: 10px;
  border-top: 1px solid #eee;
  margin-top: auto;
}

/* 商品操作 */
.product-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
}

/* 数量控制 */
.quantity-control {
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.quantity-btn {
  width: 28px;
  height: 28px;
  border: none;
  background-color: #f5f5f5;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.quantity-btn:hover {
  background-color: #e0e0e0;
}

.quantity-btn.minus {
  color: #666;
}

.quantity-btn.plus {
  color: #007bff;
}

.quantity-value {
  padding: 0 12px;
  font-size: 14px;
  color: #333;
  min-width: 30px;
  text-align: center;
}

/* 加入购物车按钮 */
.add-to-cart-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.3s ease;
}

.add-to-cart-btn:hover {
  background-color: #0056b3;
}




/* 响应式设计 */
@media (max-width: 768px) {
  .main-nav {
    justify-content: flex-start;
    overflow-x: auto;
  }

  .category-filter {
    flex-direction: column;
  }

  .product-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
  }

  .product-image img {
    height: 120px;
  }
}

/* 购物车提示样式 - 显示在商品格子内 */
.cart-notification {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 12px;
  z-index: 100;
  opacity: 1;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

  </style>