<template>
  <div class="ypsb-login-container">
    <!-- 头部区域 -->
    <header class="ypsb-header">
      <div class="ypsb-logo">
        <img src="../assets/logo.png" alt="乐之药" class="ypsb-logo-image">
        <span class="ypsb-logo-text">乐之药</span>
      </div>
      <div class="ypsb-header-right">
          <span class="ypsb-header-text">免费注册</span>
          <span class="ypsb-header-text">忘记密码</span>
          <img src="https://via.placeholder.com/50x50" alt="二维码" class="ypsb-qrcode">
          <span class="ypsb-header-text">扫码下载乐之药App</span>
        </div>
    </header>
    
    <!-- 主要内容区域 -->
    <main class="ypsb-main">
      <!-- 左侧宣传区域 -->
      <div class="ypsb-promotion">
        <h1 class="ypsb-slogan">聚优质药企，供放心好药<br>—— 让采购决策更省心，让健康保障更有力</h1>
        <!-- 药品展示已删除 -->
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
              <img src="https://via.placeholder.com/150x150" alt="注册二维码" class="ypsb-register-qrcode">
              <p>扫码下载App注册账号</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    <!-- 页脚 -->
    <footer class="order-footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-links">
            <a href="#" class="footer-link">乐之药用户协议</a> |
            <a href="#" class="footer-link">乐之药隐私政策</a> |
            <a href="#" class="footer-link">增值电信业务经营许可证粤B2-20191109</a> |
            <a href="#" class="footer-link">营业执照</a> |
            <a href="#" class="footer-link">互联网药品信息服务资格证书编号:(粤)-经营性-2021-0044</a> |
            <a href="#" class="footer-link">信息系统安全等级保护备案证明</a>
          </div>
          <div class="footer-links">
            <a href="#" class="footer-link">(粤)网械平台备字【2018】第00001号</a> |
            <a href="#" class="footer-link">粤ICP备12050502</a> |
            <a href="#" class="footer-link">网络食品交易第三方平台备案凭证GDWS10044</a> |
            <a href="#" class="footer-link">药品网络交易第三方平台备案证:(粤)网平平台备字(2023)0001-001号</a> |
            <a href="#" class="footer-link">产品质量安全公告</a>
          </div>
          <div class="footer-links">
            <a href="#" class="footer-link">网信算备440105932013102230029号</a> |
            <a href="#" class="footer-link">网信算备440105932013102230011号</a>
          </div>
          <div class="footer-contact">
            <a href="#" class="footer-link">客服热线: 4001180958</a> |
            <a href="#" class="footer-link">乐之药知识产权管理平台</a> |
            <a href="#" class="footer-link">质量投诉线: 4001288221</a> |
            <span class="copyright">Copyright@2015-2024 乐之药dian.lezhiyao.cn版权所有</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'YpsbLogin',
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

/* 主要内容区域 */
.ypsb-main {
  display: flex;
  background: linear-gradient(to right, #007bff 0%, #0056b3 100%);
  min-height: calc(100vh - 230px);
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
  color: #ff6700;
  font-weight: 600;
}

.ypsb-tab.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #ff6700;
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
  border-color: #ff6700;
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
  background-color: #ff6700;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.ypsb-send-code-btn:hover:not(:disabled) {
  background-color: #e55a00;
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
  color: #ff6700;
  text-decoration: none;
}

.ypsb-forgot-password:hover {
  text-decoration: underline;
}

/* 登录按钮 */
.ypsb-login-btn {
  width: 100%;
  padding: 12px;
  background-color: #ff6700;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.ypsb-login-btn:hover {
  background-color: #e55a00;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 103, 0, 0.3);
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