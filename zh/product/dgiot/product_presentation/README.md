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

数蛙物联网平台为设备提供安全可靠的连接通信能力，向下连接海量设备，支撑设备数据采集上云；向上提供云端API，服务端通过调用云端API将指令下发至设备端，实现远程控制。

物联网平台消息通信流程图如下。

![企业基于物联网平台的业务链路](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/3199158061/p132750.png)

实现设备消息的完整通信流程，需要您完成设备端的设备开发、云端服务器的开发（云端SDK的配置）、数据库的创建、手机App的开发。

下文介绍物联网平台消息通信链路。

关于设备通信的更多信息，请参见[通信方式](https://www.alibabacloud.com/help/zh/doc-detail/146382.htm#concept-2358399 "您的设备和服务器接入阿里云物联网平台，通过物联网平台进行通信。")。

## 上行数据链路

+   设备通过MQTT协议与物联网平台建立长连接，上报数据（通过Publish发布Topic和Payload）到物联网平台。
+   您可配置规则引擎，编写SQL对上报数据进行处理，并配置转发规则，将处理后的数据转发到RDS、表格存储、函数计算等云产品中，或通过AMQP消费组流转到您的ECS服务器上。

## 下行指令链路

+   ECS业务服务器调用基于HTTPS协议的API接口Pub，给Topic发送指令，将数据发送到物联网平台。
+   物联网平台通过MQTT协议，使用Publish发送数据（指定Topic和Payload）到设备端。

物联网平台还提供了设备管理、规则引擎、监控运维等能力。了解更多信息，请参见[产品功能](product_functions.md)和[产品架构](product_architecture.md)

