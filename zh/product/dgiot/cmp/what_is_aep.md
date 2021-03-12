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

在进行物联网平台云网关配置前，您需在中国电信AEP平台完成产品和设备创建，并添加应用。

## 前提条件

已完成中国电信AEP平台账号注册和认证。具体操作，请参见[用户注册](https://help.ctwing.cn/kuai-su-ru-men/ji-yu-zhong-guo-dian-xin-kai-fa-ban-duan-dao-duan-cheng-xu-yang-li/ping-tai-ru-zhu/yong-hu-zhu-ce.html)。

## 操作步骤

1.  登录[中国电信AEP平台](https://dm.ctwing.cn/#/productCenter/10095865/3/subscriptionTab?t=2000016872&ser=1&profile=1&productProtocol=3&tupIsProfile=1)。
2.  在左侧导航栏选择产品中心，单击右上角的创建产品。
3.  在弹出的对话框中，完成参数配置后，单击确定。
    
    本示例配置参数如下表所示。
    
    表 1. 产品的配置说明  
    
    | 参数 | 说明 |
    | --- | --- |
    | 产品名称 | NBProduct1，可自定义。 |
    | 产品分类 | 智慧城市/能源管理/智能水表，可自定义。 |
    | 节点类型 | 设备。<br> **说明** 针对NB-IoT设备，节点类型及下面的接入方式、网络协议和通信协议以此处配置为准。|
    | 接入方式 | 设备直连。 |
    | 网络类型 | NB-IoT。 |
    | 通信协议 | LWM2M。 |
    | 数据加密方式 | 明文，可自定义。<br> * 该加密方式支持LWM2M协议设备使用在线调试功能。<br> 本示例为了快速创建云网关设备，需在电信平台使用设备在线调试功能，快速模拟设备上线，进行数据上报。|
    | 认证方式 | IMEI认证，可自定义。 |
    | Endpoint格式 | imei，可自定义。 |
    | 是否已有电信官方认证通过的profile | 否，可自定义。 |
    | 是否透传 | 否，可自定义。 |
    
4.  在弹出的添加产品成功对话框中，单击立即添加设备。
5.  在产品NBProduct1的设备管理页签，单击添加设备，完成参数配置后，单击确定。
    
    本示例配置参数如下表所示。
    
    表 2. 设备的配置说明  
    
    | 参数 | 说明 |
    | --- | --- |
    | 设备名称 | nbdevice，可自定义。 |
    | IMEI号 | 321456123456098，可自定义。 |
    
6.  在设备列表中，单击nbdevice对应的在线模拟图标![在线模拟](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7192155061/p181722.png)，在AEP-在线调试页面，单击右上角的上线，激活设备，模拟数据上报。
7.  单击左侧导航栏的应用管理，单击页面右上角的新增应用，完成参数配置后，单击创建。
    
    可根据页面提示，自定义配置参数。
    
    应用创建完成后，在应用列表，单击该应用的查看详情按钮![查看详情](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/9113155061/p182457.png)，查看并保存App Key和App Secret的值。
