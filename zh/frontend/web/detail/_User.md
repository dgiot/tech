---
# 编写日期
date: 2021-4-6 12:41:23
# 作者 Github 名称
author: h7ml
# 关键字
keywords: User
# 描述
description: User
# 分类
category: User
# 引用
ref: User
# 标签
tag: User
---

## 相关信息

- [api](http://prod.iotn2n.com/swagger/#/_User)
- [page](http://prod.iotn2n.com/#/structures)

### 1. 查询用户

1. 在左侧角色树中，点击+号按钮，弹出添加角色弹窗
   ![添加角色.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/frontend/web/Role/%E6%B7%BB%E5%8A%A0%E8%A7%92%E8%89%B2.png)
   ![aff5f4a3-ab84-9f9e-53fd-fc9247ad0428.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/frontend/web/Role/aff5f4a3-ab84-9f9e-53fd-fc9247ad0428.png)
2. 输入对应的列表参数（角色名，部门，备注，选择对应的岗位）提交即可
   [Role](http://prod.iotn2n.com/swagger/#/_Role)

### 2. 刪除角色

- 在需要删除的角色列表右侧点击删除按钮即可完成对该条的删除

### 3. 刪除角色权限和菜单

- 在需要修改的角色列表右侧点击修改按钮即可完成修改

### 保存为角色模板

- 在需要保存为模板的角色列表右侧点击修改按钮选择保存为模板，即可将本角色的角色权限，菜单权限保存为角色模板

![1115591a-9d06-045f-b5f6-a6329f2945b6.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/frontend/web/Role/1115591a-9d06-045f-b5f6-a6329f2945b6.png)

## 页面路由

[@/views/roles/rolelist/roles](https://github1s.com/dgiot/dgiot_dashboard/blob/master/src/views/roles/rolelist/roles.vue)

## API 接口

[@/api/Role/index](https://github1s.com/dgiot/dgiot_dashboard/blob/master/src/api/Role/index.js)

## 常见问题
