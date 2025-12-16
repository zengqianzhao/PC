// 生成商品卡片的脚本
// 用于为Checkout.vue生成5列30行共150个商品卡片

const fs = require('fs');
const path = require('path');

// 店铺名称列表
const shopNames = [
  '京东大药房', '阿里健康大药房', '老百姓大药房', '大参林大药房', '一心堂大药房',
  '康德乐大药房', '国大药房', '益丰大药房', '海王星辰大药房', '健客大药房',
  '壹号药网', '好药师大药房', '仁和大药房', '华源大药房', '万民大药房'
];

// 商品名称列表
const productNames = [
  '感冒清热颗粒', '复方氨酚烷胺片', '布洛芬缓释胶囊', '盐酸氨溴索口服溶液', '小柴胡颗粒',
  '维生素C片', '阿莫西林胶囊', '板蓝根颗粒', '对乙酰氨基酚片', '感冒灵颗粒',
  '头孢克肟分散片', '复方甘草片', '肺力咳合剂', '蒲地蓝消炎片', '蓝芩口服液',
  '连花清瘟胶囊', '抗病毒口服液', '小儿氨酚黄那敏颗粒', '急支糖浆', '养阴清肺糖浆'
];

// 商品规格列表
const productSpecs = [
  '100片/瓶', '50片/盒', '12片/板', '10ml/瓶', '8袋/盒',
  '200片/瓶', '24粒/盒', '10g*20袋', '10片*2板', '10g*9袋',
  '0.1g*6片', '0.2g*24片', '100ml/瓶', '0.3g*48片', '10ml*6支',
  '0.35g*24粒', '10ml*10支', '6g*12袋', '100ml/瓶', '10ml*10支'
];

// 运费信息
const shippingFees = [
  '¥5.00', '¥6.00', '¥4.00', '¥4.50', '¥3.50'
];

// 免运费条件
const freeShippingThresholds = [
  '满39元免运费', '满49元免运费', '满29元免运费', '满35元免运费', '满25元免运费'
];

// 生成单个商品卡片的HTML
function generateProductCard(index) {
  const shopIndex = index % shopNames.length;
  const productIndex = index % productNames.length;
  const specIndex = index % productSpecs.length;
  const shippingIndex = index % shippingFees.length;
  
  const shopName = shopNames[shopIndex];
  const productName = productNames[productIndex];
  const productSpec = productSpecs[specIndex];
  const shippingFee = shippingFees[shippingIndex];
  const freeShipping = freeShippingThresholds[shippingIndex];
  
  // 生成随机价格（10-50元）
  const currentPrice = (Math.random() * 40 + 10).toFixed(1);
  const originalPrice = (parseFloat(currentPrice) * 1.25).toFixed(2);
  const discount = (parseFloat(currentPrice) / parseFloat(originalPrice) * 10).toFixed(1);
  
  // 生成随机有效期
  const year = 2025 + Math.floor(Math.random() * 2);
  const month = 1 + Math.floor(Math.random() * 12);
  const day = 1 + Math.floor(Math.random() * 28);
  const validity = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  
  return `          <!-- 商品卡片${index + 1} -->
          <div class="product-card">
            <div class="shop-name">${shopName}</div>
            <div class="product-image">
              <img src="@/assets/logo.svg" alt="商品${index + 1}">
            </div>
            <div class="product-spec">${productSpec}</div>
            <div class="validity">有效期至：${validity}</div>
            <div class="product-price">
              <span class="current-price">¥${currentPrice}</span>
              <span class="original-price">¥${originalPrice}</span>
              <div class="discount-info">${discount}折</div>
            </div>
            <div class="product-description">${productName} 缓解感冒症状</div>
            <div class="product-feature">用于缓解感冒引起的发热、头痛、鼻塞等症状</div>
            <div class="shipping-info">
              <div class="shipping-fee">运费：${shippingFee}</div>
              <div class="free-shipping">${freeShipping}</div>
            </div>
            <div class="action-bar">
              <div class="quantity-control">
                <button class="quantity-btn" @click="decreaseQuantity">-</button>
                <input type="number" class="quantity" v-model="quantity" min="1" max="99">
                <button class="quantity-btn" @click="increaseQuantity">+</button>
              </div>
              <button class="add-to-cart-btn">加入购物车</button>
            </div>
          </div>`;
}

// 生成所有商品卡片
function generateAllProductCards() {
  let allCards = '';
  for (let i = 0; i < 150; i++) {
    allCards += generateProductCard(i) + '\n';
  }
  return allCards;
}

// 读取Checkout.vue文件
const checkoutPath = path.join(__dirname, 'src', 'views', 'Checkout.vue');
let content = fs.readFileSync(checkoutPath, 'utf8');

// 替换现有的商品卡片
const productGridStart = content.indexOf('<div class="product-grid">');
const productGridEnd = content.indexOf('</div>', productGridStart) + '</div>'.length;

// 提取product-grid的开始标签
const productGridStartTag = content.substring(productGridStart, content.indexOf('>', productGridStart) + 1);

// 生成新的product-grid内容
const newProductGridContent = productGridStartTag + '\n' + generateAllProductCards() + '        ';

// 替换内容
const newContent = content.substring(0, productGridStart) + newProductGridContent + content.substring(productGridEnd);

// 写入文件
fs.writeFileSync(checkoutPath, newContent, 'utf8');

console.log('商品卡片已生成完成！共生成150个商品卡片（5列30行）。');