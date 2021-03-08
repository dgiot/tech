---
# 编写日期
date: 2020-02-07 17:15:26
# 作者 Github 名称
author: johnliu
# 关键字
keywords:
# 描述
description:
# 分类
category: 
# 引用
ref:
---

# Parse Server JavaScript SDK 指南

Facebook利用React Native开发了开源的F8 app，其中使用了Parse作为app的后端。作为一款非常优秀的后端服务，Parse服务了约1500万客户，支持着大量的移动应用，其中包括一些非常成功的应用，如Oculus、Quip和Orbitz等。而当前，Parse.com已经于2017年1月底停止服务，取而代之的，Facebook发布了开源版本的Parse Server。

Parse Server提供了开发移动应用的很多方便易用的后台服务（BaaS），包括数据存储、消息推送及用户管理等等，并可非常方便的管理MongoDB数据库。这样开发者就可以专注于客户端的开发，而不用考虑太多服务器端的问题。

为实现基于js的全栈开发，前端采用RN，后端选用Parse Server是一种不错的选择。因此Parse Server的JavaScript版SDK将会获得更多重视，本书译者在查阅 http://parseplatform.org/ 中Parse Server的有关文档和使用Parse Server的过程中，认为有必要将Parse Server的JavaScript版SDK翻译成中文，以使得更多开发者认识和更轻松的使用这款优秀的开源后端服务平台。

