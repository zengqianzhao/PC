<template>
  <div class="leyao-shop-container">

    <!-- 主要内容区域 -->
    <main class="leyao-main">
      <div class="main-container">
        <!-- 左侧商品分类菜单 -->
        <aside class="category-sidebar">
          <div class="category-title">所有商品分类</div>
          <ul class="category-list">
            <li class="category-item" :class="{ active: selectedCategory === '西药' }">
              <a href="#" class="category-link" @click.prevent="selectCategory('西药')">西药</a>
            </li>
            <li class="category-item" :class="{ active: selectedCategory === '中药' }">
              <a href="#" class="category-link" @click.prevent="selectCategory('中药')">中药</a>
            </li>
            <li class="category-item" :class="{ active: selectedCategory === '中药饮片' }">
              <a href="#" class="category-link" @click.prevent="selectCategory('中药饮片')">中药饮片</a>
            </li>
            <li class="category-item" :class="{ active: selectedCategory === '进口药品' }">
              <a href="#" class="category-link" @click.prevent="selectCategory('进口药品')">进口药品</a>
            </li>
            <li class="category-item" :class="{ active: selectedCategory === '医疗器械' }">
              <a href="#" class="category-link" @click.prevent="selectCategory('医疗器械')">医疗器械</a>
            </li>
            <li class="category-item" :class="{ active: selectedCategory === '生物制品' }">
              <a href="#" class="category-link" @click.prevent="selectCategory('生物制品')">生物制品</a>
            </li>
            <li class="category-item" :class="{ active: selectedCategory === '食品' }">
              <a href="#" class="category-link" @click.prevent="selectCategory('食品')">食品</a>
            </li>
            <li class="category-item" :class="{ active: selectedCategory === '非药品' }">
              <a href="#" class="category-link" @click.prevent="selectCategory('非药品')">非药品</a>
            </li>
            <li class="category-item" :class="{ active: selectedCategory === '套餐' }">
              <a href="#" class="category-link" @click.prevent="selectCategory('套餐')">套餐</a>
            </li>
          </ul>
        </aside>

        <!-- 中间Banner区域 -->
        <section class="banner-section">
          <div class="banner-container">
            <div class="banner-content">
              <div class="banner-text">
                <div class="banner-subtitle">会员专享优惠</div>
                <div class="banner-title">全场满减 满1000减100</div>
                <button class="banner-button">立即查看</button>
              </div>
            </div>
            <div class="banner-indicators">
              <span class="indicator active"></span>
              <span class="indicator"></span>
              <span class="indicator"></span>
            </div>
          </div>
        </section>

        <!-- 右侧内容区域 -->
        <aside class="right-sidebar">
          <!-- 限时秒杀 -->
          <div class="seckill-section">
            <div class="seckill-header">
              <div class="seckill-title">限时秒杀</div>
              <div class="countdown">
                <span class="countdown-label">08:</span>
                <span class="countdown-time">30</span>
                <span class="countdown-label">:</span>
                <span class="countdown-time">45</span>
              </div>
            </div>
            <div class="seckill-products">
              <div v-for="product in seckillProducts" :key="product.id" class="seckill-product">
                <div class="seckill-product-image">
                  <img :src="product.image" :alt="product.name" class="product-image">
                </div>
                <div class="seckill-product-info">
                  <div class="seckill-product-name">{{ product.name }}</div>
                  <div class="seckill-product-price">
                    <span class="current-price">¥{{ product.price.toFixed(2) }}</span>
                    <span class="original-price">¥{{ product.originalPrice.toFixed(2) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 购物车卡片 -->
          <div class="cart-section">
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
            
            <!-- 优惠券数量 -->
            <div class="coupon-count-section">
              <span class="coupon-count">可用: 0张</span>
            </div>
            
            <!-- 更多功能 -->
            <div class="more-features">
              <div class="feature-item">
                <div class="feature-icon">
                  <span class="icon">¥</span>
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
                <span class="feature-text">平安客户</span>
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
        </aside>
      </div>
      
      <!-- 商品展示区域 -->
      <div class="products-container">
        <div class="container">
          <!-- 过滤排序区域 -->
          <div class="filter-sort-bar">
              <div class="sort-options">
              <button class="sort-option" :class="{ active: sortBy === 'default' }" @click="sortProducts('default')">
                <svg class="sort-icon" viewBox="0 0 24 24" fill="none" stroke="#4A5568" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 6h18M3 12h18M3 18h18"/>
                </svg>
                默认排序
              </button>
              <button class="sort-option" :class="{ active: sortBy === 'price-asc' }" @click="sortProducts('price-asc')">
                <svg class="sort-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v20M17 7l-5-5-5 5m5 10l5 5 5-5" stroke="#22C55E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="12" cy="8" r="2" fill="#22C55E"/>
                </svg>
                价格从低到高
              </button>
              <button class="sort-option" :class="{ active: sortBy === 'price-desc' }" @click="sortProducts('price-desc')">
                <svg class="sort-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22V2M7 17l5 5 5-5m-5-10l-5 5 5 5" stroke="#EF4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="12" cy="16" r="2" fill="#EF4444"/>
                </svg>
                价格从高到低
              </button>
              <button class="sort-option" :class="{ active: sortBy === 'sales' }" @click="sortProducts('sales')">
                <svg class="sort-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#3B82F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 12v8" stroke="#3B82F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 12l4 4" stroke="#3B82F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                销量从高到低
              </button>
            </div>
              <div class="filter-info">
              </div>
          </div>
          
          <!-- 商品网格 -->
          <div class="products-grid">
            <div v-for="product in displayedProducts" :key="product.id" class="product-card">
              <div class="product-image">
                <img :src="product.image" :alt="product.name" @error="handleImageError">
              </div>
              <div class="product-info">
                <div class="product-name">{{ product.name }}</div>
                <div class="product-spec">{{ product.spec ? product.spec : '10粒*1板' }}</div>
                <div class="product-pharmacy">
                  {{ product.manufacturer || '同仁堂大药房' }}
                </div>
                <div class="product-price">
                  <span class="current-price">¥{{ product.price.toFixed(2) }}</span>
                  <span class="price-range"> - ¥{{ (product.price * 1.3 + Math.random() * 50).toFixed(2) }}</span>
                </div>
                <div class="product-merchants">
                  {{ Math.floor(Math.random() * 1000) + 800 }}个商家在售
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
  name: 'LeyaoShop',
  data() {
    return {
      // 限时秒杀商品数据
      seckillProducts: [],
      // 商品数据
      products: [],
      // 选中的分类
      selectedCategory: '',
      // 排序方式
      sortBy: 'default',


    }
  },
  created() {
    // 页面创建时生成商品数据
    this.generateSeckillProducts();
    this.generateProducts();
  },
  computed: {
    // 过滤后的商品
    filteredProducts() {
      if (!this.selectedCategory) {
        return this.products;
      }
      return this.products.filter(product => product.category === this.selectedCategory);
    },
    // 排序后的商品
    sortedProducts() {
      let sorted = [...this.filteredProducts];
      switch (this.sortBy) {
        case 'price-asc':
          return sorted.sort((a, b) => a.price - b.price);
        case 'price-desc':
          return sorted.sort((a, b) => b.price - a.price);
        case 'sales':
          return sorted.sort((a, b) => b.sales - a.sales);
        default:
          return sorted;
      }
    },
    // 显示所有商品（不分页）
    displayedProducts() {
      return this.sortedProducts;
    }
  },
  methods: {
    /**
     * 处理图片加载错误
     * 当图片加载失败时，使用默认图片替代
     */
    handleImageError(e) {
      e.target.src = '/leyao-logo.png';
    },
    /**
     * 生成限时秒杀商品数据
     */
    generateSeckillProducts() {
      const seckillProductNames = [
        '木香',
        '龙牡壮骨颗粒'
      ];

      // 生成限时秒杀商品数据
      for (let i = 0; i < seckillProductNames.length; i++) {
        // 生成随机价格
        const currentPrice = parseFloat((Math.random() * 50 + 10).toFixed(2));
        const originalPrice = parseFloat((currentPrice * 1.5).toFixed(2));

        this.seckillProducts.push({
          id: i + 1,
          name: seckillProductNames[i],
          price: currentPrice,
          originalPrice: originalPrice,
          image: '/leyao-logo.png', // 使用默认logo
          unit: '1kg/袋' // 单位
        });
      }
    },
    
    /**
     * 生成商品数据
     */
    generateProducts() {
      const categories = ['西药', '中药', '中药饮片', '进口药品', '医疗器械', '生物制品', '食品', '非药品', '套餐'];
      const productNames = [
        '阿莫西林胶囊', '感冒灵颗粒', '布洛芬缓释胶囊', '头孢克肟分散片', '盐酸左氧氟沙星片',
        '板蓝根颗粒', '复方甘草片', '维生素C片', '葡萄糖酸钙口服液', '蒙脱石散',
        '当归', '黄芪', '人参', '枸杞', '菊花',
        '云南白药气雾剂', '创可贴', '体温计', '血压计', '血糖仪',
        '蛋白质粉', '益生菌粉', '钙片', '鱼油软胶囊', '维生素E软胶囊',
        '口罩', '消毒液', '洗手液', '湿纸巾', '棉签',
        '中药饮片套装', '养生茶包', '阿胶糕', '蜂蜜', '红枣'
      ];
      
      // 生成商品数据
      for (let i = 0; i < 100; i++) {
        const category = categories[Math.floor(Math.random() * categories.length)];
        const name = productNames[Math.floor(Math.random() * productNames.length)] + (i % 10 + 1);
        const price = parseFloat((Math.random() * 200 + 10).toFixed(2));
        const originalPrice = Math.random() > 0.5 ? parseFloat((price * 1.2).toFixed(2)) : null;
        const sales = Math.floor(Math.random() * 1000 + 10);
        const isNew = Math.random() > 0.7;
        
        this.products.push({
          id: i + 100,
          name: name,
          price: price,
          originalPrice: originalPrice,
          category: category,
          sales: sales,
          image: '/leyao-logo.png',
          isNew: isNew
        });
      }
    },
    
    /**
     * 选择分类
     */
    selectCategory(category) {
      this.selectedCategory = category;
      this.currentPage = 1; // 重置页码
    },
    
    /**
     * 排序商品
     */
    sortProducts(sortType) {
      this.sortBy = sortType;
    },
    
    /**
     * 加入购物车
     */
    addToCart(product) {
      // 这里可以添加实际的加入购物车逻辑
      alert(`已将${product.name}加入购物车`);
    }
  }
}
</script>

<style scoped>
/* 全局样式重置和基础设置 */
.leyao-shop-container {
  width: 100%;
  min-height: 100vh;
  background: #f5f7fa; /* 设置浅灰色背景，提升层次感 */
}

/* 顶部导航栏 */
.top-nav {
  background-color: #0066cc;
  color: white;
  padding: 5px 0;
}

/* 主要内容区域 */
.leyao-main {
  padding: 20px 0;
}

.main-container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
}

/* 左侧商品分类菜单 */
.category-sidebar {
  width: 180px;
  background-color: #0066cc;
  color: white;
  height: 380px;
  display: block;
  padding: 0;
  margin: 0;
  box-shadow: none;
}

.category-title {
  padding: 12px 15px;
  font-size: 16px;
  font-weight: bold;
  border-bottom: none;
}

.category-list {
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.category-item {
  border-bottom: none;
  line-height: 1.3;
  padding: 0;
  margin: 0;
}

.category-item.active {
  background-color: #0055aa;
}

.category-link {
  display: block;
  padding: 8px 15px;
  color: white;
  text-decoration: none;
  font-size: 15px;
  transition: none;
}

.category-link:hover {
  background-color: #0055aa;
}

/* 中间Banner区域 */
.banner-section {
  width: 300px;
}

.banner-container {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.banner-content {
  background: linear-gradient(135deg, #0066cc 0%, #3399ff 100%);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-text {
  text-align: center;
  color: white;
}

.banner-subtitle {
  font-size: 18px;
  margin-bottom: 10px;
  opacity: 0.9;
}

.banner-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.banner-button {
  background-color: white;
  color: #0066cc;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.banner-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.banner-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
}

.indicator.active {
  background-color: white;
  transform: scale(1.2);
}

/* 右侧内容区域 */
.right-sidebar {
  width: 615px;
  display: flex;
  flex-direction: row;
  gap: 15px;
}

/* 限时秒杀 */
.seckill-section {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  width: 280px;
  height: 380px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.seckill-header {
  background-color: #0066cc;
  color: white;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.seckill-title {
  font-size: 16px;
  font-weight: bold;
}

.countdown {
  font-size: 14px;
}

.countdown-label {
  font-weight: normal;
}

.countdown-time {
  font-weight: bold;
}

.seckill-products {
  padding: 10px;
}

.seckill-product {
  margin-bottom: 15px;
}

.seckill-product-image {
  width: 100%;
  height: 100px;
  background-color: #f5f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  border-radius: 4px;
}

.product-image {
  max-width: 80%;
  max-height: 80%;
}

.seckill-product-info {
  margin-bottom: 10px;
}

.seckill-product-name {
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.seckill-product-price {
  display: flex;
  align-items: center;
  gap: 10px;
}

.current-price {
  color: #ff4d4f;
  font-size: 16px;
  font-weight: bold;
}

.original-price {
  color: #999;
  font-size: 12px;
  text-decoration: line-through;
}

/* 购物车卡片 */
.cart-section {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  width: 320px;
  height: 370px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
  background-color: #fafafa;
  padding: 10px;
}

/* 状态标签 */
.status-tabs {
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 10px;
}

.status-tab {
  text-align: center;
}

.status-count {
  display: block;
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 3px;
}

.status-text {
  font-size: 12px;
  color: #999;
}

/* 主要操作按钮 */
.main-buttons {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.primary-button {
  flex: 1;
  height: 40px;
  border: none;
  background-color: #0066cc;
  color: white;
  font-size: 14px;
  font-weight: 600;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 102, 204, 0.2);
}

.primary-button:hover {
  background-color: #3399ff;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
}

/* 功能入口网格 */
.feature-grid {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 10px;
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
  width: 45px;
  height: 45px;
  background-color: #f5f5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  transition: all 0.3s ease;
}

.feature-icon:hover {
  background-color: #e8e8e8;
  transform: scale(1.05);
}

.feature-icon .icon {
  font-size: 20px;
}

.feature-badge {
  position: absolute;
  top: -3px;
  right: -3px;
  background-color: #ff4d4f;
  color: white;
  font-size: 8px;
  font-weight: 600;
  padding: 2px 5px;
  border-radius: 8px;
}

.feature-text {
  font-size: 12px;
  color: #333;
}

/* 优惠券数量 */
.coupon-count-section {
  background-color: white;
  border-radius: 8px;
  padding: 8px 12px;
  margin-bottom: 10px;
  text-align: center;
}

.coupon-count-section .coupon-count {
  font-size: 14px;
  color: #0066cc;
  font-weight: 600;
}

/* 更多功能 */
.more-features {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 10px;
}

/* 商家优惠券信息 */
.merchant-coupon {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background-color: #e6f2ff;
  border-radius: 8px;
  border-left: 3px solid #0066cc;
  transition: transform 0.3s ease;
}

.merchant-coupon:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 102, 204, 0.1);
}

.coupon-info {
  flex: 1;
}

.coupon-info .coupon-title {
  font-size: 13px;
  font-weight: 600;
  color: #333;
  margin-bottom: 3px;
}

.coupon-info .coupon-price {
  font-size: 18px;
  font-weight: 600;
  color: #0066cc;
  margin-bottom: 2px;
}

.coupon-info .coupon-condition {
  font-size: 11px;
  color: #999;
}

.coupon-button {
  background-color: #0066cc;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.coupon-button:hover {
  background-color: #3399ff;
}

/* 高端大气的设计系统 */
:root {
  --primary-color: #0066cc;
  --primary-dark: #004999;
  --primary-light: #3399ff;
  --accent-color: #ffd700;
  --accent-dark: #d4af37;
  --text-primary: #2c3e50;
  --text-secondary: #7f8c8d;
  --text-light: #bdc3c7;
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #ecf0f1;
  --border-color: #e1e8ed;
  --success-color: #27ae60;
  --warning-color: #f39c12;
  --danger-color: #e74c3c;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.16);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 商品展示区域 */
.products-container {
  margin-top: 10px;
  padding: 10px 0;
  background-color: var(--bg-secondary);
  box-shadow: var(--shadow-sm);
}

.products-container .container {
  width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
}

/* 过滤排序区域 */
.filter-sort-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 2px solid var(--border-color);
  margin-bottom: 10px;
}

.filter-info {
  font-size: 16px;
  color: var(--text-secondary);
  font-weight: 500;
}

.sort-options {
  display: flex;
  gap: 16px;
}

/* 排序图标样式 */
.sort-icon {
  margin-right: 6px;
  width: 16px;
  height: 16px;
  vertical-align: middle;
}

.sort-option {
  padding: 10px 20px;
  background-color: var(--bg-secondary);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-lg);
  font-size: 14px;
  color: #000000; /* 默认排序字体颜色黑色 */
  cursor: pointer;
  transition: var(--transition);
  font-weight: 500;
}

.sort-option:hover {
  background-color: var(--bg-primary);
  border-color: var(--primary-light);
  color: var(--primary-color);
}

.sort-option.active {
  background-color: var(--primary-color);
  color: black;
  border-color: var(--primary-color);
  box-shadow: var(--shadow-sm);
}

/* 商品网格 */
.products-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 每行5个商品卡片 */
  gap: 10px; /* 减小卡片间距 */
}

/* 商品卡片 */
.product-card {
  background-color: white;
  border: 1px solid #e0e0e0; /* 细线边框 */
  border-radius: 0; /* 去除圆角 */
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: none; /* 去除阴影 */
  position: relative;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  border-color: #3B82F6; /* 悬停时边框变为蓝色 */
  transform: none; /* 去除悬停上浮效果 */
  box-shadow: none; /* 保持无阴影 */
}

.product-card::before {
  content: none; /* 去除顶部渐变条 */
}

/* 商品图片 */
.product-card .product-image {
  width: 100%;
  height: 150px; /* 减小图片高度 */
  background-color: white; /* 白色背景 */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 10px;
  position: relative;
  transition: all 0.3s ease;
}

.product-card .product-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.product-card:hover .product-image {
  background-color: white; /* 保持背景色不变 */
}

.product-card:hover .product-image img {
  transform: none; /* 去除图片缩放效果 */
}

/* 商品信息 */
.product-info {
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* 商品名称 */
.product-name {
  font-size: 14px;
  color: #333333;
  margin-bottom: 5px;
  line-height: 1.3;
  height: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: normal;
}

/* 商品规格 */
.product-spec {
  font-size: 12px;
  color: #666666;
  margin-bottom: 8px;
  line-height: 1.2;
}

/* 药房信息 */
.product-pharmacy {
  font-size: 12px;
  color: #666666;
  margin-bottom: 8px;
  line-height: 1.2;
  display: block;
}

.product-pharmacy::before {
  content: none; /* 去除图标 */
}

/* 商品价格 */
.product-price {
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.product-price .current-price {
  font-size: 14px;
  font-weight: bold;
  color: #ff0000; /* 红色价格 */
  font-family: Arial, sans-serif;
}

.product-price .current-price::before {
  content: '¥';
  font-size: 12px;
  margin-right: 1px;
}

.product-price .price-range {
  font-size: 12px;
  color: #ff0000;
  text-decoration: line-through; /* 删除线效果 */
}

.product-price .price-range::before {
  content: '- ';
}

/* 商家数量 */
.product-merchants {
  font-size: 11px;
  color: #999999;
  margin-top: auto;
  display: block;
}

.product-merchants::before {
  content: none; /* 去除图标 */
}

/* 分页控件 */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 40px 0;
}

.page-btn {
  padding: 12px 20px;
  background-color: var(--bg-secondary);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: 15px;
  color: var(--text-secondary);
  cursor: pointer;
  transition: var(--transition);
  font-weight: 500;
  min-width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-btn:hover:not(:disabled) {
  background-color: var(--bg-primary);
  border-color: var(--primary-light);
  color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
}

.page-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

.page-btn.active {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
  box-shadow: var(--shadow-md);
}

.page-info {
  font-size: 15px;
  color: var(--text-secondary);
  font-weight: 500;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .leyao-main {
    gap: 20px;
    padding: 20px;
  }
  
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  
  .products-container .container {
    width: 100%;
  }
}

@media (max-width: 992px) {
  .products-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
}

@media (max-width: 576px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .sort-options {
    flex-wrap: wrap;
    gap: 12px;
  }
  
  .sort-option {
    flex: 1;
    min-width: 120px;
  }
}

</style>