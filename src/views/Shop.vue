<template>
  <div class="health-shop-container">


    <!-- 主要内容区域 -->
    <main class="health-main">
      <div class="health-container">
        <!-- 轮播图和促销区 -->
        <div class="health-banner-section">
          <!-- 轮播图 -->
          <div class="health-carousel">
            <div class="health-carousel-content">
              <h2>健康供应链集采平台</h2>
              <p>专业药品、医疗器械集中采购服务</p>
              <button class="health-carousel-btn">开始集采</button>
            </div>
          </div>
          
          <!-- 右侧促销广告 -->
          <div class="health-promotions">
            <div class="health-promotion-item">
              <h3>集采助手</h3>
              <p>智能推荐最佳采购方案</p>
              <button class="health-promotion-btn">立即体验</button>
            </div>
            <div class="health-promotion-item">
              <h3>AI集采规划师</h3>
              <p>智能分析采购需求</p>
              <button class="health-promotion-btn">开始规划</button>
            </div>
          </div>
        </div>
               
        <!-- 快捷入口 -->
        <div class="health-quick-entry">
          <router-link to="/brand-flagship" class="health-quick-entry-item">
            <span class="health-quick-entry-icon">🏢</span>
            <span class="health-quick-entry-text">品牌药企旗舰</span>
          </router-link>
          <div class="health-quick-entry-item">
            <span class="health-quick-entry-icon">📋</span>
            <span class="health-quick-entry-text">集采助手</span>
          </div>
          <div class="health-quick-entry-item">
            <span class="health-quick-entry-icon">📦</span>
            <span class="health-quick-entry-text">集采包邮优选</span>
          </div>
          <div class="health-quick-entry-item">
            <span class="health-quick-entry-icon">👥</span>
            <span class="health-quick-entry-text">集采拼单惠</span>
          </div>
          <div class="health-quick-entry-item">
            <span class="health-quick-entry-icon">🌿</span>
            <span class="health-quick-entry-text">中药集采专区</span>
          </div>
          <div class="health-quick-entry-item">
            <span class="health-quick-entry-icon">🏥</span>
            <span class="health-quick-entry-text">健康器械专区</span>
          </div>
          <div class="health-quick-entry-item">
            <span class="health-quick-entry-icon">🤖</span>
            <span class="health-quick-entry-text">AI集采规划师</span>
          </div>
        </div>

        <!-- 全部商品 -->
        <div class="health-category-section">
          <div class="health-category-header">
            <h2 class="health-category-title">全部商品</h2>
          </div>
          <div class="health-category-products">
            <!-- 品牌药企旗舰产品 -->
            <div v-for="product in brandProducts" :key="product.id" class="health-product-card">
              <div class="health-product-image-container">
                <img :src="product.image" :alt="product.name" class="health-product-image">
                <div v-if="product.manufacturer" class="health-product-manufacturer">{{ product.manufacturer }}</div>
              </div>
              <h3 class="health-product-name">{{ product.name }}</h3>
              <p class="health-product-spec">{{ product.spec }}</p>
              <div class="health-product-price-container">
                <span class="health-product-price">集采价: ¥{{ product.price }}</span>
                <span v-if="product.minOrder" class="health-product-min-order">起订量: {{ product.minOrder }}</span>
              </div>
              <div class="health-product-bottom">
                <span class="health-product-stock">库存: {{ product.stock }}</span>
                <button class="health-add-to-cart" @click="addToCart(product)">加入集采清单</button>
              </div>
            </div>
            
            <!-- 集采包邮优选产品 -->
            <div v-for="product in freeShippingProducts" :key="product.id" class="health-product-card">
              <div class="health-product-image-container">
                <img :src="product.image" :alt="product.name" class="health-product-image">
                <div class="health-product-free-shipping">包邮</div>
              </div>
              <h3 class="health-product-name">{{ product.name }}</h3>
              <p class="health-product-spec">{{ product.spec }}</p>
              <div class="health-product-price-container">
                <span class="health-product-price">集采价: ¥{{ product.price }}</span>
                <span class="health-product-free-shipping-tag">满额包邮</span>
              </div>
              <div class="health-product-bottom">
                <span class="health-product-stock">库存: {{ product.stock }}</span>
                <button class="health-add-to-cart" @click="addToCart(product)">加入集采清单</button>
              </div>
            </div>
            
            <!-- 中药集采专区产品 -->
            <div v-for="product in traditionalChineseMedicine" :key="product.id" class="health-product-card">
              <div class="health-product-image-container">
                <img :src="product.image" :alt="product.name" class="health-product-image">
                <div class="health-product-tcm">中药材</div>
              </div>
              <h3 class="health-product-name">{{ product.name }}</h3>
              <p class="health-product-spec">{{ product.spec }}</p>
              <div class="health-product-price-container">
                <span class="health-product-price">集采价: ¥{{ product.price }}</span>
              </div>
              <div class="health-product-bottom">
                <span class="health-product-stock">库存: {{ product.stock }}</span>
                <button class="health-add-to-cart" @click="addToCart(product)">加入集采清单</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- 集采清单侧边栏 -->
    <div class="health-cart-sidebar" :class="{ 'health-cart-sidebar-open': isCartOpen }">
      <div class="health-cart-header">
        <h3>集采清单</h3>
        <button class="health-cart-close" @click="closeCart">×</button>
      </div>
      <div class="health-cart-content">
        <div v-if="cartItems.length === 0" class="health-cart-empty">
          <p>集采清单为空</p>
        </div>
        <div v-else>
          <div v-for="item in cartItems" :key="item.id" class="health-cart-item">
            <div class="health-cart-item-info">
              <h4 class="health-cart-item-name">{{ item.name }}</h4>
              <p class="health-cart-item-spec">{{ item.spec }}</p>
              <div class="health-cart-item-price">¥{{ item.price }}</div>
            </div>
            <div class="health-cart-item-controls">
              <button class="health-cart-item-decrease" @click="decreaseQuantity(item)">-</button>
              <span class="health-cart-item-quantity">{{ item.quantity }}</span>
              <button class="health-cart-item-increase" @click="increaseQuantity(item)">+</button>
            </div>
          </div>
        </div>
      </div>
      <div class="health-cart-footer">
        <div class="health-cart-total">
          <span>合计：</span>
          <span class="health-cart-total-price">¥{{ cartTotal }}</span>
        </div>
        <button class="health-cart-checkout">提交集采订单</button>
      </div>
    </div>
    
    <!-- 遮罩层 -->
    <div v-if="isCartOpen" class="health-overlay" @click="closeCart"></div>
    

  </div>
</template>

<script>
// 导入京东风格CSS样式
import '../assets/jd-style.css';

export default {
  name: 'YpsbShop',
  data() {
    return {
      // 搜索关键词
      searchKeyword: '',
      // 购物车状态
      isCartOpen: false,
      cartItems: [],
      cartCount: 0,
      
      // 品牌药企旗舰产品数据
      brandProducts: [
        {
          id: 1,
          name: '阿莫西林胶囊',
          spec: '0.25g*24粒/盒',
          price: 12.5,
          stock: 500,
          manufacturer: '华北制药',
          minOrder: '10盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine1'
        },
        {
          id: 2,
          name: '盐酸左氧氟沙星片',
          spec: '0.1g*12片/盒',
          price: 25.8,
          stock: 300,
          manufacturer: '石药集团',
          minOrder: '5盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine2'
        },
        {
          id: 3,
          name: '布洛芬缓释胶囊',
          spec: '0.3g*20粒/盒',
          price: 18.9,
          stock: 400,
          manufacturer: '哈药集团',
          minOrder: '10盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine3'
        },
        {
          id: 4,
          name: '复方板蓝根颗粒',
          spec: '10g*20袋/盒',
          price: 22.6,
          stock: 250,
          manufacturer: '白云山',
          minOrder: '8盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine4'
        },
        {
          id: 13,
          name: '头孢克肟胶囊',
          spec: '0.1g*12粒/盒',
          price: 35.8,
          stock: 280,
          manufacturer: '华北制药',
          minOrder: '5盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine13'
        },
        {
          id: 14,
          name: '罗红霉素分散片',
          spec: '0.15g*12片/盒',
          price: 28.5,
          stock: 350,
          manufacturer: '石药集团',
          minOrder: '8盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine14'
        },
        {
          id: 15,
          name: '对乙酰氨基酚片',
          spec: '0.5g*20片/盒',
          price: 15.6,
          stock: 420,
          manufacturer: '哈药集团',
          minOrder: '10盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine15'
        },
        {
          id: 16,
          name: '感冒灵颗粒',
          spec: '10g*9袋/盒',
          price: 20.8,
          stock: 300,
          manufacturer: '白云山',
          minOrder: '6盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine16'
        },
        {
          id: 33,
          name: '头孢拉定胶囊',
          spec: '0.25g*24粒/盒',
          price: 18.5,
          stock: 450,
          manufacturer: '华北制药',
          minOrder: '8盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine33'
        },
        {
          id: 34,
          name: '诺氟沙星胶囊',
          spec: '0.1g*24粒/盒',
          price: 12.8,
          stock: 600,
          manufacturer: '石药集团',
          minOrder: '10盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine34'
        },
        {
          id: 35,
          name: '乙酰螺旋霉素片',
          spec: '0.1g*24片/盒',
          price: 22.6,
          stock: 380,
          manufacturer: '哈药集团',
          minOrder: '6盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine35'
        },
        {
          id: 36,
          name: '复方甘草片',
          spec: '100片/瓶',
          price: 28.5,
          stock: 250,
          manufacturer: '白云山',
          minOrder: '5盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine36'
        },
        {
          id: 37,
          name: '盐酸氨溴索口服液',
          spec: '100ml/瓶',
          price: 32.8,
          stock: 400,
          manufacturer: '华北制药',
          minOrder: '6盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine37'
        },
        {
          id: 38,
          name: '马来酸氯苯那敏片',
          spec: '4mg*100片/瓶',
          price: 8.5,
          stock: 800,
          manufacturer: '石药集团',
          minOrder: '10盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine38'
        },
        {
          id: 39,
          name: '维生素C片',
          spec: '0.1g*100片/瓶',
          price: 15.8,
          stock: 700,
          manufacturer: '哈药集团',
          minOrder: '8盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine39'
        },
        {
          id: 40,
          name: '复合维生素B片',
          spec: '100片/瓶',
          price: 12.6,
          stock: 650,
          manufacturer: '白云山',
          minOrder: '10盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine40'
        },
        {
          id: 41,
          name: '葡萄糖酸钙口服液',
          spec: '10ml*12支/盒',
          price: 25.8,
          stock: 500,
          manufacturer: '华北制药',
          minOrder: '8盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine41'
        },
        {
          id: 42,
          name: '布洛芬混悬液',
          spec: '100ml/瓶',
          price: 38.5,
          stock: 350,
          manufacturer: '石药集团',
          minOrder: '6盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine42'
        },
        {
          id: 43,
          name: '小儿氨酚黄那敏颗粒',
          spec: '6g*10袋/盒',
          price: 22.6,
          stock: 450,
          manufacturer: '哈药集团',
          minOrder: '8盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine43'
        },
        {
          id: 44,
          name: '盐酸雷尼替丁胶囊',
          spec: '150mg*24粒/盒',
          price: 18.5,
          stock: 550,
          manufacturer: '白云山',
          minOrder: '10盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine44'
        },
        {
          id: 45,
          name: '多潘立酮片',
          spec: '10mg*30片/盒',
          price: 28.8,
          stock: 400,
          manufacturer: '华北制药',
          minOrder: '6盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine45'
        },
        {
          id: 46,
          name: '复方氢氧化铝片',
          spec: '100片/瓶',
          price: 12.5,
          stock: 700,
          manufacturer: '石药集团',
          minOrder: '10盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine46'
        },
        {
          id: 47,
          name: '阿莫西林克拉维酸钾片',
          spec: '0.375g*6片/盒',
          price: 45.8,
          stock: 250,
          manufacturer: '哈药集团',
          minOrder: '5盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine47'
        },
        {
          id: 48,
          name: '头孢克洛胶囊',
          spec: '0.25g*12粒/盒',
          price: 32.6,
          stock: 350,
          manufacturer: '白云山',
          minOrder: '6盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine48'
        },
        {
          id: 49,
          name: '盐酸克林霉素棕榈酸酯分散片',
          spec: '75mg*12片/盒',
          price: 52.8,
          stock: 200,
          manufacturer: '华北制药',
          minOrder: '4盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine49'
        },
        {
          id: 50,
          name: '罗红霉素胶囊',
          spec: '0.15g*12粒/盒',
          price: 28.5,
          stock: 400,
          manufacturer: '石药集团',
          minOrder: '8盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine50'
        },
        {
          id: 51,
          name: '左氧氟沙星滴眼液',
          spec: '5ml:15mg/支',
          price: 35.6,
          stock: 300,
          manufacturer: '哈药集团',
          minOrder: '6盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine51'
        },
        {
          id: 52,
          name: '妥布霉素滴眼液',
          spec: '5ml:15mg/支',
          price: 28.5,
          stock: 350,
          manufacturer: '白云山',
          minOrder: '6盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine52'
        },
        {
          id: 53,
          name: '氧氟沙星滴耳液',
          spec: '5ml:15mg/支',
          price: 18.5,
          stock: 450,
          manufacturer: '华北制药',
          minOrder: '8盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine53'
        },
        {
          id: 54,
          name: '盐酸特比萘芬乳膏',
          spec: '15g/支',
          price: 22.6,
          stock: 400,
          manufacturer: '石药集团',
          minOrder: '10盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine54'
        },
        {
          id: 55,
          name: '硝酸咪康唑乳膏',
          spec: '20g/支',
          price: 18.5,
          stock: 500,
          manufacturer: '哈药集团',
          minOrder: '10盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine55'
        },
        {
          id: 56,
          name: '尿素乳膏',
          spec: '50g/支',
          price: 12.5,
          stock: 600,
          manufacturer: '白云山',
          minOrder: '10盒',
          image: 'https://via.placeholder.com/300x300?text=Medicine56'
        }
      ],
      // 集采包邮优选产品数据
      freeShippingProducts: [
        {
          id: 5,
          name: '医用外科口罩',
          spec: '50只/盒 三层防护',
          price: 19.9,
          stock: 1000,
          image: 'https://via.placeholder.com/300x300?text=Masks'
        },
        {
          id: 6,
          name: '75%医用酒精消毒液',
          spec: '500ml/瓶',
          price: 12.8,
          stock: 800,
          image: 'https://via.placeholder.com/300x300?text=Alcohol'
        },
        {
          id: 7,
          name: '一次性医用橡胶手套',
          spec: '100只/盒 无粉',
          price: 35.6,
          stock: 600,
          image: 'https://via.placeholder.com/300x300?text=Gloves'
        },
        {
          id: 8,
          name: '碘伏消毒液',
          spec: '100ml/瓶',
          price: 5.9,
          stock: 1200,
          image: 'https://via.placeholder.com/300x300?text=Iodine'
        },
        {
          id: 17,
          name: '医用防护服',
          spec: '1套/件 连体式',
          price: 85.0,
          stock: 400,
          image: 'https://via.placeholder.com/300x300?text=ProtectiveSuit'
        },
        {
          id: 18,
          name: 'N95口罩',
          spec: '20只/盒',
          price: 68.5,
          stock: 500,
          image: 'https://via.placeholder.com/300x300?text=N95Masks'
        },
        {
          id: 19,
          name: '医用护目镜',
          spec: '1副/件',
          price: 45.8,
          stock: 350,
          image: 'https://via.placeholder.com/300x300?text=Goggles'
        },
        {
          id: 20,
          name: '一次性医用帽',
          spec: '100只/袋',
          price: 22.6,
          stock: 800,
          image: 'https://via.placeholder.com/300x300?text=MedicalCap'
        },
        {
          id: 57,
          name: '一次性医用外科手套',
          spec: '100只/盒 无粉',
          price: 45.8,
          stock: 600,
          image: 'https://via.placeholder.com/300x300?text=SurgicalGloves'
        },
        {
          id: 58,
          name: '医用防护面罩',
          spec: '10只/盒 防雾',
          price: 85.0,
          stock: 400,
          image: 'https://via.placeholder.com/300x300?text=FaceShield'
        },
        {
          id: 59,
          name: '一次性防护服',
          spec: '10件/箱',
          price: 850.0,
          stock: 100,
          image: 'https://via.placeholder.com/300x300?text=ProtectiveSuit2'
        },
        {
          id: 60,
          name: '医用隔离鞋套',
          spec: '100只/盒',
          price: 38.5,
          stock: 500,
          image: 'https://via.placeholder.com/300x300?text=ShoeCovers'
        },
        {
          id: 61,
          name: '医用酒精消毒湿巾',
          spec: '80片/包',
          price: 22.6,
          stock: 700,
          image: 'https://via.placeholder.com/300x300?text=AlcoholWipes'
        },
        {
          id: 62,
          name: '碘伏消毒棉棒',
          spec: '100支/盒',
          price: 18.5,
          stock: 800,
          image: 'https://via.placeholder.com/300x300?text=IodineSwabs'
        },
        {
          id: 63,
          name: '一次性使用输液器',
          spec: '100支/箱',
          price: 120.0,
          stock: 300,
          image: 'https://via.placeholder.com/300x300?text=IVSet'
        },
        {
          id: 64,
          name: '一次性使用注射器',
          spec: '1ml*100支/盒',
          price: 35.8,
          stock: 600,
          image: 'https://via.placeholder.com/300x300?text=Syringe1ml'
        },
        {
          id: 65,
          name: '一次性使用注射器',
          spec: '5ml*100支/盒',
          price: 42.6,
          stock: 550,
          image: 'https://via.placeholder.com/300x300?text=Syringe5ml'
        },
        {
          id: 66,
          name: '一次性使用无菌敷贴',
          spec: '10*10cm*50片/盒',
          price: 45.8,
          stock: 400,
          image: 'https://via.placeholder.com/300x300?text=Dressing'
        },
        {
          id: 67,
          name: '医用纱布绷带',
          spec: '6cm*600cm*10卷/盒',
          price: 32.6,
          stock: 500,
          image: 'https://via.placeholder.com/300x300?text=GauzeBandage'
        },
        {
          id: 68,
          name: '医用弹性绷带',
          spec: '7.5cm*450cm*10卷/盒',
          price: 48.5,
          stock: 350,
          image: 'https://via.placeholder.com/300x300?text=ElasticBandage'
        },
        {
          id: 69,
          name: '医用透气胶带',
          spec: '1.25cm*910cm*24卷/箱',
          price: 185.0,
          stock: 200,
          image: 'https://via.placeholder.com/300x300?text=MedicalTape'
        },
        {
          id: 70,
          name: '一次性使用导尿管',
          spec: '12Fr*20支/盒',
          price: 285.0,
          stock: 150,
          image: 'https://via.placeholder.com/300x300?text=Catheter'
        },
        {
          id: 71,
          name: '一次性使用胃管',
          spec: '16Fr*10支/盒',
          price: 185.0,
          stock: 180,
          image: 'https://via.placeholder.com/300x300?text=NGTube'
        },
        {
          id: 72,
          name: '一次性使用口罩',
          spec: '50只/盒 普通',
          price: 15.8,
          stock: 1000,
          image: 'https://via.placeholder.com/300x300?text=DisposableMask'
        },
        {
          id: 73,
          name: '医用N95口罩',
          spec: '25只/盒',
          price: 85.0,
          stock: 400,
          image: 'https://via.placeholder.com/300x300?text=N95Mask2'
        },
        {
          id: 74,
          name: 'KN95口罩',
          spec: '50只/盒',
          price: 125.0,
          stock: 300,
          image: 'https://via.placeholder.com/300x300?text=KN95Mask'
        },
        {
          id: 75,
          name: '一次性使用手术衣',
          spec: '20件/箱',
          price: 650.0,
          stock: 120,
          image: 'https://via.placeholder.com/300x300?text=SurgicalGown'
        },
        {
          id: 76,
          name: '一次性使用帽子',
          spec: '100只/盒 圆顶',
          price: 28.5,
          stock: 600,
          image: 'https://via.placeholder.com/300x300?text=DisposableCap'
        },
        {
          id: 77,
          name: '一次性使用手套',
          spec: '100只/盒 PE',
          price: 18.5,
          stock: 800,
          image: 'https://via.placeholder.com/300x300?text=PEGloves'
        },
        {
          id: 78,
          name: '一次性使用检查手套',
          spec: '100只/盒 丁腈',
          price: 58.5,
          stock: 450,
          image: 'https://via.placeholder.com/300x300?text=NitrileGloves'
        },
        {
          id: 79,
          name: '医用防护眼镜',
          spec: '10副/盒',
          price: 85.0,
          stock: 300,
          image: 'https://via.placeholder.com/300x300?text=SafetyGoggles'
        },
        {
          id: 80,
          name: '一次性使用引流袋',
          spec: '1000ml*20个/盒',
          price: 65.8,
          stock: 250,
          image: 'https://via.placeholder.com/300x300?text=DrainageBag'
        }
      ],
      // 中药集采专区产品数据
      traditionalChineseMedicine: [
        {
          id: 9,
          name: '黄芪',
          spec: '500g/袋 精选',
          price: 45.0,
          stock: 300,
          image: 'https://via.placeholder.com/300x300?text=Astragalus'
        },
        {
          id: 10,
          name: '当归',
          spec: '500g/袋 全归片',
          price: 68.0,
          stock: 200,
          image: 'https://via.placeholder.com/300x300?text=Angelica'
        },
        {
          id: 11,
          name: '枸杞',
          spec: '500g/袋 宁夏中宁',
          price: 58.0,
          stock: 400,
          image: 'https://via.placeholder.com/300x300?text=Goji'
        },
        {
          id: 12,
          name: '党参',
          spec: '500g/袋 纹党',
          price: 78.0,
          stock: 150,
          image: 'https://via.placeholder.com/300x300?text=Codonopsis'
        },
        {
          id: 21,
          name: '白术',
          spec: '500g/袋 生白术',
          price: 52.0,
          stock: 280,
          image: 'https://via.placeholder.com/300x300?text=Atractylodes'
        },
        {
          id: 22,
          name: '茯苓',
          spec: '500g/袋 白茯苓',
          price: 38.5,
          stock: 320,
          image: 'https://via.placeholder.com/300x300?text=Poria'
        },
        {
          id: 23,
          name: '川芎',
          spec: '500g/袋 川芎片',
          price: 65.8,
          stock: 200,
          image: 'https://via.placeholder.com/300x300?text=Ligusticum'
        },
        {
          id: 24,
          name: '甘草',
          spec: '500g/袋 炙甘草',
          price: 42.6,
          stock: 350,
          image: 'https://via.placeholder.com/300x300?text=Licorice'
        },
        {
          id: 25,
          name: '麦冬',
          spec: '500g/袋 川麦冬',
          price: 75.0,
          stock: 180,
          image: 'https://via.placeholder.com/300x300?text=Ophiopogon'
        },
        {
          id: 26,
          name: '五味子',
          spec: '500g/袋 北五味子',
          price: 88.5,
          stock: 150,
          image: 'https://via.placeholder.com/300x300?text=Schisandra'
        },
        {
          id: 27,
          name: '菊花',
          spec: '500g/袋 杭白菊',
          price: 48.0,
          stock: 220,
          image: 'https://via.placeholder.com/300x300?text=Chrysanthemum'
        },
        {
          id: 28,
          name: '金银花',
          spec: '500g/袋 山银花',
          price: 95.6,
          stock: 120,
          image: 'https://via.placeholder.com/300x300?text=Honeysuckle'
        },
        {
          id: 29,
          name: '黄芩',
          spec: '500g/袋 黄芩片',
          price: 68.5,
          stock: 180,
          image: 'https://via.placeholder.com/300x300?text=Scutellaria'
        },
        {
          id: 30,
          name: '黄连',
          spec: '250g/袋 鸡爪连',
          price: 128.0,
          stock: 90,
          image: 'https://via.placeholder.com/300x300?text=Coptis'
        },
        {
          id: 31,
          name: '地黄',
          spec: '500g/袋 生地黄',
          price: 42.8,
          stock: 250,
          image: 'https://via.placeholder.com/300x300?text=Rehmannia'
        },
        {
          id: 32,
          name: '白芍',
          spec: '500g/袋 白芍片',
          price: 58.6,
          stock: 200,
          image: 'https://via.placeholder.com/300x300?text=PeonyRoot'
        },
        {
          id: 81,
          name: '熟地黄',
          spec: '500g/袋',
          price: 65.8,
          stock: 180,
          image: 'https://via.placeholder.com/300x300?text=RehmanniaGlutinosa'
        },
        {
          id: 82,
          name: '川芎',
          spec: '500g/袋 川芎片',
          price: 72.6,
          stock: 150,
          image: 'https://via.placeholder.com/300x300?text=LigusticumChuanxiong'
        },
        {
          id: 83,
          name: '茯苓',
          spec: '500g/袋 白茯苓块',
          price: 42.8,
          stock: 280,
          image: 'https://via.placeholder.com/300x300?text=PoriaCocos'
        },
        {
          id: 84,
          name: '白术',
          spec: '500g/袋 白术片',
          price: 55.6,
          stock: 220,
          image: 'https://via.placeholder.com/300x300?text=AtractylodesMacrocephala'
        },
        {
          id: 85,
          name: '炙甘草',
          spec: '500g/袋',
          price: 48.5,
          stock: 300,
          image: 'https://via.placeholder.com/300x300?text=GlycyrrhizaUralensis'
        },
        {
          id: 86,
          name: '肉桂',
          spec: '500g/袋 肉桂片',
          price: 78.5,
          stock: 160,
          image: 'https://via.placeholder.com/300x300?text=CinnamomumCassia'
        },
        {
          id: 87,
          name: '干姜',
          spec: '500g/袋 干姜片',
          price: 38.5,
          stock: 250,
          image: 'https://via.placeholder.com/300x300?text=ZingiberOfficinale'
        },
        {
          id: 88,
          name: '大枣',
          spec: '500g/袋 新疆红枣',
          price: 35.8,
          stock: 320,
          image: 'https://via.placeholder.com/300x300?text=ZiziphusJujuba'
        },
        {
          id: 89,
          name: '麦冬',
          spec: '500g/袋 川麦冬',
          price: 68.5,
          stock: 180,
          image: 'https://via.placeholder.com/300x300?text=OphiopogonJaponicus'
        },
        {
          id: 90,
          name: '天冬',
          spec: '500g/袋 天冬片',
          price: 85.0,
          stock: 140,
          image: 'https://via.placeholder.com/300x300?text=AsparagusCochinchinensis'
        },
        {
          id: 91,
          name: '知母',
          spec: '500g/袋 知母片',
          price: 58.5,
          stock: 200,
          image: 'https://via.placeholder.com/300x300?text=AnemarrhenaAsphodeloides'
        },
        {
          id: 92,
          name: '黄柏',
          spec: '500g/袋 黄柏片',
          price: 48.5,
          stock: 240,
          image: 'https://via.placeholder.com/300x300?text=PhellodendronAmurense'
        },
        {
          id: 93,
          name: '栀子',
          spec: '500g/袋 栀子果',
          price: 35.8,
          stock: 280,
          image: 'https://via.placeholder.com/300x300?text=GardeniaJasminoides'
        },
        {
          id: 94,
          name: '连翘',
          spec: '500g/袋 连翘果',
          price: 85.0,
          stock: 120,
          image: 'https://via.placeholder.com/300x300?text=ForsythiaSuspensa'
        },
        {
          id: 95,
          name: '板蓝根',
          spec: '500g/袋 板蓝根片',
          price: 28.5,
          stock: 350,
          image: 'https://via.placeholder.com/300x300?text=IsatisIndigotica'
        },
        {
          id: 96,
          name: '大青叶',
          spec: '500g/袋 大青叶段',
          price: 22.6,
          stock: 380,
          image: 'https://via.placeholder.com/300x300?text=IsatisIndigoticaLeaf'
        },
        {
          id: 97,
          name: '蒲公英',
          spec: '500g/袋 蒲公英干',
          price: 25.8,
          stock: 400,
          image: 'https://via.placeholder.com/300x300?text=TaraxacumMongolicum'
        },
        {
          id: 98,
          name: '紫花地丁',
          spec: '500g/袋 紫花地丁干',
          price: 32.6,
          stock: 280,
          image: 'https://via.placeholder.com/300x300?text=ViolaPhilippica'
        },
        {
          id: 99,
          name: '鱼腥草',
          spec: '500g/袋 鱼腥草干',
          price: 22.6,
          stock: 320,
          image: 'https://via.placeholder.com/300x300?text=HouttuyniaCordata'
        },
        {
          id: 100,
          name: '败酱草',
          spec: '500g/袋 败酱草干',
          price: 28.5,
          stock: 250,
          image: 'https://via.placeholder.com/300x300?text=PatriniaScabiosifolia'
        },
        {
          id: 101,
          name: '红藤',
          spec: '500g/袋 红藤段',
          price: 35.8,
          stock: 220,
          image: 'https://via.placeholder.com/300x300?text=SargentodoxaCuneata'
        },
        {
          id: 102,
          name: '丹皮',
          spec: '500g/袋 牡丹皮',
          price: 58.5,
          stock: 180,
          image: 'https://via.placeholder.com/300x300?text=PaeoniaSuffruticosa'
        },
        {
          id: 103,
          name: '赤芍',
          spec: '500g/袋 赤芍片',
          price: 65.8,
          stock: 160,
          image: 'https://via.placeholder.com/300x300?text=PaeoniaLactiflora'
        },
        {
          id: 104,
          name: '桃仁',
          spec: '500g/袋 桃仁碎',
          price: 52.6,
          stock: 200,
          image: 'https://via.placeholder.com/300x300?text=PrunusPersica'
        },
        {
          id: 105,
          name: '红花',
          spec: '500g/袋 红花丝',
          price: 125.0,
          stock: 100,
          image: 'https://via.placeholder.com/300x300?text=CarthamusTinctorius'
        },
        {
          id: 106,
          name: '益母草',
          spec: '500g/袋 益母草干',
          price: 22.6,
          stock: 350,
          image: 'https://via.placeholder.com/300x300?text=LeonurusJaponicus'
        },
        {
          id: 107,
          name: '泽兰',
          spec: '500g/袋 泽兰干',
          price: 28.5,
          stock: 280,
          image: 'https://via.placeholder.com/300x300?text=LycopusLucidus'
        },
        {
          id: 108,
          name: '牛膝',
          spec: '500g/袋 怀牛膝',
          price: 58.5,
          stock: 180,
          image: 'https://via.placeholder.com/300x300?text=AchyranthesBidentata'
        },
        {
          id: 109,
          name: '川牛膝',
          spec: '500g/袋 川牛膝段',
          price: 65.8,
          stock: 160,
          image: 'https://via.placeholder.com/300x300?text=CyathulaOfficinalis'
        },
        {
          id: 110,
          name: '防己',
          spec: '500g/袋 防己片',
          price: 72.6,
          stock: 140,
          image: 'https://via.placeholder.com/300x300?text=StephaniaTetrandra'
        },
        {
          id: 111,
          name: '独活',
          spec: '500g/袋 独活片',
          price: 48.5,
          stock: 220,
          image: 'https://via.placeholder.com/300x300?text=AngelicaPubescens'
        },
        {
          id: 112,
          name: '羌活',
          spec: '500g/袋 羌活片',
          price: 85.0,
          stock: 120,
          image: 'https://via.placeholder.com/300x300?text=NotopterygiumIncisum'
        },
        {
          id: 113,
          name: '秦艽',
          spec: '500g/袋 秦艽片',
          price: 78.5,
          stock: 130,
          image: 'https://via.placeholder.com/300x300?text=GentianaMacrophylla'
        },
        {
          id: 114,
          name: '威灵仙',
          spec: '500g/袋 威灵仙段',
          price: 35.8,
          stock: 260,
          image: 'https://via.placeholder.com/300x300?text=ClematisChinensis'
        },
        {
          id: 115,
          name: '木瓜',
          spec: '500g/袋 宣木瓜片',
          price: 42.6,
          stock: 200,
          image: 'https://via.placeholder.com/300x300?text=ChaenomelesSinensis'
        },
        {
          id: 116,
          name: '伸筋草',
          spec: '500g/袋 伸筋草干',
          price: 28.5,
          stock: 300,
          image: 'https://via.placeholder.com/300x300?text=LycopodiumClavatum'
        },
        {
          id: 117,
          name: '海风藤',
          spec: '500g/袋 海风藤段',
          price: 32.6,
          stock: 240,
          image: 'https://via.placeholder.com/300x300?text=PiperKadsura'
        },
        {
          id: 118,
          name: '络石藤',
          spec: '500g/袋 络石藤段',
          price: 25.8,
          stock: 280,
          image: 'https://via.placeholder.com/300x300?text=TrachelospermumJasminoides'
        },
        {
          id: 119,
          name: '桑枝',
          spec: '500g/袋 桑枝段',
          price: 22.6,
          stock: 320,
          image: 'https://via.placeholder.com/300x300?text=MorusAlba'
        },
        {
          id: 120,
          name: '桑寄生',
          spec: '500g/袋 桑寄生段',
          price: 58.5,
          stock: 180,
          image: 'https://via.placeholder.com/300x300?text=TaxillusChinensis'
        },
        {
          id: 121,
          name: '五加皮',
          spec: '500g/袋 五加皮片',
          price: 48.5,
          stock: 200,
          image: 'https://via.placeholder.com/300x300?text=AcanthopanaxGracilistylus'
        },
        {
          id: 122,
          name: '狗脊',
          spec: '500g/袋 狗脊片',
          price: 35.8,
          stock: 220,
          image: 'https://via.placeholder.com/300x300?text=CibotiumBarometz'
        },
        {
          id: 123,
          name: '杜仲',
          spec: '500g/袋 杜仲片',
          price: 65.8,
          stock: 160,
          image: 'https://via.placeholder.com/300x300?text=EucommiaUlmodes'
        },
        {
          id: 124,
          name: '续断',
          spec: '500g/袋 续断片',
          price: 42.6,
          stock: 240,
          image: 'https://via.placeholder.com/300x300?text=DipsacusAsper'
        },
        {
          id: 125,
          name: '骨碎补',
          spec: '500g/袋 骨碎补片',
          price: 52.6,
          stock: 180,
          image: 'https://via.placeholder.com/300x300?text=DrynariaFortunei'
        },
        {
          id: 126,
          name: '淫羊藿',
          spec: '500g/袋 淫羊藿叶',
          price: 38.5,
          stock: 250,
          image: 'https://via.placeholder.com/300x300?text=EpimediumBrevicornum'
        },
        {
          id: 127,
          name: '巴戟天',
          spec: '500g/袋 巴戟天段',
          price: 78.5,
          stock: 120,
          image: 'https://via.placeholder.com/300x300?text=MorindaOfficinalis'
        },
        {
          id: 128,
          name: '肉苁蓉',
          spec: '500g/袋 肉苁蓉片',
          price: 125.0,
          stock: 100,
          image: 'https://via.placeholder.com/300x300?text=CistancheDeserticola'
        }
      ]
    }
  },
  
  computed: {
    // 计算购物车总价
    cartTotal() {
      return this.cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity);
      }, 0).toFixed(2);
    }
  },
  
  methods: {
    /**
     * 将商品添加到集采清单
     * @param {Object} product - 商品对象
     */
    addToCart(product) {
      // 检查集采清单中是否已有该商品
      const existingItem = this.cartItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // 如果已有，增加数量
        if (existingItem.quantity < product.stock) {
          existingItem.quantity++;
        } else {
          alert('已达到最大库存数量！');
          return;
        }
      } else {
        // 如果没有，添加新商品
        this.cartItems.push({
          ...product,
          quantity: 1
        });
      }
      
      // 更新购物车计数
      this.updateCartCount();
      alert(`${product.name} 已成功加入集采清单！`);
    },
    
    /**
     * 更新购物车计数
     */
    updateCartCount() {
      this.cartCount = this.cartItems.reduce((count, item) => {
        return count + item.quantity;
      }, 0);
    },
    
    /**
     * 减少购物车中商品数量
     * @param {Object} item - 购物车中的商品项
     */
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        // 如果数量为1，则移除该商品
        const index = this.cartItems.findIndex(i => i.id === item.id);
        if (index > -1) {
          this.cartItems.splice(index, 1);
        }
      }
      this.updateCartCount();
    },
    
    /**
     * 增加购物车中商品数量
     * @param {Object} item - 购物车中的商品项
     */
    increaseQuantity(item) {
      // 找到对应的商品
      let product;
      if (item.id <= 4) {
        product = this.brandProducts.find(p => p.id === item.id);
      } else if (item.id <= 8) {
        product = this.freeShippingProducts.find(p => p.id === item.id);
      } else {
        product = this.traditionalChineseMedicine.find(p => p.id === item.id);
      }
      
      if (product && item.quantity < product.stock) {
        item.quantity++;
        this.updateCartCount();
      } else {
        alert('已达到最大库存数量！');
      }
    },
    
    /**
     * 打开购物车侧边栏
     */
    openCart() {
      this.isCartOpen = true;
      // 阻止页面滚动
      document.body.style.overflow = 'hidden';
    },
    
    /**
     * 关闭购物车侧边栏
     */
    closeCart() {
      this.isCartOpen = false;
      // 恢复页面滚动
      document.body.style.overflow = '';
    },
    
    /**
     * 实现搜索功能
     */
    handleSearch() {
      if (!this.searchKeyword.trim()) {
        alert('请输入搜索关键词');
        return;
      }
      
      // 模拟搜索逻辑
      alert(`正在搜索: ${this.searchKeyword}`);
    },
    
    /**
     * 跳转到集采助手
     */
    goToProcurementAssistant() {
      console.log('跳转到集采助手');
      // 实际应用中可以添加路由跳转逻辑
    },
    
    /**
     * 跳转到AI集采规划师
     */
    goToAIPlanner() {
      console.log('跳转到AI集采规划师');
      // 实际应用中可以添加路由跳转逻辑
    },
    
    /**
     * 跳转到集采拼单惠
     */
    goToGroupBuying() {
      console.log('跳转到集采拼单惠');
      // 实际应用中可以添加路由跳转逻辑
    },
    
    /**
     * 跳转到健康器械专区
     */
    goToMedicalDevices() {
      console.log('跳转到健康器械专区');
      // 实际应用中可以添加路由跳转逻辑
    },
    
    /**
     * 提交集采订单
     */
    submitOrder() {
      console.log('提交集采订单:', this.cartItems);
      // 实际应用中可以添加订单提交逻辑
      this.closeCart();
      alert('集采订单已提交！');
    }
  },
  
  mounted() {
    // 页面加载时的初始化逻辑
    console.log('商城页面已加载');
  }
}
</script>

<style scoped>
/* 健康供应链商城 - 高端大气样式优化 */
.health-shop-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 100%;
  min-height: 100vh;
  background-color: #f8f9fa;
  color: #333;
  line-height: 1.6;
}

/* 容器样式 */
.health-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

/* 确保样式正确应用 */
:deep(.health-container) {
  width: 1200px;
  margin: 0 auto;
}

/* 头部样式 */
.health-header {
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 健康供应链顶部导航栏 */
.health-topbar {
  background-color: #ffffff;
  padding: 12px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.health-topbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.health-topbar-nav {
  display: flex;
  gap: 24px;
  align-items: center;
}

.health-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 12px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.health-topbar-link {
  color: #6c757d;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  white-space: nowrap;
}

.health-topbar-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #2196f3;
  transition: width 0.3s ease;
}

.health-topbar-link:hover {
  color: #2196f3;
}

.health-topbar-link:hover::after {
  width: 100%;
}

/* 主要头部内容 */
.health-header-main {
  padding: 24px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}

.health-logo {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
}

.health-logo-image {
  height: 40px;
  width: auto;
  vertical-align: middle;
}

.health-logo-text {
  font-size: 28px;
  color: #1976d2;
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.5px;
  background: linear-gradient(135deg, #1976d2 0%, #2196f3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 搜索区域 */
.health-search-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.health-search {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.health-search-wrapper {
  width: 100%;
  max-width: 700px;
}

.health-search-suggestions {
  width: 100%;
  max-width: 700px;
  justify-content: center;
}

.health-cart-wrapper {
  display: flex;
  align-items: flex-start;
  margin-top: 2px;
}

.health-search-wrapper {
  display: flex;
  margin-bottom: 10px;
}

.health-search-input {
  flex: 1;
  padding: 10px 15px;
  border: 2px solid #1976d2;
  border-radius: 4px 0 0 4px;
  font-size: 14px;
  outline: none;
}

.health-search-input:focus {
  border-color: #1565c0;
}

.health-search-btn {
  padding: 10px 20px;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.health-search-btn:hover {
  background-color: #1565c0;
}

.health-search-suggestions {
  display: flex;
  gap: 15px;
}

.health-search-suggestion {
  color: #666;
  text-decoration: none;
  font-size: 12px;
  transition: color 0.3s ease;
}

.health-search-suggestion:hover {
  color: #1976d2;
}

/* 用户操作区域 */
.health-user-actions {
  display: flex;
  align-items: center;
}

.health-cart {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.health-cart:hover {
  background-color: #e3f2fd;
}

.health-cart-icon {
  font-size: 20px;
}

.health-cart-count {
  background-color: #ff9800;
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
}

/* 商品分类导航 */
.health-nav {
  background-color: #1976d2;
  padding: 10px 0;
}

.health-nav-categories {
  display: inline-block;
  margin-right: 20px;
}

.health-nav-category-all {
  display: inline-block;
  padding: 8px 20px;
  background-color: #1565c0;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 4px;
}

.health-nav-main {
  display: inline-flex;
  gap: 20px;
}

.health-nav-item {
  color: white;
  text-decoration: none;
  padding: 8px 10px;
  transition: background-color 0.3s ease;
  border-radius: 4px;
}

.health-nav-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* 主要内容区域 */
.health-main {
  padding: 20px 0;
}

/* 确保logo图片正确显示 */
:deep(.health-logo-image) {
  width: 160px;
  height: 60px;
}

/* 轮播图区域 */
.health-banner-section {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.health-carousel {
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
  color: white;
  padding: 40px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.health-carousel-content {
  max-width: 600px;
}

.health-carousel-content h2 {
  font-size: 32px;
  margin-bottom: 15px;
  font-weight: bold;
}

.health-carousel-content p {
  font-size: 18px;
  margin-bottom: 25px;
  opacity: 0.9;
}

.health-carousel-btn {
  padding: 12px 30px;
  background-color: white;
  color: #1976d2;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.health-carousel-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.health-carousel-image {
  width: 100%;
  height: auto;
  display: block;
}

/* 促销广告 */
.health-promotions {
  flex: 0 0 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.health-promotion-item {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  background-color: white;
  padding: 20px;
  text-align: center;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.health-promotion-item:nth-child(1) {
  background: linear-gradient(135deg, #4caf50 0%, #388e3c 100%);
  color: white;
}

.health-promotion-item:nth-child(2) {
  background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%);
  color: white;
}

.health-promotion-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.health-promotion-item h3 {
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
}

.health-promotion-item p {
  font-size: 14px;
  margin-bottom: 15px;
  opacity: 0.9;
}

.health-promotion-btn {
  padding: 8px 16px;
  background-color: rgba(255, 255, 255, 0.9);
  color: inherit;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.health-promotion-item:nth-child(1) .health-promotion-btn {
  color: #4caf50;
}

.health-promotion-item:nth-child(2) .health-promotion-btn {
  color: #ff9800;
}

.health-promotion-btn:hover {
  background-color: white;
  transform: translateY(-1px);
}

.health-promotion-image {
  width: 100%;
  height: auto;
  display: block;
}

/* 快捷入口 */
.health-quick-entry {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.health-quick-entry-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.health-quick-entry-item:hover {
  transform: translateY(-3px);
}

.health-quick-entry-icon {
  font-size: 32px;
  color: #1976d2;
}

.health-quick-entry-text {
  font-size: 14px;
  color: #333;
}

/* 商品分类区域 */
.health-category-section {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.health-category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #1976d2;
}

.health-category-title {
  margin: 0;
  font-size: 20px;
  color: #333;
}

.health-category-more {
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
}

.health-category-more:hover {
  color: #1976d2;
}

/* 商品卡片 */
.health-category-products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.health-product-card {
  background-color: #fafafa;
  border-radius: 8px;
  padding: 15px;
  transition: all 0.3s ease;
  border: 1px solid #eee;
}

.health-product-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.health-product-image-container {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 6px;
  margin-bottom: 15px;
}

.health-product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.health-product-card:hover .health-product-image {
  transform: scale(1.05);
}

.health-product-manufacturer {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #1976d2;
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
}

.health-product-free-shipping {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #4caf50;
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
}

.health-product-tcm {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ff9800;
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
}

/* 商品信息和价格 */
.health-product-name {
  font-size: 18px;
  margin-bottom: 10px;
  color: #212529;
  font-weight: 600;
  line-height: 1.5;
  height: 54px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  transition: color 0.3s ease;
}

.health-product-card:hover .health-product-name {
  color: #2196f3;
}

.health-product-spec {
  font-size: 14px;
  color: #6c757d;
  margin: 0 0 12px 0;
  font-weight: 500;
}

.health-product-price-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
  padding-bottom: 14px;
  border-bottom: 1px solid #f0f0f0;
  flex-wrap: wrap;
}

.health-product-price {
  color: #d32f2f;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.health-product-min-order {
  font-size: 13px;
  color: #ff9800;
  font-weight: 500;
}

.health-product-free-shipping-tag {
  font-size: 14px;
  color: #4caf50;
}

.health-product-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.health-product-stock {
  font-size: 13px;
  color: #666;
  font-weight: 500;
}

.health-add-to-cart {
  padding: 10px 24px;
  background: linear-gradient(135deg, #1976d2 0%, #2196f3 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.2);
}

.health-add-to-cart:hover {
  background: linear-gradient(135deg, #1565c0 0%, #1976d2 100%);
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.3);
}

/* 集采清单侧边栏 */
.health-cart-sidebar {
  position: fixed;
  top: 0;
  right: -400px;
  width: 400px;
  height: 100vh;
  background-color: #fff;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  z-index: 2000;
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
}

.health-cart-sidebar-open {
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
  color: #333;
}

.health-cart-close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  transition: color 0.3s ease;
}

.health-cart-close:hover {
  color: #1976d2;
}

.health-cart-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.health-cart-empty {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #999;
  font-size: 16px;
}

.health-cart-item {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
}

.health-cart-item-info {
  flex: 1;
}

.health-cart-item-name {
  font-size: 16px;
  color: #333;
  margin: 0 0 5px 0;
}

.health-cart-item-spec {
  font-size: 14px;
  color: #666;
  margin: 0 0 8px 0;
}

.health-cart-item-price {
  font-size: 16px;
  font-weight: bold;
  color: #1976d2;
}

.health-cart-item-controls {
  display: flex;
  align-items: center;
  gap: 15px;
}

.health-cart-item-decrease,
.health-cart-item-increase {
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background-color: #fff;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.health-cart-item-decrease:hover,
.health-cart-item-increase:hover {
  background-color: #1976d2;
  color: #fff;
  border-color: #1976d2;
}

.health-cart-item-quantity {
  font-size: 16px;
  color: #333;
  min-width: 30px;
  text-align: center;
}

.health-cart-footer {
  padding: 20px;
  border-top: 1px solid #eee;
  background-color: #fafafa;
}

.health-cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 16px;
}

.health-cart-total-price {
  font-size: 20px;
  font-weight: bold;
  color: #1976d2;
}

.health-cart-checkout {
  width: 100%;
  padding: 12px;
  background-color: #1976d2;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.health-cart-checkout:hover {
  background-color: #1565c0;
}

/* 遮罩层 */
.health-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1999;
  backdrop-filter: blur(2px);
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .health-category-products {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .health-banner-section {
    flex-direction: column;
  }
  
  .health-promotions {
    flex-direction: row;
    flex: none;
  }
}

@media (max-width: 992px) {
  .health-category-products {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .health-quick-entry {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .health-cart-sidebar {
    width: 100%;
    right: -100%;
  }
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

@media (max-width: 768px) {
  .health-category-products {
    grid-template-columns: 1fr;
  }

  /* 响应式页脚调整 */
  .order-footer {
    padding: 30px 0 15px;
    margin-top: 40px;
  }

  .footer-content {
    font-size: 12px;
  }

  .footer-link {
    margin: 0 5px;
  }
}
</style>
