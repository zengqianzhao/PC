<template>
  <div class="brand-flagship-container">
    <!-- 页面头部 -->
    <header class="brand-header">
      <div class="health-container">
        <!-- 导航栏 -->
        <nav class="brand-nav">
          <div class="brand-nav-left">
            <h1 class="brand-logo">
              <img src="https://via.placeholder.com/80x40?text=Logo" alt="品牌药企旗舰" class="brand-logo-img">
              <span class="brand-logo-text">品牌药企旗舰</span>
            </h1>
          </div>
          <div class="brand-nav-right">
            <div class="brand-search">
              <input type="text" v-model="searchKeyword" placeholder="搜索药品、品牌" class="brand-search-input">
              <button class="brand-search-btn">
                <span class="brand-search-icon">🔍</span>
              </button>
            </div>
            <div class="brand-nav-links">
              <a href="/shop" class="brand-nav-link">返回商城</a>
              <a href="#" class="brand-nav-link" @click="toggleCart">
                <span class="brand-nav-icon">🛒</span>
                <span class="brand-cart-count">{{ cartCount }}</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <!-- 主要内容区域 -->
    <main class="brand-main">
      <!-- 品牌Banner -->
      <section class="brand-banner">
        <div class="health-container">
          <div class="brand-banner-content">
            <h2 class="brand-banner-title">品质保证 · 原厂直供</h2>
            <p class="brand-banner-subtitle">精选优质品牌药企，为您提供放心药品</p>
          </div>
        </div>
      </section>

      <!-- 品牌分类导航 -->
      <section class="brand-category-nav">
        <div class="health-container">
          <div class="brand-category-list">
            <div 
              v-for="category in categories" 
              :key="category.id"
              class="brand-category-item"
              :class="{ 'active': selectedCategory === category.id }"
              @click="selectCategory(category.id)"
            >
              <span class="brand-category-icon">{{ category.icon }}</span>
              <span class="brand-category-name">{{ category.name }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 品牌药企列表 -->
      <section class="brand-companies-section">
        <div class="health-container">
          <h3 class="brand-section-title">优质品牌药企</h3>
          <div class="brand-companies-grid">
            <div 
              v-for="company in filteredCompanies" 
              :key="company.id"
              class="brand-company-card"
              @click="viewCompanyProducts(company.id)"
            >
              <div class="brand-company-logo">
                <img :src="company.logo" :alt="company.name" class="brand-company-logo-img">
              </div>
              <div class="brand-company-info">
                <h4 class="brand-company-name">{{ company.name }}</h4>
                <p class="brand-company-desc">{{ company.description }}</p>
                <div class="brand-company-stats">
                  <span class="brand-company-stat">
                    <span class="brand-stat-icon">📊</span>
                    {{ company.productCount }}种药品
                  </span>
                  <span class="brand-company-stat">
                    <span class="brand-stat-icon">⭐</span>
                    {{ company.rating }}分
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 热门产品推荐 -->
      <section class="brand-products-section">
        <div class="health-container">
          <div class="brand-section-header">
            <h3 class="brand-section-title">热门产品推荐</h3>
            <a href="#" class="brand-view-more">查看全部</a>
          </div>
          <div class="brand-products-grid">
            <div 
              v-for="product in popularProducts" 
              :key="product.id"
              class="brand-product-card"
            >
              <div class="brand-product-image-container">
                <img :src="product.image" :alt="product.name" class="brand-product-image">
                <div class="brand-product-badge" v-if="product.isNew">新品</div>
                <div class="brand-product-badge hot" v-if="product.isHot">热销</div>
              </div>
              <div class="brand-product-info">
                <h4 class="brand-product-name">{{ product.name }}</h4>
                <p class="brand-product-spec">{{ product.spec }}</p>
                <div class="brand-product-brand">
                  <img :src="getBrandLogo(product.manufacturer)" :alt="product.manufacturer" class="brand-product-brand-logo">
                  <span class="brand-product-brand-name">{{ product.manufacturer }}</span>
                </div>
                <div class="brand-product-price">
                  <span class="brand-product-current-price">¥{{ product.price.toFixed(2) }}</span>
                  <span class="brand-product-original-price" v-if="product.originalPrice">¥{{ product.originalPrice.toFixed(2) }}</span>
                </div>
                <div class="brand-product-action">
                  <button class="brand-add-to-cart" @click.stop="addToCart(product)">
                    <span class="brand-add-to-cart-icon">➕</span>
                    加入购物车
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- 页脚 -->
    <footer class="order-footer">
      <div class="health-container">
        <div class="footer-content">
          <div class="footer-links">
            <a href="#" class="footer-link">关于我们</a>
            <a href="#" class="footer-link">联系我们</a>
            <a href="#" class="footer-link">用户协议</a>
            <a href="#" class="footer-link">隐私政策</a>
            <a href="#" class="footer-link">帮助中心</a>
          </div>
          <div class="footer-contact">
            <p>客服热线：400-123-4567</p>
            <p>知识产权管理平台：dian.ysbang.cn</p>
          </div>
        </div>
        <div class="copyright">
          <p>Copyright@2015-2024 乐之药dian.ysbang.cn版权所有</p>
        </div>
      </div>
    </footer>

    <!-- 购物车侧边栏 -->
    <div class="health-cart-sidebar" :class="{ 'open': isCartOpen }">
      <div class="health-cart-header">
        <h3>购物车</h3>
        <button class="health-cart-close" @click="toggleCart">×</button>
      </div>
      <div class="health-cart-content">
        <div v-if="cartItems.length === 0" class="health-cart-empty">
          <p>购物车是空的</p>
        </div>
        <div v-else>
          <div v-for="item in cartItems" :key="item.id" class="health-cart-item">
            <div class="health-cart-item-info">
              <div class="health-cart-item-image">
                <img :src="item.image" :alt="item.name">
              </div>
              <div class="health-cart-item-details">
                <h4>{{ item.name }}</h4>
                <p>{{ item.spec }}</p>
                <p class="health-cart-item-price">¥{{ item.price.toFixed(2) }}</p>
              </div>
            </div>
            <div class="health-cart-item-quantity">
              <button class="health-cart-btn" @click="decreaseQuantity(item)">-</button>
              <span class="health-cart-quantity">{{ item.quantity }}</span>
              <button class="health-cart-btn" @click="increaseQuantity(item)">+</button>
            </div>
          </div>
        </div>
      </div>
      <div class="health-cart-footer" v-if="cartItems.length > 0">
        <div class="health-cart-total">
          <span>总计：</span>
          <span class="health-cart-total-price">¥{{ cartTotal.toFixed(2) }}</span>
        </div>
        <button class="health-cart-checkout">去结算</button>
      </div>
    </div>
    <div class="health-overlay" :class="{ 'active': isCartOpen }" @click="toggleCart"></div>
  </div>
</template>

<script>
export default {
  name: 'BrandFlagship',
  data() {
    return {
      // 搜索关键词
      searchKeyword: '',
      // 购物车状态
      isCartOpen: false,
      cartItems: [],
      cartCount: 0,
      cartTotal: 0,
      // 选中的分类
      selectedCategory: 0,
      // 分类数据
      categories: [
        { id: 0, name: '全部品牌', icon: '🏪' },
        { id: 1, name: '西药', icon: '💊' },
        { id: 2, name: '中药', icon: '🌿' },
        { id: 3, name: '保健品', icon: '✨' },
        { id: 4, name: '医疗器械', icon: '🏥' },
        { id: 5, name: '生物制品', icon: '🧬' }
      ],
      // 品牌药企数据
      companies: [
        {
          id: 1,
          name: '华北制药',
          logo: 'https://via.placeholder.com/120x80?text=华北制药',
          description: '中国最大的化学制药企业之一，专注于抗生素、维生素等领域',
          productCount: 200,
          rating: 4.8,
          category: 1
        },
        {
          id: 2,
          name: '石药集团',
          logo: 'https://via.placeholder.com/120x80?text=石药集团',
          description: '国内领先的创新型医药企业，专注于创新药研发',
          productCount: 180,
          rating: 4.9,
          category: 1
        },
        {
          id: 3,
          name: '白云山',
          logo: 'https://via.placeholder.com/120x80?text=白云山',
          description: '历史悠久的中药企业，拥有众多知名中药品牌',
          productCount: 250,
          rating: 4.7,
          category: 2
        },
        {
          id: 4,
          name: '哈药集团',
          logo: 'https://via.placeholder.com/120x80?text=哈药集团',
          description: '综合型医药企业，涵盖化学药、中药、保健品等领域',
          productCount: 300,
          rating: 4.6,
          category: 3
        },
        {
          id: 5,
          name: '迈瑞医疗',
          logo: 'https://via.placeholder.com/120x80?text=迈瑞医疗',
          description: '全球领先的医疗器械企业，专注于医疗设备研发制造',
          productCount: 120,
          rating: 4.9,
          category: 4
        },
        {
          id: 6,
          name: '天坛生物',
          logo: 'https://via.placeholder.com/120x80?text=天坛生物',
          description: '国内最大的生物制品企业之一，专注于血液制品',
          productCount: 50,
          rating: 4.8,
          category: 5
        }
      ],
      // 热门产品数据
      popularProducts: [
        {
          id: 1,
          name: '阿莫西林胶囊',
          spec: '0.25g*24粒/盒',
          price: 12.5,
          originalPrice: 15.0,
          manufacturer: '华北制药',
          image: 'https://via.placeholder.com/200x200?text=Medicine1',
          isNew: false,
          isHot: true
        },
        {
          id: 2,
          name: '复方板蓝根颗粒',
          spec: '10g*20袋/盒',
          price: 22.6,
          originalPrice: 25.8,
          manufacturer: '白云山',
          image: 'https://via.placeholder.com/200x200?text=Medicine2',
          isNew: false,
          isHot: true
        },
        {
          id: 3,
          name: '布洛芬缓释胶囊',
          spec: '0.3g*20粒/盒',
          price: 18.9,
          originalPrice: 22.5,
          manufacturer: '哈药集团',
          image: 'https://via.placeholder.com/200x200?text=Medicine3',
          isNew: false,
          isHot: true
        },
        {
          id: 4,
          name: '葡萄糖酸锌口服液',
          spec: '10ml*12支/盒',
          price: 32.8,
          originalPrice: 38.0,
          manufacturer: '三精制药',
          image: 'https://via.placeholder.com/200x200?text=Medicine4',
          isNew: true,
          isHot: false
        },
        {
          id: 5,
          name: '注射用头孢曲松钠',
          spec: '1.0g*10支/盒',
          price: 85.0,
          originalPrice: 98.0,
          manufacturer: '石药集团',
          image: 'https://via.placeholder.com/200x200?text=Medicine5',
          isNew: false,
          isHot: true
        },
        {
          id: 6,
          name: '电子血压计',
          spec: '全自动上臂式',
          price: 199.0,
          originalPrice: 249.0,
          manufacturer: '迈瑞医疗',
          image: 'https://via.placeholder.com/200x200?text=Device1',
          isNew: true,
          isHot: true
        }
      ]
    }
  },
  computed: {
    // 过滤后的品牌药企列表
    filteredCompanies() {
      let filtered = this.companies;
      
      // 按分类过滤
      if (this.selectedCategory > 0) {
        filtered = filtered.filter(company => company.category === this.selectedCategory);
      }
      
      // 按搜索关键词过滤
      if (this.searchKeyword) {
        const keyword = this.searchKeyword.toLowerCase();
        filtered = filtered.filter(company => 
          company.name.toLowerCase().includes(keyword) ||
          company.description.toLowerCase().includes(keyword)
        );
      }
      
      return filtered;
    }
  },
  methods: {
    /**
     * 选择品牌分类
     * @param {number} categoryId - 分类ID
     */
    selectCategory(categoryId) {
      this.selectedCategory = categoryId;
    },
    
    /**
     * 查看药企产品
     * @param {number} companyId - 药企ID
     */
    viewCompanyProducts(companyId) {
      // 这里可以实现查看药企产品的逻辑
      console.log('查看药企产品:', companyId);
    },
    
    /**
     * 获取品牌logo
     * @param {string} manufacturer - 制造商名称
     * @returns {string} 品牌logo图片URL
     */
    getBrandLogo(manufacturer) {
      // 这里可以根据制造商名称返回对应的品牌logo
      return `https://via.placeholder.com/40x40?text=${manufacturer.substring(0, 2)}`;
    },
    
    /**
     * 切换购物车显示
     */
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },
    
    /**
     * 添加商品到购物车
     * @param {object} product - 商品信息
     */
    addToCart(product) {
      // 检查购物车中是否已有该商品
      const existingItem = this.cartItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // 如果已有，增加数量
        existingItem.quantity++;
      } else {
        // 如果没有，添加新商品
        this.cartItems.push({
          ...product,
          quantity: 1
        });
      }
      
      // 更新购物车数量和总价
      this.updateCartInfo();
    },
    
    /**
     * 减少商品数量
     * @param {object} item - 购物车中的商品
     */
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
        this.updateCartInfo();
      } else {
        // 如果数量为1，从购物车中移除
        const index = this.cartItems.indexOf(item);
        if (index > -1) {
          this.cartItems.splice(index, 1);
          this.updateCartInfo();
        }
      }
    },
    
    /**
     * 增加商品数量
     * @param {object} item - 购物车中的商品
     */
    increaseQuantity(item) {
      item.quantity++;
      this.updateCartInfo();
    },
    
    /**
     * 更新购物车信息（数量和总价）
     */
    updateCartInfo() {
      // 计算购物车商品总数
      this.cartCount = this.cartItems.reduce((total, item) => total + item.quantity, 0);
      
      // 计算购物车商品总价
      this.cartTotal = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
  }
}
</script>

<style scoped>
/* 品牌药企旗舰页面样式 */
.brand-flagship-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
}

/* 页面头部样式 */
.brand-header {
  background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.brand-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

.brand-nav-left {
  display: flex;
  align-items: center;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-logo-img {
  height: 40px;
  width: auto;
  border-radius: 4px;
}

.brand-logo-text {
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 1px;
}

.brand-nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.brand-search {
  position: relative;
  width: 400px;
}

.brand-search-input {
  width: 100%;
  padding: 12px 45px 12px 20px;
  border: none;
  border-radius: 25px;
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  outline: none;
  transition: all 0.3s ease;
}

.brand-search-input:focus {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.brand-search-btn {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  background: #ffffff;
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.brand-search-btn:hover {
  background: #f0f0f0;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
}

.brand-search-icon {
  font-size: 16px;
  color: #3498db;
}

.brand-nav-links {
  display: flex;
  gap: 20px;
}

.brand-nav-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 15px;
  border-radius: 20px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 5px;
}

.brand-nav-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.brand-cart-count {
  background: #e74c3c;
  color: #ffffff;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 10px;
  margin-left: 3px;
}

/* 品牌Banner样式 */
.brand-banner {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 60px 0;
  color: #ffffff;
  text-align: center;
}

.brand-banner-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 15px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.brand-banner-subtitle {
  font-size: 18px;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

/* 品牌分类导航样式 */
.brand-category-nav {
  background: #ffffff;
  padding: 20px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.brand-category-list {
  display: flex;
  gap: 30px;
  overflow-x: auto;
  padding: 10px 0;
}

.brand-category-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: #f8f9fa;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
  font-weight: 500;
  color: #666;
  white-space: nowrap;
}

.brand-category-item:hover {
  background: #e9ecef;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.brand-category-item.active {
  background: #3498db;
  color: #ffffff;
  box-shadow: 0 4px 10px rgba(52, 152, 219, 0.3);
}

.brand-category-icon {
  font-size: 20px;
}

/* 品牌药企列表样式 */
.brand-companies-section {
  padding: 60px 0;
}

.brand-section-title {
  font-size: 32px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 40px;
  text-align: center;
  position: relative;
}

.brand-section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, #3498db, #9b59b6);
  border-radius: 2px;
}

.brand-companies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 30px;
}

.brand-company-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 20px;
}

.brand-company-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.brand-company-logo {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  flex-shrink: 0;
}

.brand-company-logo-img {
  width: 80%;
  height: 80%;
  object-fit: contain;
}

.brand-company-info {
  flex: 1;
}

.brand-company-name {
  font-size: 20px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
}

.brand-company-desc {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
  line-height: 1.5;
}

.brand-company-stats {
  display: flex;
  gap: 20px;
}

.brand-company-stat {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: #999;
}

.brand-stat-icon {
  font-size: 16px;
}

/* 热门产品推荐样式 */
.brand-products-section {
  padding: 60px 0;
  background: #f8f9fa;
}

.brand-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.brand-view-more {
  font-size: 14px;
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.brand-view-more:hover {
  color: #2980b9;
  text-decoration: underline;
}

.brand-products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

.brand-product-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
}

.brand-product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.brand-product-image-container {
  position: relative;
  width: 100%;
  height: 200px;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-product-image {
  width: 80%;
  height: 80%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.brand-product-card:hover .brand-product-image {
  transform: scale(1.05);
}

.brand-product-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background: #3498db;
  color: #ffffff;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 600;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.brand-product-badge.hot {
  background: #e74c3c;
}

.brand-product-info {
  padding: 20px;
}

.brand-product-name {
  font-size: 16px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
  line-height: 1.4;
  height: 45px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.brand-product-spec {
  font-size: 13px;
  color: #999;
  margin-bottom: 12px;
}

.brand-product-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 15px;
}

.brand-product-brand-logo {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
}

.brand-product-brand-name {
  font-size: 13px;
  color: #666;
  font-weight: 500;
}

.brand-product-price {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.brand-product-current-price {
  font-size: 20px;
  font-weight: 700;
  color: #e74c3c;
}

.brand-product-original-price {
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
}

.brand-product-action {
  display: flex;
  justify-content: center;
}

.brand-add-to-cart {
  width: 100%;
  padding: 12px;
  background: #3498db;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.brand-add-to-cart:hover {
  background: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
}

/* 页脚样式 */
.order-footer {
  background: linear-gradient(to bottom, #2c3e50, #34495e);
  color: #ecf0f1;
  padding-top: 40px;
  margin-top: 60px;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.1);
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 30px;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-link {
  color: #bdc3c7;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  padding-bottom: 5px;
}

.footer-link:hover {
  color: #ffffff;
  transform: translateY(-2px);
}

.footer-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #ffffff;
  transition: width 0.3s ease;
}

.footer-link:hover::after {
  width: 100%;
}

.footer-contact {
  text-align: right;
  color: #bdc3c7;
  font-size: 14px;
}

.copyright {
  text-align: center;
  padding-top: 20px;
  margin-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #95a5a6;
  font-size: 14px;
}

/* 购物车侧边栏样式 */
.health-cart-sidebar {
  position: fixed;
  right: -400px;
  top: 0;
  width: 400px;
  height: 100vh;
  background: #ffffff;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease;
  z-index: 1000;
  display: flex;
  flex-direction: column;
}

.health-cart-sidebar.open {
  right: 0;
}

.health-cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.health-cart-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
}

.health-cart-close {
  background: none;
  border: none;
  font-size: 24px;
  color: #666;
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.health-cart-close:hover {
  background: #f8f9fa;
  color: #333;
}

.health-cart-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.health-cart-empty {
  text-align: center;
  padding: 50px 0;
  color: #999;
  font-size: 16px;
}

.health-cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.health-cart-item-info {
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 1;
}

.health-cart-item-image {
  width: 60px;
  height: 60px;
  background: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.health-cart-item-image img {
  width: 80%;
  height: 80%;
  object-fit: contain;
}

.health-cart-item-details {
  flex: 1;
}

.health-cart-item-details h4 {
  margin: 0 0 5px 0;
  font-size: 14px;
  font-weight: 600;
  color: #2c3e50;
  line-height: 1.4;
}

.health-cart-item-details p {
  margin: 0 0 5px 0;
  font-size: 12px;
  color: #999;
}

.health-cart-item-price {
  font-size: 14px;
  font-weight: 700;
  color: #e74c3c;
  margin: 0;
}

.health-cart-item-quantity {
  display: flex;
  align-items: center;
  gap: 10px;
}

.health-cart-btn {
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
}

.health-cart-btn:hover {
  background: #f8f9fa;
  border-color: #3498db;
}

.health-cart-quantity {
  min-width: 30px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
}

.health-cart-footer {
  padding: 20px;
  border-top: 1px solid #eee;
  background: #f8f9fa;
}

.health-cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 600;
  color: #2c3e50;
}

.health-cart-total-price {
  font-size: 20px;
  color: #e74c3c;
}

.health-cart-checkout {
  width: 100%;
  padding: 15px;
  background: #3498db;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.health-cart-checkout:hover {
  background: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
}

.health-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 999;
}

.health-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .brand-nav {
    flex-direction: column;
    gap: 15px;
    padding: 15px 0;
  }
  
  .brand-search {
    width: 100%;
  }
  
  .brand-banner-title {
    font-size: 32px;
  }
  
  .brand-companies-grid {
    grid-template-columns: 1fr;
  }
  
  .brand-products-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  .brand-company-card {
    flex-direction: column;
    text-align: center;
  }
  
  .brand-company-logo {
    margin-right: 0;
    margin-bottom: 15px;
  }
  
  .footer-content {
    flex-direction: column;
    gap: 20px;
  }
  
  .footer-contact {
    text-align: center;
  }
  
  .health-cart-sidebar {
    width: 100%;
    right: -100%;
  }
}
</style>