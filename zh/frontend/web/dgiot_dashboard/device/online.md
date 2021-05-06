---
# 编写日期
date: 2021-5-6 09:52:12
# 作者 Github 名称
author: h7ml
# 关键字
keywords: 查询设备在线情况
# 描述
description: 查询设备在线情况
# 分类
category: device
# 引用
ref: 查询设备在线情况
---

## 查询设备在线情况

1. 打开 [websocket链接工具](http://47.110.83.36:5080/dashboard#/websocket)
::: encrypt encrypted key=key owners=iotn2n
账号`admin` 密码`public`
:::
2. 连接mqtt并订阅 ![](http://doc.iotn2n.com/Public/Uploads/2020-11-04/5fa21d632ba56.png)
3. 订阅主题 例如 `ControlParams/20083411` 20083411为任意设备主板编号
4. 查看相关消息 ![](http://doc.iotn2n.com/Public/Uploads/2021-05-06/6093547dad6c2.png)

