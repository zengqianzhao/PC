<template>
  <footer class="app-footer">
    <div class="container">
      <!-- 资质证书信息 -->
      <div class="footer-info">
        <a href="#" class="info-link">乐之药用户协议</a>
        <a href="#" class="info-link">乐之药隐私政策</a>
        <a href="#" class="info-link highlight">增值电信业务经营许可证粤B2-20191109</a>
        <a href="#" class="info-link">营业执照</a>
        <a href="#" class="info-link">互联网药品信息服务资格证书编号:(粤)-经营性-2021-0044</a>
        <a href="#" class="info-link">信息系统安全等级保护备案证明</a>
      </div>
      
      <!-- 备案信息 -->
      <div class="footer-info">
        <span class="info-text">(粤) 网械平台备字【2018】第00001号</span>
        <span class="info-text">|</span>
        <span class="info-text">粤ICP备12050502</span>
        <span class="info-text">|</span>
        <span class="info-text">网络食品交易第三方平台备案凭证GDWS10044</span>
        <span class="info-text">|</span>
        <span class="info-text">药品网络交易第三方平台备案证:(粤)网药平台备字(2023)0001-001号</span>
        <span class="info-text">|</span>
        <span class="info-text">产品质量安全公告</span>
      </div>
      
      <!-- 网信算备 -->
      <div class="footer-info">
        <span class="info-text">网信算备440105932013102230029号</span>
        <span class="info-text">|</span>
        <span class="info-text">网信算备440105932013102230011号</span>
      </div>
      
      <!-- 客服信息 -->
      <div class="footer-bottom">
        <span class="contact-info">客服热线：4001180958</span>
        <span class="contact-info">|</span>
        <span class="contact-info">乐之药知识产权管理平台</span>
        <span class="contact-info">|</span>
        <span class="contact-info">质量投诉热线：4001288221</span>
        <span class="contact-info">|</span>
        <span class="copyright">Copyright@2015-2024 乐之药版权所有</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      // 尾部组件数据
    }
  },
  methods: {
    // 尾部组件方法
  }
}
</script>

<style scoped>
.app-footer {
  background: #f5f5f5;
  border-top: 1px solid #e0e0e0;
  padding: 20px 0;
  margin-top: 30px;
}

.footer-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
  font-size: 12px;
  line-height: 1.5;
}

.info-link {
  color: #666;
  text-decoration: none;
}

.info-link:hover {
  color: #666;
  text-decoration: underline;
}

.info-link.highlight {
  color: #666;
}

.info-text {
  color: #666;
}

.footer-bottom {
  text-align: center;
  padding-top: 15px;
  border-top: 1px solid #e0e0e0;
  font-size: 12px;
  line-height: 1.5;
}

.contact-info {
  color: #666;
  margin: 0 5px;
}

.copyright {
  font-size: 12px;
  color: #999;
}
</style>