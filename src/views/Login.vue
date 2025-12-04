<template>
  <div class="ypsb-login-container">
    <!-- 页面右上角二维码区域 -->
    <div class="top-right-qrcode">
      <div class="qrcode-content">
        <div class="qrcode-text">
          <div class="qrcode-title">关注乐之药微信</div>
          <div class="qrcode-desc">更多优惠信息、消息通知及时获取</div>
        </div>
        <div class="qrcode-img">
          <!-- 二维码图片占位符 -->
          <div class="qrcode-placeholder">二维码</div>
        </div>
      </div>
    </div>
    <!-- 登录页面头部 -->
    <header class="login-header">
      <div class="login-header-content">
        <div class="login-logo">
          <img src="@/assets/logo.png" alt="乐之药" class="logo-img">
          <span class="logo-text">乐之药</span>
        </div>
      </div>
    </header>

    <!-- 主要内容区域 -->
    <main class="ypsb-main">
      <!-- 左侧宣传区域 -->
      <div class="ypsb-promotion">
        <h1 class="ypsb-slogan">聚优质药企，供放心好药<br>—— 让采购决策更省心，让健康保障更有力</h1>
    
      </div>
      
      <!-- 右侧登录表单 -->
      <div class="ypsb-login-form-container">
        <div class="ypsb-login-form-wrapper">
          <!-- 登录标签页 -->
          <div class="ypsb-login-tabs">
            <button 
              class="ypsb-tab" 
              :class="{ active: activeTab === 'account' }" 
              @click="activeTab = 'account'"
            >
              账户登录
            </button>
            <button 
              class="ypsb-tab" 
              :class="{ active: activeTab === 'sms' }" 
              @click="activeTab = 'sms'"
            >
              短信登录
            </button>
            <button 
              class="ypsb-tab" 
              :class="{ active: activeTab === 'register' }" 
              @click="activeTab = 'register'"
            >
              扫码注册
            </button>
          </div>
          
          <!-- 账户登录表单 -->
          <div v-if="activeTab === 'account'" class="ypsb-form-content">
            <input 
              type="text" 
              v-model="loginForm.username"
              placeholder="请输入用户名/手机号"
              class="ypsb-input"
            >
            <input 
              type="password" 
              v-model="loginForm.password"
              placeholder="请输入密码"
              class="ypsb-input"
            >
            <div class="ypsb-form-options">
              <label class="ypsb-checkbox">
                <input type="checkbox" v-model="loginForm.remember">
                <span>3天内自动登录</span>
              </label>
              <a href="#" class="ypsb-forgot-password">忘记密码?</a>
            </div>
            <button class="ypsb-login-btn" @click="handleLogin">登录</button>
          </div>
          
          <!-- 短信登录表单 -->
          <div v-else-if="activeTab === 'sms'" class="ypsb-form-content">
            <input 
              type="text" 
              v-model="smsForm.phone"
              placeholder="请输入手机号"
              class="ypsb-input"
            >
            <div class="ypsb-sms-code-container">
              <input 
                type="text" 
                v-model="smsForm.code"
                placeholder="请输入验证码"
                class="ypsb-input ypsb-sms-input"
              >
              <button 
                class="ypsb-send-code-btn" 
                :disabled="countdown > 0"
                @click="sendSmsCode"
              >
                {{ countdown > 0 ? `${countdown}秒后重发` : '获取验证码' }}
              </button>
            </div>
            <button class="ypsb-login-btn" @click="handleSmsLogin">登录</button>
          </div>
          
          <!-- 扫码注册 -->
          <div v-else-if="activeTab === 'register'" class="ypsb-form-content">
            <div class="ypsb-qrcode-register">
              <div class="qrcode-content">
                <div class="qrcode-info">
                  <div class="qrcode-title">关注乐之药微信</div>
                  <div class="qrcode-desc">更多优惠信息、消息通知及时获取</div>
                </div>
                <div class="qrcode-img">
                  <!-- 二维码图片 -->
                  <img src="https://via.placeholder.com/100x100" alt="乐之药微信二维码" class="ypsb-register-qrcode">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    <!-- 流程引导条 -->
    <div class="flow-guide">
      <div class="flow-item">
        <div class="flow-icon">
          <span class="icon">📱</span>
        </div>
        <div class="flow-content">
          <div class="flow-title">下载手机APP</div>
          <div class="flow-desc">扫描二维码，下载新版手机端app</div>
        </div>
        <div class="flow-arrow">→</div>
      </div>
      <div class="flow-item">
        <div class="flow-icon">
          <span class="icon">👤</span>
        </div>
        <div class="flow-content">
          <div class="flow-title">注册会员</div>
          <div class="flow-desc">注册账号并加入店铺</div>
        </div>
        <div class="flow-arrow">→</div>
      </div>
      <div class="flow-item">
        <div class="flow-icon">
          <span class="icon">📋</span>
        </div>
        <div class="flow-content">
          <div class="flow-title">资质认证</div>
          <div class="flow-desc">上传资质质，认证成功</div>
        </div>
        <div class="flow-arrow">→</div>
      </div>
      <div class="flow-item no-arrow">
        <div class="flow-icon">
          <span class="icon">🛒</span>
        </div>
        <div class="flow-content">
          <div class="flow-title">采购下单</div>
          <div class="flow-desc">挑选商品，在APP端完成下单购买</div>
        </div>
      </div>
    </div>
  </div>
  <!-- 引用底部组件 -->
  <Footer />
</template>

<script>
// 导入底部组件
import Footer from '@/components/Footer.vue'

export default {
  name: 'YpsbLogin',
  // 注册底部组件
  components: {
    Footer
  },
  data() {
    return {
      activeTab: 'account',
      loginForm: {
        username: '13816534208',
        password: '123456',
        remember: true
      },
      smsForm: {
        phone: '',
        code: ''
      },
      countdown: 0,
      timer: null
    }
  },
  methods: {
    /**
     * 处理账户登录
     */
    handleLogin() {
      // 简单的表单验证
      if (!this.loginForm.username || !this.loginForm.password) {
        alert('请输入用户名和密码');
        return;
      }
      
      // 模拟登录成功，跳转到商城页面
      this.$router.push('/shop');
    },
    
    /**
     * 处理短信登录
     */
    handleSmsLogin() {
      // 简单的表单验证
      if (!this.smsForm.phone || !this.smsForm.code) {
        alert('请输入手机号和验证码');
        return;
      }
      
      // 模拟登录成功，跳转到商城页面
      this.$router.push('/shop');
    },
    
    /**
     * 发送短信验证码
     */
    sendSmsCode() {
      // 简单的手机号验证
      if (!this.smsForm.phone) {
        alert('请输入手机号');
        return;
      }
      
      // 模拟发送验证码
      this.countdown = 60;
      this.timer = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          clearInterval(this.timer);
        }
      }, 1000);
      
      alert('验证码已发送，请注意查收');
    }
  },
  beforeUnmount() {
    // 清除定时器
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
</script>

<style scoped>
/* 全局样式重置 */
.ypsb-login-container {
  width: 100%;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  position: relative;
}

/* 页面右上角二维码区域样式 */
.top-right-qrcode {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1000;
}

.qrcode-content {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px 40px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  height: 80px;
  box-sizing: border-box;
}

.qrcode-text {
  font-size: 12px;
  line-height: 1.5;
}

.qrcode-title {
   font-size: 14px;
   font-weight: bold;
   margin-bottom: 4px;
   font-size: 14px;
   color: #666;
}

.qrcode-desc {
  color: #666;
  font-size: 12px;
}

.qrcode-img {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
}

.qrcode-placeholder {
  font-size: 10px;
  color: #999;
}

/* 登录页面头部样式 */
.login-header {
  width: 100%;
  padding: 20px 40px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.login-header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.login-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.logo-text {
  font-size: 24px;
  font-weight: bold;
  color: #1890ff;
  font-family: 'Microsoft YaHei', sans-serif;
}

/* 头部样式 */
.ypsb-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.ypsb-logo {
  display: flex;
  align-items: center;
}

.ypsb-logo-image {
  height: 40px;
}

.ypsb-logo-text {
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
  margin-left: 10px;
}

.ypsb-header-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.ypsb-header-text {
  font-size: 14px;
  color: #666;
}

.ypsb-qrcode {
  width: 50px;
  height: 50px;
  border: 1px solid #eee;
}

/* 流程引导条样式 */
.flow-guide {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  background-color: #ffffff;
}

.flow-item {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
}

.flow-item.no-arrow {
  flex: 1.2;
}

.flow-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 50%;
}

.flow-icon .icon {
  font-size: 20px;
}

.flow-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.flow-title {
  font-size: 14px;
  font-weight: bold;
  color: #1890ff;
}

.flow-desc {
  font-size: 12px;
  color: #1890ff;
}

.flow-arrow {
  font-size: 16px;
  color: #cccccc;
  margin: 0 10px;
}

/* 主要内容区域 */
.ypsb-main {
  display: flex;
  background: linear-gradient(to right, #007bff 0%, #0056b3 100%);
  min-height: calc(100vh - 150px);
  padding: 60px 100px;
  position: relative;
  overflow: hidden;
}

/* 添加背景装饰 */
.ypsb-main::before {
  content: '';
  position: absolute;
  right: -10%;
  bottom: -10%;
  width: 60%;
  height: 80%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

/* 左侧宣传区域 */
.ypsb-promotion {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  z-index: 1;
}

.ypsb-slogan {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 40px;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.ypsb-product-showcase {
  max-width: 600px;
}

.ypsb-product-image {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* 右侧登录表单 */
.ypsb-login-form-container {
  flex: 0 0 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.ypsb-login-form-wrapper {
  background: white;
  border-radius: 10px;
  padding: 30px;
  width: 100%;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

/* 登录标签页 */
.ypsb-login-tabs {
  display: flex;
  margin-bottom: 30px;
  border-bottom: 2px solid #f0f0f0;
}

.ypsb-tab {
  flex: 1;
  padding: 10px 0;
  background: none;
  border: none;
  font-size: 16px;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.ypsb-tab.active {
  color: #1890ff;
  font-weight: 600;
}

.ypsb-tab.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #1890ff;
}

/* 表单内容 */
.ypsb-form-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.ypsb-input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  transition: border-color 0.3s ease;
}

.ypsb-input:focus {
  outline: none;
  border-color: #1890ff;
}

/* 短信验证码区域 */
.ypsb-sms-code-container {
  display: flex;
  gap: 10px;
}

.ypsb-sms-input {
  flex: 1;
}

.ypsb-send-code-btn {
  padding: 0 20px;
  background-color: #1890ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.ypsb-send-code-btn:hover:not(:disabled) {
  background-color: #666;
}

.ypsb-send-code-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* 表单选项 */
.ypsb-form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}

.ypsb-checkbox {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #666;
}

.ypsb-forgot-password {
  color: #1890ff;
  text-decoration: none;
}

/* 扫码注册区域样式 */
.ypsb-qrcode-register {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.qrcode-content {
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.qrcode-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.qrcode-title {
  color: #666;
  font-weight: bold;
  font-size: 14px;
}

.qrcode-desc {
  color: #6c757d;
  font-size: 12px;
  line-height: 1.5;
}

.qrcode-img {
  width: 100px;
  height: 100px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dee2e6;
}

.ypsb-register-qrcode {
  width: 90px;
  height: 90px;
  object-fit: contain;
}

.ypsb-forgot-password:hover {
  text-decoration: underline;
}

/* 登录按钮 */
.ypsb-login-btn {
  width: 100%;
  padding: 12px;
  background-color: #1890ff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.ypsb-login-btn:hover {
  background-color: #40a9ff;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(24, 144, 255, 0.3);
}

/* 扫码注册 */
.ypsb-qrcode-register {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px 0;
}

.ypsb-register-qrcode {
  width: 150px;
  height: 150px;
  border: 1px solid #eee;
}

.ypsb-qrcode-register p {
  color: #666;
  font-size: 14px;
}

/* 底部流程 */
.ypsb-footer {
  background-color: #fff;
  padding: 30px 60px;
  border-top: 1px solid #eee;
}

.ypsb-process {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;
}

.ypsb-process-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.ypsb-process-icon {
  font-size: 24px;
}

.ypsb-process-text {
  font-size: 14px;
  color: #666;
}

.ypsb-process-arrow {
    color: #ccc;
    font-size: 18px;
  }

  /* 认证信息 */
  .ypsb-certifications {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    font-size: 12px;
    color: #999;
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

  /* 响应式设计 */
  @media (max-width: 1200px) {
    .ypsb-main {
      padding: 60px 40px;
    }
    
    .ypsb-slogan {
      font-size: 40px;
    }
  }

  @media (max-width: 992px) {
    .ypsb-main {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    
    .ypsb-promotion {
      margin-bottom: 40px;
    }
    
    .ypsb-login-form-container {
      flex: none;
      width: 100%;
      max-width: 400px;
    }
    
    .ypsb-slogan {
      font-size: 36px;
    }
  }

  @media (max-width: 768px) {
    .ypsb-header {
      padding: 15px 30px;
      flex-direction: column;
      gap: 15px;
    }
    
    .ypsb-main {
      padding: 40px 20px;
    }
    
    .ypsb-footer {
      padding: 20px 30px;
    }
    
    .ypsb-process {
      flex-wrap: wrap;
      gap: 20px;
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