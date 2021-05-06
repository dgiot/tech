## 全局配置

### vue/cli 配置

位置[src/config/cli.config.js](https://github.com/dgiot/dgiot_dashboard/blob/master/src/config/cli.config.js)

```javascript
/**
 * @description 导出vue/cli配置
 */
module.exports = {
  // 开发以及部署时的URL
  // hash模式时在不确定二级目录名称的情况下建议使用""代表相对路径或者"/二级目录/"
  // history模式默认使用"/"或者"/二级目录/"，记住只有hash时publicPath可以为空！！！
  publicPath: '',
  // 生产环境构建文件的目录名
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',
  // 开发环境每次保存时是否输出为eslint编译警告
  lintOnSave: true,
  // 进行编译的依赖
  transpileDependencies: ['resize-detector'],
  // 开发环境端口号
  devPort: '9999',
  // 需要自动注入并加载的模块
  providePlugin: {},
  // npm run build时是否自动生成7z压缩包
  build7z: false,
  // npm run build时是否生成gzip
  buildGzip: false,
  // npm run build时是否开启图片压缩，由于国内网路原因image-webpack-loader必须使用cnpm安装，如无法使用cnpm，请配置false
  imageCompression: true,
}
```

### 网络配置

位置[src/config/net.config.js](https://github.com/dgiot/dgiot_dashboard/blob/master/src/config/net.config.js)

```javascript
/**
 * @description 导出网络配置
 **/
module.exports = {
  // 默认的接口地址，开发环境和生产环境走/mock-server
  // 当然你也可以选择自己配置成需要的接口地址，如"https://api.xxx.com"
  // 问号后边代表开发环境，冒号后边代表生产环境
  // baseURL:
  //   process.env.NODE_ENV === 'development' ? '/mock-server' : '/mock-server',
  baseURL: 'iotapi',
  // 配后端数据的接收方式application/json;charset=UTF-8 或 application/x-www-form-urlencoded;charset=UTF-8
  contentType: 'application/json',
  // 最长请求时间
  requestTimeout: 1000 * 10,
  // 操作正常code，支持String、Array、int多种类型
  successCode: [200, 0, 201, 204, '200', '0', '201', '204'],
  // 数据状态的字段名称
  statusName: 'code',
  // 状态信息的字段名称
  messageName: 'msg',
  proxyUrl: {
    server: 'http://prod.iotn2n.com/',
  },
}
```

### 通用配置

位置[src/config/setting.config.js](https://github.com/dgiot/dgiot_dashboard/blob/master/src/config/setting.config.js)

```javascript
/*
 * @Author: h7ml
 * @Date: 2021-03-11 09:56:54
 * @LastEditTime: 2021-03-11 20:02:46
 * @LastEditors: h7ml
 * @FilePath: \dgiot_dashboard\src\config\setting.config.js
 * @Description:
 */
/**
 * @description 导出通用配置
 */
module.exports = {
  // 标题，此项修改后需要重启项目！！！ (包括初次加载雪花屏的标题 页面的标题 浏览器的标题)
  title: 'shuwa Admin Pro',
  // 标题分隔符
  titleSeparator: ' - ',
  // 标题是否反转
  // 如果为false: "page - title"
  // 如果为ture : "title - page"
  titleReverse: false,
  // 简写
  abbreviation: 'dgiot_dashboard-pro',
  // pro版本copyright可随意修改
  copyright: '杭州数蛙科技有限公司',
  // 缓存路由的最大数量
  keepAliveMaxNum: 20,
  // 路由模式，可选值为 history 或 hash
  routerMode: 'hash',
  // 不经过token校验的路由，白名单路由建议配置到与login页面同级，如果需要放行带传参的页面，请使用query传参，配置时只配置path即可
  routesWhiteList: ['/login', '/register', '/callback', '/404', '/403'],
  // 加载时显示文字
  loadingText: '正在加载中...',
  // token名称
  tokenName: 'sessionToken',
  // token在localStorage、sessionStorage、cookie存储的key的名称
  tokenTableName: 'sessionToken',
  // token存储位置localStorage sessionStorage cookie
  storage: 'cookie',
  // token失效回退到登录页时是否记录本次的路由
  recordRoute: false,
  // 是否开启logo，不显示时设置false，请填写src/icon路径下的图标名称
  // 如需使用内置RemixIcon图标，请自行去logo组件切换注释代码(内置svg雪碧图较大，对性能有一定影响)
  logo: 'vuejs-fill',
  // 语言类型zh、en
  i18n: 'zh',
  // 消息框消失时间
  messageDuration: 3000,
  // 在哪些环境下显示高亮错误
  errorLog: ['development' /* , 'production' */],
  // 是否开启登录拦截
  loginInterception: true,
  // 是否开启登录RSA加密
  loginRSA: false,
  // intelligence(前端导出路由)和all(后端导出路由)两种方式
  authentication: 'all',
  // 是否支持游客模式，支持情况下，访问白名单，可查看所有asyncRoutes
  supportVisit: false,
  // 是否开启roles字段进行角色权限控制(如果是all模式后端完全处理角色并进行json组装，可设置false不处理路由中的roles字段)
  rolesControl: false,
  // vertical column comprehensive common布局时是否只保持一个子菜单的展开
  uniqueOpened: false,
  // vertical column comprehensive common布局时默认展开的菜单path，使用逗号隔开建议只展开一个
  defaultOpeneds: ['/vab'],
  // 需要加loading层的请求，防止重复提交
  debounce: ['doEdit'],
  // 分栏布局和综合布局时，是否点击一级菜单默认开启第一个二级菜单
  openFirstMenu: true,
  // 代码生成机生成在view下的文件夹名称
  templateFolder: 'project',
  webpackBarName: '杭州数蛙科技有限公司',
  dateTime: new Date(),
  webpackBanner: ' build: 杭州数蛙科技有限公司 \n copyright: dgiot_dashboard \n time: ',
}
```

### 主题配置

位置[src/config/theme.config.js](https://github.com/dgiot/dgiot_dashboard/blob/master/src/config/theme.config.js)

```javascript
/**
 * @description 导出主题配置，注意事项：此配置下的项修改后需清理浏览器缓存！！！
 */
module.exports = {
  // 布局种类：横向布局horizontal、纵向布局vertical、分栏布局column、综合布局comprehensive、常规布局common
  layout: 'column',
  // 主题名称：默认default、海洋之心ocean、绿荫草场green、碰触纯白white
  themeName: 'default',
  // 分栏风格(仅针对分栏布局column时生效)：横向风格horizontal、纵向风格vertical、卡片风格card
  columnStyle: 'vertical',
  // 是否固定头部固定
  fixedHeader: true,
  // 是否开启顶部进度条
  showProgressBar: true,
  // 是否开启标签页
  showTabs: true,
  // 显示标签页时标签页样式：卡片风格card、灵动风格smart、圆滑风格smooth
  tabsBarStyle: 'smooth',
  // 是否标签页图标
  showTabsBarIcon: true,
  // 是否开启语言选择组件
  showLanguage: true,
  // 是否开启刷新组件
  showRefresh: true,
  // 是否开启搜索组件
  showSearch: false,
  // 是否开启主题组件
  showTheme: true,
  // 是否开启通知组件
  showNotice: false,
  // 是否开启全屏组件
  showFullScreen: true,
  // 是否开启右侧悬浮窗
  showThemeSetting: false,
}
```

### 常用封装

位置[src/vab/plugins/vab.js](https://github.com/dgiot/dgiot_dashboard/blob/master/src/vab/plugins/vab.js)

```javascript
import { loadingText, messageDuration } from '@/config'
import { Loading, Message, MessageBox, Notification } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/token'
import { dependencies } from '../../../package.json'

const token = store.getters['user/token']

/**
 * @description 全局token
 */
Vue.prototype.$baseToken = () => {
  return token || getToken()
}

/**
 * @description 全局加载层
 * @param {*} index
 * @param {*} text
 */
Vue.prototype.$baseLoading = (index, text) => {
  let loading
  if (!index) {
    loading = Loading.service({
      lock: true,
      text: text || loadingText,
      background: 'hsla(0,0%,100%,.8)',
    })
  } else {
    loading = Loading.service({
      lock: true,
      text: text || loadingText,
      spinner: 'vab-loading-type' + index,
      background: 'hsla(0,0%,100%,0.8)',
    })
  }
  return loading
}

/**
 * @description 全局多彩加载层
 * @param {*} index
 * @param {*} text
 */
Vue.prototype.$baseColorfullLoading = (index, text) => {
  let loading
  if (!index) {
    loading = Loading.service({
      lock: true,
      text: text || loadingText,
      spinner: 'dots-loader',
      background: 'hsla(0,0%,100%,.8)',
    })
  } else {
    switch (index) {
      case 1:
        index = 'dots'
        break
      case 2:
        index = 'gauge'
        break
      case 3:
        index = 'inner-circles'
        break
      case 4:
        index = 'plus'
        break
    }
    loading = Loading.service({
      lock: true,
      text: text || loadingText,
      spinner: index + '-loader',
      background: 'hsla(0,0%,100%,.8)',
    })
  }
  return loading
}

/**
 * @description 全局Message
 * @param {*} message
 * @param {*} type
 * @param {*} dangerouslyUseHTMLString
 * @param {*} customClass
 */
Vue.prototype.$baseMessage = (message, type, dangerouslyUseHTMLString, customClass) => {
  Message({
    showClose: true,
    message,
    type,
    dangerouslyUseHTMLString,
    duration: messageDuration,
    customClass,
  })
}

/**
 * @description 全局Alert
 * @author chuzhixin 1204505056@qq.com
 * @param {*} content
 * @param {*} title
 * @param {function} callback
 */
Vue.prototype.$baseAlert = (content, title, callback) => {
  MessageBox.alert(content, title || '温馨提示', {
    confirmButtonText: '确定',
    dangerouslyUseHTMLString: true,
    callback: () => {
      if (callback) {
        callback()
      }
    },
  }).then(() => {})
}

/**
 * @description 全局Confirm
 * @param {*} content
 * @param {*} title
 * @param {*} callback1
 * @param {*} callback2
 * @param {*} confirmButtonText
 * @param {*} cancelButtonText
 */
Vue.prototype.$baseConfirm = (
  content,
  title,
  callback1,
  callback2,
  confirmButtonText,
  cancelButtonText
) => {
  MessageBox.confirm(content, title || '温馨提示', {
    confirmButtonText: confirmButtonText || '确定',
    cancelButtonText: cancelButtonText || '取消',
    closeOnClickModal: false,
    type: 'warning',
    lockScroll: false,
  })
    .then(() => {
      if (callback1) {
        callback1()
      }
    })
    .catch(() => {
      if (callback2) {
        callback2()
      }
    })
}

/**
 * @description 全局Notification
 * @param message
 * @param title
 * @param type
 * @param position
 * @param duration
 */
Vue.prototype.$baseNotify = (message, title, type, position, duration) => {
  Notification({
    title: title,
    message: message,
    position: position || 'top-right',
    type: type || 'success',
    duration: duration || messageDuration,
  })
}

/**
 * @description 表格高度
 * @param {*} formType
 */
Vue.prototype.$baseTableHeight = (formType) => {
  let height = window.innerHeight
  let paddingHeight = 291
  const formHeight = 60

  if ('number' == typeof formType) {
    height = height - paddingHeight - formHeight * formType
  } else {
    height = height - paddingHeight
  }
  return height
}

/**
 * @description 全局事件总线
 */
Vue.prototype.$baseEventBus = new Vue()
```

### 常用正则校验

位置[src/utils/validate.js](https://github.com/dgiot/dgiot_dashboard/blob/master/src/utils/validate.js)

```javascript
/**
 * @description 判读是否为外链
 * @param path
 * @returns {boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @description 校验密码是否小于6位
 * @param value
 * @returns {boolean}
 */
export function isPassword(value) {
  return value.length >= 6
}

/**
 * @description 判断是否为数字
 * @param value
 * @returns {boolean}
 */
export function isNumber(value) {
  const reg = /^[0-9]*$/
  return reg.test(value)
}

/**
 * @description 判断是否是名称
 * @param value
 * @returns {boolean}
 */
export function isName(value) {
  const reg = /^[\u4e00-\u9fa5a-zA-Z0-9]+$/
  return reg.test(value)
}

/**
 * @description 判断是否为IP
 * @param ip
 * @returns {boolean}
 */
export function isIP(ip) {
  const reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
  return reg.test(ip)
}

/**
 * @description 判断是否是传统网站
 * @param url
 * @returns {boolean}
 */
export function isUrl(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * @description 判断是否是小写字母
 * @param value
 * @returns {boolean}
 */
export function isLowerCase(value) {
  const reg = /^[a-z]+$/
  return reg.test(value)
}

/**
 * @description 判断是否是大写字母
 * @param value
 * @returns {boolean}
 */
export function isUpperCase(value) {
  const reg = /^[A-Z]+$/
  return reg.test(value)
}

/**
 * @description 判断是否是大写字母开头
 * @param value
 * @returns {boolean}
 */
export function isAlphabets(value) {
  const reg = /^[A-Za-z]+$/
  return reg.test(value)
}

/**
 * @description 判断是否是字符串
 * @param value
 * @returns {boolean}
 */
export function isString(value) {
  return typeof value === 'string' || value instanceof String
}

/**
 * @description 判断是否是数组
 * @param arg
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

/**
 * @description 判断是否是端口号
 * @param value
 * @returns {boolean}
 */
export function isPort(value) {
  const reg = /^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/
  return reg.test(value)
}

/**
 * @description 判断是否是手机号
 * @param value
 * @returns {boolean}
 */
export function isPhone(value) {
  const reg = /^1\d{10}$/
  return reg.test(value)
}

/**
 * @description 判断是否是身份证号(第二代)
 * @param value
 * @returns {boolean}
 */
export function isIdCard(value) {
  const reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  return reg.test(value)
}

/**
 * @description 判断是否是邮箱
 * @param value
 * @returns {boolean}
 */
export function isEmail(value) {
  const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  return reg.test(value)
}

/**
 * @description 判断是否中文
 * @param value
 * @returns {boolean}
 */
export function isChina(value) {
  const reg = /^[\u4E00-\u9FA5]{2,4}$/
  return reg.test(value)
}

/**
 * @description 判断是否为空
 * @param value
 * @returns {boolean}
 */
export function isBlank(value) {
  return (
    value == null ||
    false ||
    value === '' ||
    value.trim() === '' ||
    value.toLocaleLowerCase().trim() === 'null'
  )
}

/**
 * @description 判断是否为固话
 * @param value
 * @returns {boolean}
 */
export function isTel(value) {
  const reg = /^(400|800)([0-9\\-]{7,10})|(([0-9]{4}|[0-9]{3})([- ])?)?([0-9]{7,8})(([- 转])*([0-9]{1,4}))?$/
  return reg.test(value)
}

/**
 * @description 判断是否为数字且最多两位小数
 * @param value
 * @returns {boolean}
 */
export function isNum(value) {
  const reg = /^\d+(\.\d{1,2})?$/
  return reg.test(value)
}

/**
 * @description 判断是否为json
 * @param value
 * @returns {boolean}
 */
export function isJson(value) {
  if (typeof value == 'string') {
    try {
      const obj = JSON.parse(value)
      return !!(typeof obj == 'object' && obj)
    } catch (e) {
      return false
    }
  }
}
```
