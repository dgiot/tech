---
# 编写日期
date: 2021-3-30 14:47:08
# 作者 Github 名称
author: h7ml
# 关键字
keywords: dgiot_dashboard
# 描述
description: dgiot_dashboard 接入说明文档
# 分类
category: frontend web
# 引用
ref: dgiot_dashboard 接入说明文档
---

## 目录结构

本目录结构为 dgiot_dashboard 的项目目录结构
[在线预览](https://chocolate-chimpanzee-5ziiqdxk.ws-us03.gitpod.io/#/workspace/dgiot_dashboard)

```md
├── .github # 自动化 ci 配置(可删除)
├── .vscode # vscode 配置
├── node_modules # 项目依赖模块
├── public
│ ├── static # 静态资源
│ ├── favicon.ico # favicon
│ └── index.html # 入口 HTML
├── src
│ ├── api # API 服务模块
│ ├── assets # 本地静态资源
│ ├── components # 项目组件模块
│ ├── config # 项目配置
│ │ ├── cdn.config.js # cdn相关资源配置
│ │ ├── cli.config.js # vue/cli配置
│ │ ├── index.js #  配置文件
│ │ ├── net.config.js # 网络配置
│ │ ├── router.config.js # 路由配置
│ │ ├── settings.config.js # 通用配置
│ │ ├── theme.config.js.js # 主题配置
│ ├── directive # 项目指令模块
│ ├── extra # 封装的小工具
│ ├── i18n # 多语言
│ ├── icon # 存放自定义 svg 图标 ，仅在 icon 属性为 isCustomSvg 时才会调用 svg 图标，如无必要建议使用内置图标
│ ├── imgages # 相关图片文件
│ ├── mixins # mixins
│ ├── router # 路由配置
│ ├── store # vuex 状态管理配置
│ ├── styles # 样式文件
│ ├── utils # js 工具
│ ├── vab # 核心模块
│ │ |── components # 所有核心模块组件
│ │ ├── pulgin #  必要插件
│ │ └── styles #  主题相关
│ ├── views # 页面组件
│ │ ├── callback # 第三方登录回调页面
│ │ ├── index # 首页
│ │ ├── login # 登录
│ │ ├── mall # 物料市场
│ │ ├── setting # 配置
│ │ ├── register # 注册
│ ├── App.vue # 应用入口组件
│ └── main.js # 应用入口 js
├── .browserslistrc #  配置兼容浏览器
├── .cz-config.js # 自定义git Commit Message 规范和代码格式校验文件
├── .editorconfig # 定义项目的编码规范
├── .env # env配置
├── .eslintignore # eslint 忽略文件配置
├── .eslintrc.js # eslint 配置项
├── .gitattributes # git 配置文件
├── .gitignore # git # 忽略文件配置
├── .stylelintrc.js  # css代码的语法检查配置
├── babel.config.js # babel-loader 配置
├── commitlint.config.js # commitlint 配置
├── jsconfig.json # javaScript 的配置文件
├── LICENSE # 项目许可证
├── package.json # package.json
├── prettier.config.js # prettier 配置
├── README-CN.md # 中文项目介绍
├── README.md # 英文项目介绍
├── vue.config.js # vue-cli 配置
└── webstorm.config.js # webstorm 配置文件
```
