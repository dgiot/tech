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

MQTT是基于TCP/IP协议栈构建的异步通信消息协议，是一种轻量级的发布、订阅信息传输协议。可在不可靠的网络环境中进行扩展，适用于设备硬件存储空间或网络带宽有限的场景。使用MQTT协议，消息发送者与接收者不受时间和空间的限制。物联网平台支持设备使用MQTT协议接入。

## 支持版本

目前物联网平台支持MQTT标准协议接入，兼容5.0、3.1.1和3.1版本协议，具体的协议请参见[MQTT 5.0](https://docs.oasis-open.org/mqtt/mqtt/v5.0/)、[MQTT 3.1.1](http://mqtt.org/)和 [MQTT 3.1](http://public.dhe.ibm.com/software/dw/webservices/ws-mqtt/mqtt-v3r1.html)协议文档。

**说明** 若需使用MQTT 5.0协议，请先购买企业版实例，然后[提交工单](https://selfservice.console.aliyun.com/ticket/createIndex)，为该实例申请开通白名单权限。

## 与标准MQTT的区别

+   支持MQTT的PUB、SUB、PING、PONG、CONNECT、DISCONNECT和UNSUB等报文。
+   支持clean session。
+   不支持will、retain msg。
+   支持QoS 0、QoS 1，不支持QoS 2。
+   不支持SUB QoS，消息QoS以发送方（PUB）指定为准。
+   基于原生的MQTT Topic上支持RRPC同步模式，服务器可以同步调用设备并获取设备回执结果。

## 支持的MQTT 5.0特性

MQTT 5.0协议在之前版本基础上添加了大量全新特性，提高了性能和易用性。更多信息，请参见[Appendix C. Summary of new features in MQTT v5.0](https://docs.oasis-open.org/mqtt/mqtt/v5.0/)。

目前，物联网平台支持MQTT 5.0的部分新增特性。

+   支持设置客户端和服务端发送报文的最大长度，直接过滤冗长的消息。
    
    ```auto
    MqttConnectionOptions connOpts = new MqttConnectionOptions();
    connOpts.setMaximumPacketSize(1024L);
    ```
    
+   支持设置QoS 1消息限流值，单位为条/秒。
    
    ```auto
    MqttConnectionOptions connOpts = new MqttConnectionOptions();
    connOpts.setReceiveMaximum(5);
    ```
    
+   支持设置UserProperty属性列表，每个属性由Key和Value组成，用于传输额外的属性数据。
    
    **说明** 最多可添加20个属性。属性中Key值不允许以下划线（\_）开头，Key和Value最大总长度不超过128个字符。
    
    ```auto
    MqttProperties properties = new MqttProperties();
    List<UserProperty> userPropertys = new ArrayList<>();
    userPropertys.add(new UserProperty("key1","value1"));
    properties.setUserProperties(userPropertys);
    ```
    
    设备使用MQTT 5.0协议成功接入物联网平台后，可在云端运行日志内容中，查看到上报的UserProperty数据。
    
+   新增了响应主题（ResponseTopic）和相关数据（CorrelationData），类似HTTP请求响应的模式，实现双方通信。
    
    例如，请求方为设备，接收方为您的业务服务器，您可通过AMQP订阅或规则流转后，从消息的属性列表中解析出ResponseTopic和CorrelationData，然后调用[Pub](https://help.aliyun.com/document_detail/69793.htm#doc-api-Iot-Pub "调用该接口通过自定义Topic向指定设备发布消息。")接口，将响应发送给设备。
    
    ```auto
    MqttProperties properties = new MqttProperties();
    properties.setCorrelationData("requestId12345".getBytes());
    properties.setResponseTopic("/" + productKey + "/" + deviceName + "/user/get");
    ```
    
    **说明**
    
    +   解析出的CorrelationData， 需要通过Base64解码，才能还原成设备上报的byte数组类型数据。
    +   ResponseTopic和CorrelationData的最大长度都不能超过128个字符。
    
+   增加了更多返回码，便于设备快速定位请求状态及问题。
    
    更多信息，请参见[错误排查](https://help.aliyun.com/document_detail/148610.htm#concept-2378353 "如果设备通过MQTT协议接入物联网平台失败，请根据错误码排查问题。")。
    
+   支持将消息通信Topic缩小为整型数值，来减小MQTT报文，节约网络带宽资源。

## 安全等级

+   TCP通道TLS直连模式：安全级别高。
    
    **说明**
    
    +   支持TLS协议1.0、1.1和1.2版本，强烈建议您的设备使用TLS 1.2加密。因TLS 1.0、1.1版本较老，可能有安全风险。
    +   设备端[Link SDK](https://help.aliyun.com/product/93051.html)已配置V1.2版本的TLS协议，您无需自行配置。
    
+   TCP直连模式（数据不加密）：安全级别低。
+   TCP直连模式，并使用芯片级加密（ID²硬件集成）：安全级别高。

## Topic规范

Topic定义及分类，请查看[什么是Topic](https://help.aliyun.com/document_detail/73731.htm#concept-mny-tnl-vdb "物联网平台中，服务端和设备端通过Topic来实现消息通信。Topic是针对设备的概念，Topic类是针对产品的概念。")。

系统默认通信类Topic可前往控制台设备详情页查看，功能类Topic可前往具体功能文档页查看。
