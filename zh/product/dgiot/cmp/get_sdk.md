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

物联网平台提供各类设备端SDK，简化开发过程，使设备快速上云。

## 前提条件

在设备端开发之前，您需要首先完成控制台所需操作，获取设备开发阶段的必要信息，包括设备信息、Topic信息等。

具体操作，请参见[创建产品](https://www.alibabacloud.com/help/zh/doc-detail/73728.htm#task-lxd-pnl-vdb "使用物联网平台的第一步是在控制台创建产品。产品是设备的集合，通常是一组具有相同功能定义的设备集合。例如，产品指同一个型号的产品，设备就是该型号下的某个设备。")、[创建设备](https://www.alibabacloud.com/help/zh/doc-detail/73729.htm#task-yk1-rnl-vdb "产品指某一类设备，创建完产品后，需要为设备创建身份。您可以创建单个设备，也可以批量创建设备。本文介绍单个设备的创建。")、[消息通信Topic](https://www.alibabacloud.com/help/zh/doc-detail/73731.htm#concept-mny-tnl-vdb "物联网平台中，服务端和设备端通过Topic来实现消息通信。Topic是针对设备的概念，Topic类是针对产品的概念。")、[新增物模型](https://www.alibabacloud.com/help/zh/doc-detail/88241.htm#task-qhm-d3j-w2b "单个添加物模型，即单个添加属性、事件和服务。下面介绍如何在物联网平台控制台定义物模型。")。

## 基于设备端SDK开发

您可以在设备中集成物联网平台提供的SDK，实现设备接入物联网平台。设备开发完成，接入物联网平台后，设备激活，会在物联网平台显示在线。

设备端SDK：[C SDK](https://www.alibabacloud.com/help/doc-detail/96623.htm)。

如果以上SDK不满足您的需求，可以按照以下模板发送邮件至`linkkitSDK-query@list.alibaba-inc.com`联系我们。

+   邮件主题：SDK开发语言或平台咨询
+   邮件内容：

 ```  
    公司名称：
    联系人：
    联系电话：
    设备开发语言或平台：
    需求描述：
    贵司的产品规模及开发计划：
```

## 云云对接（原泛化协议）SDK

阿里云物联网平台支持基于MQTT、CoAP和HTTP协议的通信，其他类型协议，如消防协议GB/T 26875.3-2011、Modbus、JT808等暂不支持。在特定场景下，设备无法直接接入物联网平台时，您可使用云云对接SDK，快速构建桥接服务，搭建设备或平台与阿里云物联网平台的双向数据通道。

更多信息，请参见[云云对接SDK](https://www.alibabacloud.com/help/zh/doc-detail/86369.htm#concept-d4s-jcv-42b "阿里云物联网平台支持基于MQTT、CoAP和HTTP协议的通信，其他类型协议，如消防协议GB/T 26875.3-2011、Modbus、JT808等暂不支持。在特定场景下，设备无法直接接入物联网平台时，您可使用云云对接SDK，快速构建桥接服务，搭建设备或平台与阿里云物联网平台的双向数据通道。")。

## 基于Alink协议开发

如果提供的设备端SDK无法满足您的需求，可自行开发。具体操作，请参见[Alink协议文档](https://www.alibabacloud.com/help/zh/doc-detail/90459.htm#concept-pfw-hdg-cfb "物联网平台为设备端开发提供了SDK，这些SDK已封装了设备端与物联网平台的交互协议。您可以直接使用设备端SDK来进行开发。如果嵌入式环境复杂，已提供的设备端SDK不能满足您的需求，请参见本文，自行封装Alink协议数据，建立设备与物联网平台的通信。")。

关于如何使用开源MQTT客户端接入物联网平台的示例，请参见：

+   [Paho-MQTT Go接入示例](https://www.alibabacloud.com/help/zh/doc-detail/146503.htm#task-2359926 "本示例介绍如何调用Go语言的Paho MQTT类库连接阿里云物联网平台，并进行消息收发。")
+   [Paho-MQTT C#接入示例](https://www.alibabacloud.com/help/zh/doc-detail/146505.htm#task-2360906 "本文档介绍如何使用C#语言的Paho MQTT类库接入阿里云物联网平台，并进行物模型数据通信。")
+   [Paho-MQTT C接入示例](https://www.alibabacloud.com/help/zh/doc-detail/146611.htm#task-2361871 "本文介绍如何使用Paho提供的嵌入式C语言MQTT开源工程接入阿里云物联网平台，并进行消息收发。")
+   [Paho-MQTT Java接入示例](https://www.alibabacloud.com/help/zh/doc-detail/146631.htm#task-2362406 "本文档介绍如何使用Java语言的Paho MQTT库接入阿里云物联网平台，并进行物模型消息通信。")
+   [Paho-MQTT Android接入示例](https://www.alibabacloud.com/help/zh/doc-detail/146630.htm#task-2362441 "本文介绍如何使用Paho Android Service接入阿里云物联网平台，并进行数据收发。")
