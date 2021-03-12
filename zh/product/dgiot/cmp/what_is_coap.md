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

本文介绍物联网平台支持的CoAP协议规范。

## 协议版本

支持RFC 7252 Constrained Application Protocol协议，更多信息，请参见[RFC 7252](http://tools.ietf.org/html/rfc7252)。

## 通道安全

使用DTLS v1.2保证通道安全，更多信息，请参见[DTLS v1.2](https://tools.ietf.org/html/rfc6347)。

## 开源客户端

[CoAP Technology](https://coap.technology/impls.html)。

**说明** 若使用第三方代码，阿里云不提供技术支持。

## 使用限制

+   仅华东2（上海）、华北2（北京）、华南1（深圳）地域支持CoAP通信。
+   暂时不支持资源发现。
+   仅支持UDP协议，目前支持DTLS和对称加密两种安全模式。

## 使用说明

+   CoAP的URI资源和MQTT Topic保持一致，请参见[MQTT协议规范](what_is_mqtt.md "MQTT是基于TCP/IP协议栈构建的异步通信消息协议，是一种轻量级的发布、订阅信息传输协议。可在不可靠的网络环境中进行扩展，适用于设备硬件存储空间或网络带宽有限的场景。使用MQTT协议，消息发送者与接收者不受时间和空间的限制。物联网平台支持设备使用MQTT协议接入。")。
+   Topic规范与MQTT Topic规范一致，CoAP协议内`coap://host:port/topic/${topic}`接口中的`${topic}`可以复用MQTT Topic。
+   客户端缓存认证返回的Token是请求的令牌。
+   传输的数据大小依赖于MTU的大小，建议在1 KB以内。
+   如果设备在10分钟内使用CoAP协议上报过数据，则设备在物联网平台控制台显示为在线状态。
