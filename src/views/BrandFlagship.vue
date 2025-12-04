<template>
  <div class="brand-flagship-container">
    <!-- 页面头部 -->
    <header class="brand-header">
      <div class="health-container">
        <!-- 导航栏 -->
        <nav class="brand-nav">
          <div class="brand-nav-left">
            <h1 class="brand-logo">
              <img src="../assets/logo.png" alt="乐之药" class="brand-logo-img">
              <span class="brand-logo-text">乐之药</span>
            </h1>
          </div>
          <div class="brand-nav-center">
            <a href="/shop" class="brand-main-nav">商城首页</a>
            <a href="#" class="brand-main-nav">在线下单</a>
            <a href="/brand-flagship" class="brand-main-nav active">旗舰店</a>
            <a href="#" class="brand-main-nav">首推单品包邮</a>
            <a href="#" class="brand-main-nav">药速拼</a>
            <a href="#" class="brand-main-nav">中药馆</a>
            <a href="#" class="brand-main-nav">非药馆</a>
            <a href="#" class="brand-main-nav">智能采购</a>
          </div>
          <div class="brand-nav-right">
            <div class="brand-search">
              <input type="text" v-model="searchKeyword" placeholder="搜索药品、品牌" class="brand-search-input">
              <button class="brand-search-btn">
                <span class="brand-search-icon">🔍</span>
              </button>
            </div>
            <div class="brand-nav-links">
              <a href="#" class="brand-nav-link" @click="toggleCart">
                <span class="brand-nav-icon">🛒</span>
                <span class="brand-cart-count">{{ cartCount }}</span>
              </a>
            </div>
          </div>
        </nav>
        
        <!-- 促销活动区域 -->
        <div class="brand-promotions">
          <div class="brand-coupons">
            <div class="brand-coupon">
              <span class="brand-coupon-title">有优惠券</span>
            </div>
            <div class="brand-coupon">
              <span class="brand-coupon-title">支持货到付款</span>
            </div>
            <div class="brand-coupon">
              <span class="brand-coupon-title">顺丰包邮</span>
            </div>
            <div class="brand-coupon">
              <span class="brand-coupon-title">首单专享</span>
            </div>
            <div class="brand-coupon">
              <span class="brand-coupon-title">康泽</span>
            </div>
            <div class="brand-coupon">
              <span class="brand-coupon-title">齐乐</span>
            </div>
            <div class="brand-coupon">
              <span class="brand-coupon-title">开鑫券</span>
            </div>
          </div>
          
          <!-- 配送方式 -->
          <div class="brand-delivery">
            <div class="brand-delivery-item">
              <span class="brand-delivery-title">起配金额</span>
              <div class="brand-delivery-options">
                <span class="brand-delivery-option">0-300</span>
                <span class="brand-delivery-option">300-500</span>
                <span class="brand-delivery-option">500-1000</span>
                <span class="brand-delivery-option">1000以上</span>
              </div>
            </div>
            <div class="brand-delivery-item">
              <span class="brand-delivery-title">经营类别</span>
              <div class="brand-delivery-options">
                <span class="brand-delivery-option">注射剂</span>
                <span class="brand-delivery-option">西药</span>
                <span class="brand-delivery-option">OTC药</span>
                <span class="brand-delivery-option">处方药</span>
                <span class="brand-delivery-option">中药饮片</span>
                <span class="brand-delivery-option">中药饮片</span>
                <span class="brand-delivery-option">中药饮片</span>
                <span class="brand-delivery-option">中药饮片</span>
                <span class="brand-delivery-option">中药饮片</span>
              </div>
            </div>
          </div>
          
          <!-- 配送承诺 -->
          <div class="brand-delivery-promises">
            <div class="brand-promise-item">
              <span class="brand-promise-icon">🚚</span>
              <span class="brand-promise-text">今日特价</span>
            </div>
            <div class="brand-promise-item">
              <span class="brand-promise-icon">⚡</span>
              <span class="brand-promise-text">药超惠推荐</span>
            </div>
            <div class="brand-promise-item">
              <span class="brand-promise-icon">📦</span>
              <span class="brand-promise-text">按评价从高到低</span>
            </div>
            <div class="brand-promise-item">
              <span class="brand-promise-icon">📞</span>
              <span class="brand-promise-text">按起配金额从低到高</span>
            </div>
          </div>
        </div>
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
            <p>知识产权管理平台：dian.lezhiyao.cn</p>
          </div>
        </div>
        <div class="copyright">
          <p>Copyright@2015-2024 乐之药dian.lezhiyao.cn版权所有</p>
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
  background-color: #ffffff;
}

/* 页面头部样式 */
.brand-header {
  background: #ffffff;
  border-bottom: 2px solid #ff8800;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
}

.brand-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
}

.brand-nav-left {
  display: flex;
  align-items: center;
  width: auto;
}

.brand-nav-center {
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 18px;
}

.brand-main-nav {
  color: #333;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 3px;
  transition: all 0.3s ease;
  position: relative;
}

.brand-main-nav:hover {
  color: #ff8800;
  background: #fff3e0;
}

.brand-main-nav.active {
  color: #ff8800;
  background: #fff3e0;
  border-bottom: none;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.brand-logo-img {
  height: 35px;
  width: auto;
}

.brand-logo-text {
  font-size: 18px;
  font-weight: 700;
  color: #ff8800;
  letter-spacing: 1px;
}

.brand-nav-right {
  display: flex;
  align-items: center;
  gap: 12px;
  width: auto;
  justify-content: flex-end;
}

.brand-search {
  position: relative;
  width: 280px;
  background: #f5f5f5;
  border-radius: 18px;
  padding: 5px 10px;
}

.brand-search-input {
  width: 100%;
  padding: 7px 35px 7px 10px;
  border: none;
  background: transparent;
  border-radius: 18px;
  font-size: 13px;
  outline: none;
  transition: all 0.3s ease;
}

.brand-search-input:focus {
  background: #ffffff;
  border-color: #ff8800;
  box-shadow: 0 0 5px rgba(255, 136, 0, 0.3);
}

.brand-search-btn {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  background: #ff8800;
  border: none;
  border-radius: 13px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.brand-search-btn:hover {
  background: #ff7700;
  transform: translateY(-50%) translateY(-1px);
  box-shadow: 0 3px 8px rgba(255, 136, 0, 0.3);
}

.brand-search-icon {
  font-size: 12px;
  color: #ffffff;
}

.brand-nav-links {
  display: flex;
  gap: 15px;
}

.brand-nav-link {
  color: #333;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 4px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 5px;
}

.brand-nav-link:hover {
  background: #f8f8f8;
}

.brand-cart-count {
  background: #ff0000;
  color: #ffffff;
  font-size: 11px;
  padding: 1px 5px;
  border-radius: 10px;
  margin-left: 3px;
}

/* 促销活动区域样式 */
.brand-promotions {
  background: linear-gradient(135deg, #fff4e6 0%, #ffe8cc 100%);
  padding: 15px 0;
  border-top: 1px solid #ffe0b2;
  border-bottom: 1px solid #ffe0b2;
}

.brand-coupons {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.brand-coupon {
  background: #fff;
  border: 1px solid #ffcc80;
  border-radius: 20px;
  padding: 6px 15px;
  font-size: 13px;
  font-weight: 500;
  color: #ff8800;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.brand-coupon:hover {
  background: #ff8800;
  color: #fff;
  transform: translateY(-1px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

.brand-delivery {
  display: flex;
  gap: 30px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.brand-delivery-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex-direction: column;
}

.brand-delivery-title {
  font-size: 13px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.brand-delivery-options {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.brand-delivery-option {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 15px;
  padding: 5px 12px;
  font-size: 12px;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
}

.brand-delivery-option:hover {
  border-color: #ff8800;
  color: #ff8800;
}

.brand-delivery-promises {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.brand-promise-item {
  display: flex;
  align-items: center;
  gap: 5px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 6px 15px;
  font-size: 12px;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
}

.brand-promise-item:hover {
  border-color: #ff8800;
  color: #ff8800;
  box-shadow: 0 2px 4px rgba(255, 136, 0, 0.1);
}

.brand-promise-icon {
  font-size: 14px;
}

/* 品牌Banner样式 */
.brand-banner {
  background: linear-gradient(135deg, #fff9f2 0%, #fff4e6 100%);
  padding: 20px 0;
  color: #ff8800;
  text-align: left;
  border-bottom: 1px solid #ffe0b2;
}

.brand-banner-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
}

.brand-banner-subtitle {
  font-size: 14px;
  color: #666;
}

/* 品牌分类导航样式 */
.brand-category-nav {
  background: #ffffff;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
}

.brand-category-list {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 5px 0;
}

.brand-category-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: #f5f5f5;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 13px;
  font-weight: 500;
  color: #666;
  white-space: nowrap;
}

.brand-category-item:hover {
  background: #ffe8cc;
  color: #ff8800;
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.brand-category-item.active {
  background: #ff8800;
  color: #ffffff;
  box-shadow: 0 2px 6px rgba(255, 136, 0, 0.3);
}

.brand-category-icon {
  font-size: 16px;
}

/* 品牌药企列表样式 */
.brand-companies-section {
  padding: 30px 0;
  background: #fafafa;
}

.brand-section-title {
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin-bottom: 25px;
  text-align: left;
  padding-left: 5px;
  border-left: 3px solid #ff8800;
  position: relative;
}

.brand-section-title::after {
  display: none;
}

.brand-companies-grid {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 15px;
}

.brand-company-card {
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  min-width: 220px;
  border: 1px solid #f0f0f0;
}

.brand-company-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.12);
}

.brand-company-logo {
  width: 100%;
  height: 120px;
  background: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #f0f0f0;
}

.brand-company-logo-img {
  width: 80%;
  height: 80%;
  object-fit: contain;
}

.brand-company-info {
  padding: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.brand-company-name {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 6px;
}

.brand-company-desc {
  font-size: 12px;
  color: #666;
  margin-bottom: 12px;
  line-height: 1.4;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.brand-company-stats {
  display: flex;
  gap: 15px;
  padding-top: 10px;
  border-top: 1px dashed #eee;
}

.brand-company-stat {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #999;
}

.brand-stat-icon {
  font-size: 14px;
}

/* 热门产品推荐样式 */
.brand-products-section {
  padding: 30px 0;
  background: #ffffff;
}

.brand-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f0f0f0;
}

.brand-view-more {
  font-size: 13px;
  color: #ff8800;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.brand-view-more:hover {
  color: #ff7700;
  text-decoration: underline;
}

.brand-products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

.brand-product-card {
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  border: 1px solid #f0f0f0;
}

.brand-product-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.12);
}

.brand-product-image-container {
  position: relative;
  width: 100%;
  height: 150px;
  background: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-product-image {
  width: 70%;
  height: 70%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.brand-product-card:hover .brand-product-image {
  transform: scale(1.05);
}

.brand-product-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #ff8800;
  color: #ffffff;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.brand-product-badge.hot {
  background: #ff0000;
}

.brand-product-info {
  padding: 15px;
}

.brand-product-name {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 6px;
  line-height: 1.3;
  height: 36px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.brand-product-spec {
  font-size: 12px;
  color: #999;
  margin-bottom: 8px;
}

.brand-product-brand {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
}

.brand-product-brand-logo {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  object-fit: cover;
}

.brand-product-brand-name {
  font-size: 12px;
  color: #666;
}

.brand-product-price {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 10px;
}

.brand-product-current-price {
  font-size: 18px;
  font-weight: 700;
  color: #ff0000;
}

.brand-product-original-price {
  font-size: 12px;
  color: #999;
  text-decoration: line-through;
}

.brand-product-action {
  margin-top: 8px;
}

.brand-add-to-cart {
  width: 100%;
  background: #ff8800;
  color: #ffffff;
  border: none;
  padding: 10px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.brand-add-to-cart:hover {
  background: #ff7700;
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(255, 136, 0, 0.3);
}

/* 页脚样式 */
.order-footer {
  background: #f5f5f5;
  color: #666;
  padding: 20px 0;
  margin-top: auto;
  border-top: 1px solid #e0e0e0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-links {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.footer-link {
  color: #666;
  text-decoration: none;
  font-size: 13px;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #ff8800;
}

.footer-contact {
  text-align: right;
  font-size: 13px;
}

.copyright {
  text-align: center;
  padding-top: 15px;
  border-top: 1px solid #e0e0e0;
  font-size: 12px;
  color: #999;
}

/* 购物车侧边栏样式 */
.health-cart-sidebar {
  position: fixed;
  right: -350px;
  top: 0;
  width: 350px;
  height: 100vh;
  background: #ffffff;
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: right 0.3s ease;
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
  padding: 15px 20px;
  border-bottom: 1px solid #f0f0f0;
}

.health-cart-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.health-cart-close {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #666;
  transition: color 0.3s ease;
}

.health-cart-close:hover {
  color: #333;
}

.health-cart-content {
  flex: 1;
  overflow-y: auto;
  padding: 15px;
}

.health-cart-empty {
  text-align: center;
  padding: 30px 0;
  color: #999;
  font-size: 14px;
}

.health-cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
}

.health-cart-item-info {
  display: flex;
  gap: 12px;
  align-items: center;
}

.health-cart-item-image {
  width: 50px;
  height: 50px;
  background: #f8f9fa;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.health-cart-item-image img {
  width: 70%;
  height: 70%;
  object-fit: contain;
}

.health-cart-item-details {
  flex: 1;
}

.health-cart-item-details h4 {
  margin: 0 0 4px 0;
  font-size: 13px;
  font-weight: 600;
  color: #333;
  line-height: 1.3;
}

.health-cart-item-details p {
  margin: 0 0 4px 0;
  font-size: 11px;
  color: #999;
}

.health-cart-item-price {
  font-size: 13px;
  font-weight: 600;
  color: #ff0000;
}

.health-cart-item-quantity {
  display: flex;
  align-items: center;
  gap: 8px;
}

.health-cart-btn {
  width: 22px;
  height: 22px;
  border: 1px solid #ddd;
  background: #ffffff;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.3s ease;
}

.health-cart-btn:hover {
  background: #f0f0f0;
  border-color: #999;
}

.health-cart-quantity {
  font-size: 13px;
  color: #333;
  min-width: 18px;
  text-align: center;
}

.health-cart-footer {
  padding: 15px;
  border-top: 1px solid #f0f0f0;
  background: #fafafa;
}

.health-cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.health-cart-total span:first-child {
  font-size: 13px;
  color: #666;
}

.health-cart-total-price {
  font-size: 18px;
  font-weight: 700;
  color: #ff0000;
}

.health-cart-checkout {
  width: 100%;
  background: #ff8800;
  color: #ffffff;
  border: none;
  padding: 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.health-cart-checkout:hover {
  background: #ff7700;
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(255, 136, 0, 0.3);
}

.health-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.health-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* 全局样式调整 */
.health-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
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