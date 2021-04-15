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

您的服务端可以使用 api，通过 HTTP/2 通道，接收物联网平台推送的设备消息。本文档为 web 端功能的开发指南，介绍了 web 版本的开发方法。

# 相关信息

- [服务端地址](http://prod.iotn2n.com/)
- [swagger 文档地址](http://prod.iotn2n.com/swagger/)

## 接口列表

### 1. [\_Role 角色](./detail/_Role)

#### [parse 关于 Role 的解释]('https://parse-zh.buzhundong.com/Roles.html')

> 随着你的应用的规模增长，你可能发现你需要更高颗粒度的权限管理来控制用户访问，而不是用户链接 ACL 的方法管理。要解决这个需求，Parse 提供了基于用户角色的权限管理。角色提供了一种合理的方法，通过访问权限对用户分组。角色对象包含了用户和其他角色。任何角色被允许访问的数据，那么角色所包含的用户和角色也可以访问该数据。

> 比如，在具有角色扮演的应用中，可能有一些用户身份是主人，主人有权限领取皮鞭、项圈等；可能还有一些用户身份是宠物，无权限领取那些物件。如果一个主人有很多宠物，一个个给宠物设置权限是很麻烦的。通过角色，就不必手动的为每个用户授予访问每个资源的权限。

> 我们提供了一个专门的类 Parse.Role，它在你的客户端代码中代表角色对象，Parse.Role 是 Parse.Object 的子类，并且具有 Parse.Object 的所有功能，比如灵活的模型、自动持久化、键值接口。Parse.Object 的所有方法，Parse.Role 都具备，不同的是，Parse.Role 有角色管理功能。

通俗点的理解是每个用户都对应着一个或多个角色，角色控制着接口（api）能否调用，控制着菜单（Menu）是否有权限访问，如下图

![eb752dad-b413-db56-b760-fd53be312c9b.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/frontend/web/Role/eb752dad-b413-db56-b760-fd53be312c9b.png)

角色中可以挂载多个用户（user）方便管理调度

而角色是属于部门下的，每个部门可以挂载多个角色
![431add77-98e1-9060-0570-c14bf08a859e.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/frontend/web/Role/431add77-98e1-9060-0570-c14bf08a859e.png)

### 2. [Crond 任务](./detail/Crond)

### 3. [Device 设备](./detail/Device)

### 4. [Product 产品](./detail/Product)

### 5. [Menu 菜单](./detail/Menu)

### 6. [\_User 用户](./detail/_User)

### 7. [Timescale 时序管理](./detail/Timescale)

### 8. [Dict 字典](./detail/Dict)

### 9. [Notification 通知管理](./detail/Notification)

### 10. [App 应用管理](./detail/App)

### 11. [\_Session 会话管理](./detail/_Session)

### 12. [\_Installation 部署管理](./detail/_Installation)

### 13. [Permission 权限管理](./detail/Permission)

### 14. [Project 项目管理](./detail/Project)

### 15. [Channel 通道管理](./detail/Channel)

### 16. [View 视图管理](./detail/View)

### 17. [License 授权管理](./detail/License)

### 18. [DBA 数据库](./detail/DBA)

### 19. [Data 数据管理](./detail/Data)

### 20. [Rule 规则引擎](./detail/Rule)

### 21. [System 系统管理](./detail/System)

### 22. [EXPROTO 拓展编程](./detail/EXPROTO)

### 23. [Decoder 解码器](./detail/Decoder)

### 24. [Group 组](./detail/Group)
