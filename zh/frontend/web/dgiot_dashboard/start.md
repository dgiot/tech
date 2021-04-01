## 如何开始

### 启动流程

了解整个框架的工作流程，会对我们以后开发有很大的帮助，以下是框架访问一个网页的工作流程，逻辑代码[src/vab/plugins/permissions.js](https://github.com/dgiot/dgiot_dashboard/blob/master/src/vab/plugins/permissions.js)


![80ec9251-6122-d2d5-957b-77cd2fc5d111.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/web/80ec9251-6122-d2d5-957b-77cd2fc5d111.png)

- 网站启动后，会加载全局配置
- 用户访问一个页面(如：/index)后，会验证是否有 token，没有会跳转到/login 页面
- 持有 token 后，会通过/userInfo 接口获取用户信息(包含：用户名、头像、roles、ability)
- 根据全局配置，选择前端导出路由或者后端导出路由，根据用户 roles 和 ability 过滤，放入 vue router
- 打开/index 页面