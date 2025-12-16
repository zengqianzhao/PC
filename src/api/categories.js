/**
 * 分类数据API服务
 * 提供模拟的药品分类数据
 */

// 模拟的分类数据，与之前Shop.vue中的数据结构相同
const categoryData = {
  // 主分类列表
  categories: ['西药', '中成药', '中药饮片', '进口药品', '医疗器械', '生物制品', '食品', '非药品', '套餐'],
  
  // 子分类数据
  subcategories: {
    '西药': [
      {
        name: '感冒用药',
        subItems: ['普通感冒', '流感类']
      },
      {
        name: '消化系统',
        subItems: ['胃药(胃炎、溃疡)', '健胃消食', '肝胆用药', '便秘用药', '驱虫类', '腹泻用药', '痔疮用药', '消化系统其它']
      },
      {
        name: '五官用药',
        subItems: ['眼科用药', '鼻科用药', '口腔用药', '耳科用药']
      },
      {
        name: '心血管药',
        subItems: ['降血压药', '降血脂药', '心脏疾病', '心血管其它']
      },
      {
        name: '糖尿病药',
        subItems: ['糖尿病药']
      },
      {
        name: '妇科用药',
        subItems: ['炎症用药', '乳腺增生类', '妇科其它']
      },
      {
        name: '皮肤用药',
        subItems: ['抗菌类', '激素类', '烫伤烧伤', '皮肤其它']
      },
      {
        name: '儿科用药',
        subItems: ['儿科感冒', '儿科腹泻', '儿科止咳', '健胃消食', '儿科其它']
      },
      {
        name: '泌尿系统',
        subItems: ['男科用药', '泌尿系统其它']
      },
      {        name: '抗感染药',        subItems: ['头孢类', '氟喹诺酮类', '大环内酯类', '青霉素类', '硝基咪唑类', '氨基糖苷类', '林可霉素类', '抗结核类', '磺胺类', '四环素类', '氯霉素类', '抗感染其它']      }
    ],
    '中成药': [
      {
        name: '感冒清热',
        subItems: ['风寒感冒', '风热感冒', '清热解毒']
      },
      {
        name: '胃肠用药',
        subItems: ['胃痛', '腹泻', '便秘']
      },
      {
        name: '心脑血管',
        subItems: ['高血压', '冠心病', '脑梗塞']
      },
      {
        name: '妇科用药',
        subItems: ['月经不调', '妇科炎症', '更年期']
      },
      {
        name: '儿科用药',
        subItems: ['小儿感冒', '小儿咳嗽', '小儿腹泻']
      },
      {
        name: '呼吸系统',
        subItems: ['咳嗽', '哮喘', '慢性支气管炎']
      },
      {
        name: '内分泌',
        subItems: ['糖尿病', '甲状腺疾病']
      },
      {
        name: '骨科用药',
        subItems: ['骨质疏松', '关节疼痛', '跌打损伤']
      }
    ],
    '中药饮片': [
      {
        name: '常用饮片',
        subItems: ['补气药', '补血药', '补阴药', '补阳药']
      },
      {
        name: '贵细饮片',
        subItems: ['人参', '鹿茸', '冬虫夏草', '燕窝']
      },
      {
        name: '配方颗粒',
        subItems: ['单味颗粒', '复方颗粒']
      },
      {
        name: '中药粉末',
        subItems: ['中药粉', '中药散剂']
      }
    ],
    '进口药品': [
      {
        name: '进口西药',
        subItems: ['抗肿瘤药', '心血管药', '内分泌药']
      },
      {
        name: '进口中成药',
        subItems: ['保健中药', '治疗中药']
      },
      {
        name: '进口医疗器械',
        subItems: ['进口设备', '进口耗材']
      }
    ],
    '医疗器械': [
      {
        name: '诊断设备',
        subItems: ['影像设备', '检验设备', '监护设备']
      },
      {
        name: '治疗设备',
        subItems: ['手术设备', '理疗设备', '康复设备']
      },
      {
        name: '医用耗材',
        subItems: ['一次性耗材', '植入耗材', '消毒用品']
      },
      {
        name: '家庭医疗',
        subItems: ['血压计', '血糖仪', '呼吸机']
      }
    ],
    '生物制品': [
      {
        name: '疫苗',
        subItems: ['预防性疫苗', '治疗性疫苗']
      },
      {
        name: '血液制品',
        subItems: ['白蛋白', '免疫球蛋白']
      },
      {
        name: '细胞治疗',
        subItems: ['干细胞', '免疫细胞']
      }
    ],
    '食品': [
      {
        name: '保健食品',
        subItems: ['增强免疫力', '调节血糖', '调节血脂']
      },
      {
        name: '营养补充',
        subItems: ['维生素', '矿物质', '蛋白质']
      },
      {
        name: '特医食品',
        subItems: ['糖尿病食品', '肿瘤食品']
      }
    ],
    '非药品': [
      {
        name: '消杀用品',
        subItems: ['消毒剂', '消毒器械']
      },
      {
        name: '卫生用品',
        subItems: ['卫生巾', '纸尿裤', '湿巾']
      },
      {
        name: '化妆品',
        subItems: ['护肤品', '彩妆', '洗护用品']
      }
    ],
    '套餐': [
      {
        name: '慢病管理',
        subItems: ['高血压套餐', '糖尿病套餐']
      },
      {
        name: '健康体检',
        subItems: ['基础体检', '专项体检']
      },
      {
        name: '康复护理',
        subItems: ['术后康复', '长期护理']
      }
    ]
  }
};

/**
 * 获取所有分类数据
 * @returns {Promise} 包含分类数据的Promise对象
 */
export const getCategories = () => {
  // 模拟异步请求
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categoryData);
    }, 500); // 模拟500ms的网络延迟
  });
};

/**
 * 获取指定分类的子分类数据
 * @param {string} categoryName - 分类名称
 * @returns {Promise} 包含子分类数据的Promise对象
 */
export const getSubcategories = (categoryName) => {
  // 模拟异步请求
  return new Promise((resolve) => {
    setTimeout(() => {
      const subcategories = categoryData.subcategories[categoryName] || [];
      resolve(subcategories);
    }, 300); // 模拟300ms的网络延迟
  });
};
