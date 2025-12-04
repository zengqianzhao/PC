import { createRouter, createWebHistory } from 'vue-router'

// 定义路由配置
const routes = [
  // 登录页面
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: '登录 - 乐之药App',
      keepAlive: false
    }
  },
  // 商城页面
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/Shop.vue'),
    meta: {
      title: '商城 - 乐之药App',
      keepAlive: true
    }
  },
  // 品牌药企旗舰页面
  {
    path: '/brand-flagship',
    name: 'BrandFlagship',
    component: () => import('../views/BrandFlagship.vue'),
    meta: {
      title: '品牌药企旗舰 - 乐之药App',
      keepAlive: true
    }
  },
  // 订单页面
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order.vue'),
    meta: {
      title: '我的订单 - 乐之药App',
      keepAlive: false
    }
  },
  // 重定向到登录页
  {
    path: '/',
    redirect: '/login'
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 全局前置守卫 - 处理页面标题和导航
router.beforeEach((to, _from, next) => {
  // 设置页面标题
  if (to.meta.title) {
    document.title = to.meta.title
  }
  
  // 确保导航正常进行
  next()
})

// 全局后置守卫 - 处理页面加载完成事件
router.afterEach(() => {
  // 重置滚动位置
  window.scrollTo(0, 0)
})

export default router