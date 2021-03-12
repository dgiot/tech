---
# 编写日期
date: 2020-02-07 17:15:26
# 作者 Github 名称
author: jhonliu
# 关键字
keywords:
# 描述
description:
# 分类
category:
# 引用
ref:
---

物联网平台支持HTTPS协议。本文介绍物联网平台支持的HTTP协议规范。

## HTTP协议版本

+   支持 Hypertext Transfer Protocol — HTTP/1.0 协议，具体请参见：[RFC 1945](https://tools.ietf.org/html/rfc1945)
+   支持 Hypertext Transfer Protocol — HTTP/1.1 协议，具体请参见：[RFC 2616](https://tools.ietf.org/html/rfc2616)

## 通道安全

使用HTTPS（Hypertext Transfer Protocol Secure协议）保证通道安全。

**说明**

+   支持TLS协议1.0、1.1和1.2版本，强烈建议您的设备使用TLS 1.2加密。因TLS 1.0、1.1版本较老，可能有安全风险。
+   设备端[Link SDK](https://help.aliyun.com/product/93051.html)已配置V1.2版本的TLS协议，您无需自行配置。

## 限制

+   仅支持HTTPS。
+   不支持以问号（?）形式传参数。
+   暂时不支持资源发现。

## 说明

+   URI规范，HTTP的URI资源和MQTT Topic保持一致，请参见[MQTT协议规范](https://help.aliyun.com/document_detail/30540.htm#concept-jfq-vjw-vdb "MQTT是基于TCP/IP协议栈构建的异步通信消息协议，是一种轻量级的发布、订阅信息传输协议。MQTT在时间和空间上，将消息发送者与接受者分离，可以在不可靠的网络环境中进行扩展，适用于设备硬件存储空间有限或网络带宽有限的场景。物联网平台支持设备使用MQTT协议接入。")。
+   如设备在10分钟内使用HTTP协议上报过数据，则设备在物联网平台控制台显示为在线状态。
