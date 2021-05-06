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
2. 连接mqtt并订阅 ![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/aead7b9b73bbe61949e8316f89bd65a1&showdoc=.jpg)
3. 订阅主题 例如 `ControlParams/20083411` 20083411为任意设备主板编号
4. 查看相关消息 ![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/8a5296edbdcd0ccb6eb126d0ff100be9&showdoc=.jpg)

