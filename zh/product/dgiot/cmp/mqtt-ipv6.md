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

物联网平台支持设备端使用基于IPv6协议的MQTT通道接入物联网平台。

## 背景信息

- 目前，仅华东2（上海）地域支持基于IPv6协议的MQTT通道。
- 环境验证测试时，请使用以下域名和端口，通过MQTT直连方式接入物联网平台。
 测试环境使用域名：ipv6.itls.cn-shanghai.aliyuncs.com

 端口：1883

 传输加密：TLSv1.2

**说明** 请勿将测试域名用于正式使用场景。

## 设备端接入物联网平台

正式环境中，设备端必须通过产品对应的正式MQTT连接域名接入物联网平台。

+ 登录工单系统，提交工单，申请开通产品对应的正式MQTT连接域名的AAAA记录。
产品对应的正式MQTT连接域名：${YourProductKey}.iot-as-mqtt.cn-shanghai.aliyuncs.com。请将${YourProductKey}替换为您的产品的PorductKey。

+ 下载用于TLS加密的根证书。

+ 开发设备端，配置MQTT连接。
建议您使用阿里云提供的设备端SDK接入物联网平台。如果您自行开发设备端，签名时，请参见MQTT连接签名示例。

需配置的信息如下表。
