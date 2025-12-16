// 修改CSS文件中的颜色值脚本
const fs = require('fs');
const path = require('path');

// 定义文件路径
const cssFilePath = path.join(__dirname, 'src', 'assets', 'jd-style.css');
const shopVuePath = path.join(__dirname, 'src', 'views', 'Shop.vue');

// 修改CSS文件
fs.readFile(cssFilePath, 'utf8', (err, cssData) => {
  if (err) {
    console.error('读取CSS文件失败:', err);
    return;
  }

  // 替换颜色值
  let modifiedCssContent = cssData;
  modifiedCssContent = modifiedCssContent.replace(/#e1251b/g, '#1e90ff'); // 将橙色替换为蓝色
  modifiedCssContent = modifiedCssContent.replace(/#c81623/g, '#1565c0'); // 将深色橙色替换为深色蓝色

  // 写入修改后的内容
  fs.writeFile(cssFilePath, modifiedCssContent, 'utf8', (err) => {
    if (err) {
      console.error('写入CSS文件失败:', err);
      return;
    }
    console.log('CSS文件颜色值替换成功！');
  });
});

// 修改Shop.vue文件
fs.readFile(shopVuePath, 'utf8', (err, vueData) => {
  if (err) {
    console.error('读取Shop.vue文件失败:', err);
    return;
  }

  // 替换颜色值
  let modifiedVueContent = vueData;
  modifiedVueContent = modifiedVueContent.replace(/#ff9800/g, '#1e90ff'); // 将橙色替换为蓝色
  modifiedVueContent = modifiedVueContent.replace(/#f57c00/g, '#1565c0'); // 将深色橙色替换为深色蓝色

  // 写入修改后的内容
  fs.writeFile(shopVuePath, modifiedVueContent, 'utf8', (err) => {
    if (err) {
      console.error('写入Shop.vue文件失败:', err);
      return;
    }
    console.log('Shop.vue文件颜色值替换成功！');
  });
});